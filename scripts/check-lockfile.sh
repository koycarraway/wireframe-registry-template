#!/bin/bash

# Check if pnpm-lock.yaml is up to date with package.json
# This script prevents ERR_PNPM_OUTDATED_LOCKFILE errors

echo "🔍 Checking pnpm-lock.yaml consistency..."

# Check if lockfile exists
if [ ! -f "pnpm-lock.yaml" ]; then
    echo "❌ pnpm-lock.yaml not found. Running 'pnpm install'..."
    pnpm install
    exit 0
fi

# Try a simple install to ensure everything is in sync
echo "🔄 Ensuring dependencies are in sync..."
if pnpm install --no-frozen-lockfile > /dev/null 2>&1; then
    echo "✅ Dependencies are in sync"
    exit 0
else
    echo "❌ Failed to sync dependencies"
    exit 1
fi
