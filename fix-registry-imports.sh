#!/bin/bash

# Fix Registry Imports Script
# This script updates all imports in registry/new-york/ to use @/registry paths
# as required by shadcn registry documentation

set -e

echo "🔧 Fixing Registry Component Imports..."
echo ""

REGISTRY_DIR="./registry/new-york"

# Function to replace imports in a file
fix_imports() {
    local file="$1"
    echo "  📝 Fixing: $file"
    
    # Replace @/lib/utils with @/registry/new-york/lib/utils
    sed -i '' 's|from "@/lib/utils"|from "@/registry/new-york/lib/utils"|g' "$file"
    
    # Replace @/hooks/* with @/registry/new-york/hooks/*
    sed -i '' 's|from "@/hooks/|from "@/registry/new-york/hooks/|g' "$file"
    
    # Replace @/components/ui/* with @/registry/new-york/ui/*/*
    # This is more complex as we need to preserve the component name
    # Example: @/components/ui/button -> @/registry/new-york/ui/button/button
    
    # Handle specific UI component imports
    sed -i '' 's|from "@/components/ui/button"|from "@/registry/new-york/ui/button/button"|g' "$file"
    sed -i '' 's|from "@/components/ui/calendar"|from "@/registry/new-york/ui/calendar/calendar"|g' "$file"
    sed -i '' 's|from "@/components/ui/popover"|from "@/registry/new-york/ui/popover/popover"|g' "$file"
    sed -i '' 's|from "@/components/ui/label"|from "@/registry/new-york/ui/label/label"|g' "$file"
    sed -i '' 's|from "@/components/ui/separator"|from "@/registry/new-york/ui/separator/separator"|g' "$file"
    sed -i '' 's|from "@/components/ui/tooltip"|from "@/registry/new-york/ui/tooltip/tooltip"|g' "$file"
    sed -i '' 's|from "@/components/ui/sheet"|from "@/registry/new-york/ui/sheet/sheet"|g' "$file"
    sed -i '' 's|from "@/components/ui/skeleton"|from "@/registry/new-york/ui/skeleton/skeleton"|g' "$file"
    sed -i '' 's|from "@/components/ui/input"|from "@/registry/new-york/ui/input/input"|g' "$file"
}

echo "📂 Fixing UI components..."
for component_dir in "$REGISTRY_DIR/ui"/*; do
    if [ -d "$component_dir" ]; then
        for tsx_file in "$component_dir"/*.tsx; do
            if [ -f "$tsx_file" ]; then
                fix_imports "$tsx_file"
            fi
        done
    fi
done

echo ""
echo "📂 Fixing hooks..."
for hook_file in "$REGISTRY_DIR/hooks"/*.ts; do
    if [ -f "$hook_file" ]; then
        fix_imports "$hook_file"
    fi
done

echo ""
echo "✅ Import fixes complete!"
echo ""
echo "📋 Summary:"
echo "  - Updated @/lib/utils → @/registry/new-york/lib/utils"
echo "  - Updated @/hooks/* → @/registry/new-york/hooks/*"
echo "  - Updated @/components/ui/* → @/registry/new-york/ui/*/*"
echo ""
echo "Next steps:"
echo "  1. Review the changes: git diff"
echo "  2. Sync latest styling: ./sync-components.sh --registry-only"
echo "  3. Rebuild registry: npm run registry:build"
