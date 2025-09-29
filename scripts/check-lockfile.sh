#!/bin/bash

# Check if pnpm-lock.yaml is up to date with package.json
# This script prevents ERR_PNPM_OUTDATED_LOCKFILE errors

echo "🔍 Checking pnpm-lock.yaml consistency..."

# Check if lockfile exists
if [ ! -f "pnpm-lock.yaml" ]; then
    echo "❌ pnpm-lock.yaml not found. Run 'pnpm install' first."
    exit 1
fi

# Check if lockfile is up to date
if ! pnpm install --frozen-lockfile --dry-run > /dev/null 2>&1; then
    echo "❌ pnpm-lock.yaml is out of sync with package.json"
    echo "🔧 Run 'pnpm install' to update the lockfile"
    exit 1
fi

echo "✅ pnpm-lock.yaml is up to date"
exit 0
