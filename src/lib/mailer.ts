import { ClientSecretCredential } from '@azure/identity'

/**
 * Versendet Mails via Microsoft Graph API (Client-Credentials-Flow).
 *
 * Env-Vars:
 *   AZURE_TENANT_ID       Directory (tenant) ID aus Entra
 *   AZURE_CLIENT_ID       Application (client) ID der App-Registration
 *   AZURE_CLIENT_SECRET   Client Secret der App-Registration
 *   GRAPH_SENDER          UPN der Absender-Mailbox, z.B. ki@smarttalk.ch
 *   BOOKING_EMAIL         Empfaenger (kommasepariert)
 *
 * Die Mailbox-Restriktion erfolgt ueber New-ApplicationAccessPolicy in Exchange
 * Online, damit die App nur von GRAPH_SENDER senden darf.
 */

let _credential: ClientSecretCredential | null = null

function getCredential(): ClientSecretCredential {
  if (_credential) return _credential
  const tenantId = process.env.AZURE_TENANT_ID
  const clientId = process.env.AZURE_CLIENT_ID
  const clientSecret = process.env.AZURE_CLIENT_SECRET
  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('AZURE_TENANT_ID / AZURE_CLIENT_ID / AZURE_CLIENT_SECRET fehlt in env')
  }
  _credential = new ClientSecretCredential(tenantId, clientId, clientSecret)
  return _credential
}

async function getAccessToken(): Promise<string> {
  const result = await getCredential().getToken('https://graph.microsoft.com/.default')
  if (!result?.token) throw new Error('Kein Access-Token von Entra erhalten')
  return result.token
}

export async function sendMail(opts: { subject: string; html: string }) {
  const sender = process.env.GRAPH_SENDER
  if (!sender) throw new Error('GRAPH_SENDER fehlt in env')

  const empfaenger = (process.env.BOOKING_EMAIL ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (empfaenger.length === 0) throw new Error('BOOKING_EMAIL ist leer')

  const token = await getAccessToken()

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject: opts.subject,
          body: { contentType: 'HTML', content: opts.html },
          toRecipients: empfaenger.map((addr) => ({ emailAddress: { address: addr } })),
        },
        saveToSentItems: true,
      }),
    },
  )

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Graph sendMail ${res.status}: ${errText}`)
  }
}
