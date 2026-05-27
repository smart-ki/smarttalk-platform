#!/usr/bin/env bash
# Deploy script for the smarttalk-platform app on the Infomaniak VPS.
# Triggered via SSH by GitHub Actions through a forced command in
# /home/ki-smarttalk/.ssh/authorized_keys, so it always runs as ki-smarttalk
# and only ever performs this deploy — nothing else the SSH client requests.
set -euo pipefail

# Connection probe: lets the deploy key be verified without deploying.
if [ "${SSH_ORIGINAL_COMMAND:-}" = "probe" ]; then
  echo "PROBE_OK ($(whoami)@$(hostname))"
  exit 0
fi

APP_DIR="/home/ki-smarttalk/app"
PM2_APP="ki-smarttalk"
BRANCH="main"

export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"

cd "$APP_DIR"

echo ">> Fetching origin/$BRANCH"
git fetch --prune origin
# Match the remote exactly; untracked files (e.g. .env.production) are kept.
git reset --hard "origin/$BRANCH"

echo ">> Installing dependencies (npm ci)"
npm ci

echo ">> Building (next build)"
npm run build

echo ">> Reloading pm2 process: $PM2_APP"
pm2 reload "$PM2_APP" --update-env

echo ">> Deploy complete"
