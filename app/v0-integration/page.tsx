import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function V0IntegrationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">v0 Integration Guide</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to use the Wireframe Kit registry with v0.dev for AI-powered component generation
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How v0 Integration Works</CardTitle>
            <CardDescription>
              The Wireframe Kit registry is fully integrated with v0.dev for seamless AI-powered component generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Component Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  v0 can discover all 29 components in the registry through the registry.json endpoint
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">2. Design System Context</h3>
                <p className="text-sm text-muted-foreground">
                  Each component includes embedded design system context for consistent styling
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">3. Cross-Component Usage</h3>
                <p className="text-sm text-muted-foreground">
                  v0 can reference and combine multiple components from the registry
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">4. Wireframe Styling</h3>
                <p className="text-sm text-muted-foreground">
                  All components follow the wireframe design principles with 2px borders and flat shadows
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Components</CardTitle>
            <CardDescription>
              The registry includes 29 wireframe-styled components across all categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {[
                "Button", "Input", "Card", "Badge", "Avatar", "Checkbox", "Radio Group", "Switch",
                "Select", "Textarea", "Popover", "Dialog", "Alert Dialog", "Dropdown Menu", "Hover Card",
                "Tooltip", "Separator", "Calendar", "Date Picker", "Table", "Tabs", "Alert", "Skeleton",
                "Breadcrumb", "Sidebar", "Sonner", "Calendar", "Date Picker", "Table"
              ].map((component) => (
                <Badge key={component} variant="outline" className="text-xs">
                  {component}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design System Principles</CardTitle>
            <CardDescription>
              All components follow these wireframe design principles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-green-600">Required Styling</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 2px black borders on all interactive elements</li>
                  <li>• Flat shadows (6px offset, no gradients)</li>
                  <li>• Shantell Sans typography for headings</li>
                  <li>• Black focus states with gray outline shadows</li>
                  <li>• Light gray hover states for secondary elements</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-red-600">Forbidden Styling</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Gradient shadows</li>
                  <li>• Thin 1px borders</li>
                  <li>• Default shadcn/ui colors without customization</li>
                  <li>• Rounded corners on wireframe elements</li>
                  <li>• Soft shadows or glows</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
            <CardDescription>
              The registry exposes several endpoints for v0 integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-md">
                <code className="text-sm font-mono">
                  /r/registry.json
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Complete registry with all components and metadata
                </p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <code className="text-sm font-mono">
                  /r/{"{component}"}.json
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Individual component with embedded design system context
                </p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <code className="text-sm font-mono">
                  /api/v0-integration?component={"{component}"}
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Comprehensive v0 context with registry discovery
                </p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <code className="text-sm font-mono">
                  /api/registry-discovery
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Complete component discovery and design system context
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              How to use the registry components with v0
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 border-2 border-black rounded-md">
                <h4 className="font-semibold mb-2">Example 1: Form with Inputs</h4>
                <p className="text-sm text-muted-foreground">
                  "Create a contact form using the Input, Button, and Card components from the Wireframe Kit registry"
                </p>
              </div>
              <div className="p-4 border-2 border-black rounded-md">
                <h4 className="font-semibold mb-2">Example 2: Dashboard Layout</h4>
                <p className="text-sm text-muted-foreground">
                  "Build a dashboard using Card, Table, Tabs, and Sidebar components with wireframe styling"
                </p>
              </div>
              <div className="p-4 border-2 border-black rounded-md">
                <h4 className="font-semibold mb-2">Example 3: Data Display</h4>
                <p className="text-sm text-muted-foreground">
                  "Create a data table with filters using Table, Select, Input, and Button components"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <Button asChild>
            <a href="/" className="text-white">
              Back to Registry
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
