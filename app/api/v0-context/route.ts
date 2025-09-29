import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const component = searchParams.get('component')
    
    // Get the base directory
    const baseDir = process.cwd()
    
    // Define the files to include in context
    const contextFiles = [
      {
        name: 'globals.css',
        path: path.join(baseDir, 'app', 'globals.css'),
        type: 'css'
      },
      {
        name: 'postcss.config.mjs', 
        path: path.join(baseDir, 'postcss.config.mjs'),
        type: 'config'
      },
      {
        name: 'tailwind.config.js',
        path: path.join(baseDir, 'tailwind.config.js'),
        type: 'config'
      },
      {
        name: 'layout.tsx',
        path: path.join(baseDir, 'app', 'layout.tsx'),
        type: 'component'
      },
      {
        name: 'components.json',
        path: path.join(baseDir, 'components.json'),
        type: 'config'
      }
    ]
    
    // Add the specific component if requested
    if (component) {
      const componentPath = path.join(baseDir, 'components', 'ui', `${component}.tsx`)
      if (fs.existsSync(componentPath)) {
        contextFiles.push({
          name: `${component}.tsx`,
          path: componentPath,
          type: 'component'
        })
      }
    }
    
    // Define the file type
    interface ContextFile {
      name: string
      path: string
      type: string
      content: string
    }
    
    // Read all context files
    const contextData = {
      designSystem: {
        name: 'Wireframe Kit Design System',
        description: 'A comprehensive wireframe-styled design system with 2px borders, flat shadows, and Shantell Sans typography',
        version: '1.0.0',
        homepage: 'https://wireframe-registry-template.vercel.app'
      },
      files: [] as ContextFile[]
    }
    
    for (const file of contextFiles) {
      if (fs.existsSync(file.path)) {
        try {
          const content = fs.readFileSync(file.path, 'utf8')
          contextData.files.push({
            name: file.name,
            path: file.path.replace(baseDir, ''),
            type: file.type,
            content: content
          })
        } catch (error) {
          console.warn(`Could not read file ${file.path}:`, error)
        }
      }
    }
    
    // Add registry information
    const registryPath = path.join(baseDir, 'public', 'r', 'registry.json')
    if (fs.existsSync(registryPath)) {
      const registryContent = fs.readFileSync(registryPath, 'utf8')
      const registry = JSON.parse(registryContent)
      contextData.registry = registry
    }
    
    return NextResponse.json(contextData, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Error generating v0 context:', error)
    return NextResponse.json({ error: 'Failed to generate v0 context' }, { status: 500 })
  }
}
