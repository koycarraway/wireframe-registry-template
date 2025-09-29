"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { OpenInV0Button } from "@/components/open-in-v0-button"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Wireframe Kit</h1>
          <p className="text-lg text-muted-foreground">
            A collection of wireframe-styled UI components for fleet management applications
          </p>
          <div className="flex items-center gap-4">
            <Badge>29 Components</Badge>
            <Badge variant="outline">shadcn/ui Registry</Badge>
            <Link href="/showcase">
              <Button variant="outline" className="ml-4">
                View Component Showcase →
              </Button>
            </Link>
          </div>
        </div>

        <Separator />

        {/* Installation */}
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>
              Install components using the shadcn CLI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-md font-mono text-sm">
              npx shadcn@latest add https://wireframe-registry-template.vercel.app/r/button.json
            </div>
            <p className="text-sm text-muted-foreground">
              Replace <code>button</code> with any component name from the list below.
            </p>
          </CardContent>
        </Card>

        {/* Component Showcase */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "button", desc: "Wireframe button with 2px borders" },
              { name: "input", desc: "Input with 2px border & black focus" },
              { name: "checkbox", desc: "Checkbox with thick borders" },
              { name: "radio-group", desc: "Radio buttons with wireframe style" },
              { name: "switch", desc: "Toggle with 2px border" },
              { name: "textarea", desc: "Multi-line text input" },
              { name: "select", desc: "Dropdown with flat shadow" },
              { name: "label", desc: "Form label component" },
              { name: "separator", desc: "2px thick separator" },
              { name: "popover", desc: "Popover with flat shadow" },
              { name: "dialog", desc: "Modal dialog" },
              { name: "alert-dialog", desc: "Confirmation dialog" },
              { name: "dropdown-menu", desc: "Menu with flat shadow" },
              { name: "hover-card", desc: "Hover card with flat shadow" },
              { name: "card", desc: "Content card" },
              { name: "badge", desc: "Status badge" },
              { name: "avatar", desc: "User avatar" },
              { name: "table", desc: "Data table" },
              { name: "tabs", desc: "Tabs with bottom border" },
              { name: "alert", desc: "Alert notifications" },
              { name: "skeleton", desc: "Loading skeleton" },
              { name: "tooltip", desc: "Tooltip component" },
              { name: "breadcrumb", desc: "Breadcrumb navigation" },
              { name: "calendar", desc: "Calendar with flat shadow" },
              { name: "date-picker", desc: "Custom date picker" },
              { name: "sonner", desc: "Toast notifications" },
              { name: "sidebar", desc: "Collapsible sidebar" },
              { name: "sheet", desc: "Side sheet" },
            ].map((component) => (
              <Card key={component.name}>
                <CardHeader>
                  <CardTitle className="text-lg font-mono">{component.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {component.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `npx shadcn@latest add https://wireframe-registry-template.vercel.app/r/${component.name}.json`
                        )
                      }}
                    >
                      Copy Install Command
                    </Button>
                    <OpenInV0Button name={component.name} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm">Wireframe aesthetic with thick 2px borders</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm">Flat shadow utility (6px offset)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm">Shantell Sans typography</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm">Fleet management themed examples</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm">29 customized components ready to use</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}