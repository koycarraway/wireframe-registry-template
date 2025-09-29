import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const component = searchParams.get('component')
    
    // Get the base directory
    const baseDir = process.cwd()
    
    // Read the registry.json to get all components
    const registryPath = path.join(baseDir, 'public', 'r', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf8')
    const registry = JSON.parse(registryContent)
    
    // Create comprehensive v0 context
    const v0Context = {
      // Registry information
      registry: {
        name: registry.name,
        homepage: registry.homepage,
        description: registry.description,
        totalComponents: registry.items.length,
        components: registry.items.map((item: { name: string; type: string; title: string; description: string }) => ({
          name: item.name,
          type: item.type,
          title: item.title,
          description: item.description,
          url: `https://wireframe-registry-template.vercel.app/r/${item.name}.json`
        }))
      },
      
      // Design system context
      designSystem: {
        name: "Wireframe Kit Design System",
        description: "A comprehensive wireframe-styled design system with 2px borders, flat shadows, and Shantell Sans typography",
        principles: [
          "2px black borders on all interactive elements (buttons, inputs, cards, etc.)",
          "Flat shadows (6px offset, no gradients) on overlays and dropdowns",
          "Shantell Sans typography for headings and labels",
          "Black focus states with gray outline shadows",
          "Light gray hover states for secondary elements"
        ],
        forbidden: [
          "Gradient shadows",
          "Thin 1px borders",
          "Default shadcn/ui colors without customization"
        ],
        customClasses: {
          "shadow-flat": "box-shadow: 6px 6px 0px 0px #d1d5db"
        }
      },
      
      // Current component context
      currentComponent: component ? {
        name: component,
        url: `https://wireframe-registry-template.vercel.app/r/${component}.json`,
        description: "This is the component you clicked on. Use it as a starting point, but feel free to use any other components from the registry."
      } : null,
      
      // Usage instructions for v0
      instructions: {
        context: "This is a wireframe-styled design system. When generating components, you MUST follow the wireframe design principles.",
        registryAccess: "You have access to all components in this registry. Use the component URLs to reference other components.",
        styling: "All components should have 2px borders, flat shadows, and use the Shantell Sans font.",
        examples: {
          button: "Default (black bg, white text), Outline (2px black border, white bg, light gray hover)",
          input: "2px border, black focus, flat shadow utility",
          card: "2px black border, flat shadow, white background",
          popover: "2px black border, flat shadow, white background"
        }
      }
    }
    
    return NextResponse.json(v0Context, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Error generating v0 integration context:', error)
    return NextResponse.json({ error: 'Failed to generate v0 integration context' }, { status: 500 })
  }
}
