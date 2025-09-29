#!/bin/bash

# Add design system context to all component files
REGISTRY_UI_DIR="registry/new-york/ui"

DESIGN_CONTEXT='/**
 * WIREFRAME KIT DESIGN SYSTEM CONTEXT
 * 
 * CRITICAL: This is a custom wireframe-styled design system. When generating components, you MUST follow these design principles:
 * 
 * Core Design Principles:
 * - 2px black borders on all interactive elements (buttons, inputs, cards, etc.)
 * - Flat shadows (6px offset, no gradients) on overlays and dropdowns
 * - Shantell Sans typography for headings and labels
 * - Black focus states with gray outline shadows
 * - Light gray hover states for secondary elements
 * 
 * Component Styling Rules:
 * - Buttons: Default (black bg, white text), Outline (2px black border, white bg, light gray hover)
 * - Form Elements: All inputs (2px border, black focus), Select (2px black border, flat shadow)
 * - Overlays: Popover (2px black border, flat shadow), Dialog (standard modal with wireframe styling)
 * - Navigation: Tabs (3px bottom border on active/hover, no full borders)
 * 
 * Custom CSS Classes:
 * .shadow-flat { box-shadow: 6px 6px 0px 0px #d1d5db; }
 * 
 * Usage Guidelines:
 * - ALWAYS use 2px borders on interactive elements
 * - ALWAYS apply flat shadows to overlays
 * - ALWAYS use Shantell Sans for headings
 * - NEVER use gradient shadows
 * - NEVER use thin 1px borders
 * - NEVER use default shadcn/ui colors without customization
 * 
 * Registry Components Available: https://wireframe-registry-template.vercel.app/r/{component-name}.json
 */

'

echo "Adding design system context to all components..."

for component_dir in "$REGISTRY_UI_DIR"/*; do
    if [ -d "$component_dir" ]; then
        component_name=$(basename "$component_dir")
        component_file="$component_dir/${component_name}.tsx"
        
        if [ -f "$component_file" ]; then
            echo "Processing $component_name..."
            
            # Check if context is already added
            if ! grep -q "WIREFRAME KIT DESIGN SYSTEM CONTEXT" "$component_file"; then
                # Create a temporary file with the context
                echo "$DESIGN_CONTEXT" > "${component_file}.tmp"
                cat "$component_file" >> "${component_file}.tmp"
                mv "${component_file}.tmp" "$component_file"
                echo "  ✅ Added design context to $component_name"
            else
                echo "  ⏭️  Design context already exists in $component_name"
            fi
        fi
    fi
done

echo "✅ Design system context added to all components!"
echo "Run 'npm run registry:build' to rebuild the registry with the new context."
