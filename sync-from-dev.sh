#!/bin/bash

# Comprehensive Sync Script - Development to Registry
# Syncs wireframe components from wireframe-kit to wireframe-registry
# and fixes imports for registry compliance

set -e

SOURCE_DIR="../fleetio-wireframe-kit"
DEST_DIR="."

echo "🔄 Syncing Wireframe Components..."
echo ""

# Step 1: Sync UI components to components/ui (for homepage/showcase)
echo "📦 Step 1: Syncing to components/ui/ (for homepage)..."
rsync -av --exclude='**/*.stories.tsx' "$SOURCE_DIR/src/components/ui/" "$DEST_DIR/components/ui/"
echo "   ✅ components/ui/ synced"

# Step 2: Sync UI components to registry/new-york/ui (for distribution)
echo ""
echo "📦 Step 2: Syncing to registry/new-york/ui/ (for distribution)..."
for component_dir in "$SOURCE_DIR/src/components/ui"/*; do
    if [ -d "$component_dir" ]; then
        component_name=$(basename "$component_dir")
        component_file="$component_dir/${component_name}.tsx"
        
        if [ -f "$component_file" ]; then
            # Create directory if it doesn't exist
            mkdir -p "$DEST_DIR/registry/new-york/ui/$component_name"
            
            # Copy the component
            cp "$component_file" "$DEST_DIR/registry/new-york/ui/$component_name/${component_name}.tsx"
            echo "   ✅ $component_name synced"
        fi
    fi
done

# Step 3: Sync lib files
echo ""
echo "📚 Step 3: Syncing lib files..."
rsync -av "$SOURCE_DIR/src/lib/" "$DEST_DIR/lib/"
rsync -av "$SOURCE_DIR/src/lib/" "$DEST_DIR/registry/new-york/lib/"
echo "   ✅ lib/ synced to both locations"

# Step 4: Sync hooks
echo ""
echo "🪝 Step 4: Syncing hooks..."
rsync -av "$SOURCE_DIR/src/hooks/" "$DEST_DIR/hooks/"
rsync -av "$SOURCE_DIR/src/hooks/" "$DEST_DIR/registry/new-york/hooks/"
echo "   ✅ hooks/ synced to both locations"

# Step 5: Sync global styles
echo ""
echo "🎨 Step 5: Syncing global styles..."
cp "$SOURCE_DIR/src/index.css" "$DEST_DIR/app/globals.css"
echo "   ✅ globals.css synced"

# Step 6: Fix registry imports
echo ""
echo "🔧 Step 6: Fixing registry imports..."
REGISTRY_UI_DIR="$DEST_DIR/registry/new-york/ui"

for component_dir in "$REGISTRY_UI_DIR"/*; do
    if [ -d "$component_dir" ]; then
        for tsx_file in "$component_dir"/*.tsx; do
            if [ -f "$tsx_file" ]; then
                component_name=$(basename "$component_dir")
                echo "   📝 Fixing imports in: $component_name"
                
                # Fix imports
                sed -i '' 's|from "@/lib/utils"|from "@/registry/new-york/lib/utils"|g' "$tsx_file"
                sed -i '' 's|from "@/hooks/|from "@/registry/new-york/hooks/|g' "$tsx_file"
                
                # Fix UI component imports (need to handle multiple patterns)
                sed -i '' 's|from "@/components/ui/button"|from "@/registry/new-york/ui/button/button"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/calendar"|from "@/registry/new-york/ui/calendar/calendar"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/popover"|from "@/registry/new-york/ui/popover/popover"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/label"|from "@/registry/new-york/ui/label/label"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/separator"|from "@/registry/new-york/ui/separator/separator"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/tooltip"|from "@/registry/new-york/ui/tooltip/tooltip"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/sheet"|from "@/registry/new-york/ui/sheet/sheet"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/skeleton"|from "@/registry/new-york/ui/skeleton/skeleton"|g' "$tsx_file"
                sed -i '' 's|from "@/components/ui/input"|from "@/registry/new-york/ui/input/input"|g' "$tsx_file"
            fi
        done
    fi
done

# Fix hooks imports
for hook_file in "$DEST_DIR/registry/new-york/hooks"/*.ts; do
    if [ -f "$hook_file" ]; then
        sed -i '' 's|from "@/lib/utils"|from "@/registry/new-york/lib/utils"|g' "$hook_file"
    fi
done

echo "   ✅ Registry imports fixed"

echo ""
echo "✅ Sync Complete!"
echo ""
echo "📋 Summary:"
echo "  ✅ components/ui/ - Updated (for homepage/showcase)"
echo "  ✅ registry/new-york/ui/ - Updated with registry imports"
echo "  ✅ lib/ - Synced to both locations"
echo "  ✅ hooks/ - Synced to both locations"
echo "  ✅ globals.css - Updated"
echo "  ✅ Registry imports - Fixed"
echo ""
echo "🔨 Next steps:"
echo "  1. Review changes: git diff"
echo "  2. Build registry: npm run registry:build"
echo "  3. Test dev server: npm run dev"
echo "  4. Test installation: npx shadcn@latest add http://localhost:3000/r/button.json"
