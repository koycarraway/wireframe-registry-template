#!/bin/bash

# Sync components from wireframe-kit to registry
# Usage: ./sync-components.sh

SOURCE="../fleetio-wireframe-kit/src"
TARGET="."

echo "🔄 Syncing components from wireframe-kit..."

# Sync components
echo "  📦 Copying UI components..."
rsync -av --delete "$SOURCE/components/ui/" "$TARGET/components/ui/"

# Sync lib
echo "  📚 Copying lib files..."
rsync -av --delete "$SOURCE/lib/" "$TARGET/lib/"

# Sync hooks if they exist
if [ -d "$SOURCE/hooks" ]; then
  echo "  🪝 Copying hooks..."
  rsync -av --delete "$SOURCE/hooks/" "$TARGET/hooks/"
fi

# Sync global CSS
echo "  🎨 Copying global styles..."
cp "$SOURCE/index.css" "$TARGET/app/globals.css"

echo ""
echo "✅ Sync complete!"
echo ""
echo "Next steps:"
echo "  1. Review changes: git diff"
echo "  2. Build registry: npm run registry:build"
echo "  3. Test: npm run dev"
echo ""
