import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const baseDir = process.cwd()
    
    // Read the registry.json
    const registryPath = path.join(baseDir, 'public', 'r', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf8')
    const registry = JSON.parse(registryContent)
    
    // Create a comprehensive discovery response
    const discovery = {
      // Registry metadata
      registry: {
        name: registry.name,
        homepage: registry.homepage,
        description: registry.description,
        version: "1.0.0"
      },
      
      // All available components with full context
      components: registry.items.map((item: any) => ({
        name: item.name,
        type: item.type,
        title: item.title,
        description: item.description,
        url: `https://wireframe-registry-template.vercel.app/r/${item.name}.json`,
        dependencies: item.dependencies || [],
        registryDependencies: item.registryDependencies || []
      })),
      
      // Design system context
      designSystem: {
        name: "Wireframe Kit Design System",
        description: "A comprehensive wireframe-styled design system with 2px borders, flat shadows, and Shantell Sans typography",
        principles: [
          "2px black borders on all interactive elements",
          "Flat shadows (6px offset, no gradients) on overlays",
          "Shantell Sans typography for headings and labels",
          "Black focus states with gray outline shadows",
          "Light gray hover states for secondary elements"
        ],
        customClasses: {
          "shadow-flat": "box-shadow: 6px 6px 0px 0px #d1d5db"
        }
      },
      
      // Usage instructions
      instructions: {
        context: "This is a wireframe-styled design system. When generating components, you MUST follow the wireframe design principles.",
        componentAccess: "All components are available via their individual JSON URLs. Use the component URLs to reference other components.",
        styling: "All components should have 2px borders, flat shadows, and use the Shantell Sans font.",
        examples: {
          button: "Default (black bg, white text), Outline (2px black border, white bg, light gray hover)",
          input: "2px border, black focus, flat shadow utility",
          card: "2px black border, flat shadow, white background",
          popover: "2px black border, flat shadow, white background"
        }
      }
    }
    
    return NextResponse.json(discovery, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Error generating registry discovery:', error)
    return NextResponse.json({ error: 'Failed to generate registry discovery' }, { status: 500 })
  }
}
