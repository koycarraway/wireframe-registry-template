import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Read the registry.json file
    const registryPath = path.join(process.cwd(), 'public', 'r', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf8')
    const registry = JSON.parse(registryContent)
    
    return NextResponse.json(registry, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Error reading registry:', error)
    return NextResponse.json({ error: 'Failed to read registry' }, { status: 500 })
  }
}
