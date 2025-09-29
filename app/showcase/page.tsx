"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert } from "@/components/ui/alert"
import Link from "next/link"

export default function ShowcasePage() {
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("option-1")

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Component Showcase</h1>
            <p className="text-muted-foreground mt-2">
              Preview all Fleetio wireframe components in action
            </p>
          </div>
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>

        <Separator />

        {/* Tabs for Categories */}
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList>
            <TabsTrigger value="buttons">Buttons & Badges</TabsTrigger>
            <TabsTrigger value="forms">Form Controls</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Buttons & Badges Tab */}
          <TabsContent value="buttons" className="space-y-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Wireframe-styled buttons with 2px borders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Status and label badges for categorization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                    Custom Blue
                  </Badge>
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    Custom Green
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Form Controls Tab */}
          <TabsContent value="forms" className="space-y-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Input & Labels</CardTitle>
                <CardDescription>
                  Text inputs with 2px borders and black focus state
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checkboxes & Radio Buttons</CardTitle>
                <CardDescription>
                  Selection controls with wireframe styling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-medium">Checkboxes</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={checkboxChecked}
                      onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="font-normal cursor-pointer">
                      Accept terms and conditions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="font-normal cursor-pointer">
                      Receive marketing emails
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-check" disabled />
                    <Label htmlFor="disabled-check" className="font-normal cursor-pointer opacity-50">
                      Disabled checkbox
                    </Label>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label className="text-base font-medium">Radio Buttons</Label>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-1" id="option-1" />
                      <Label htmlFor="option-1" className="font-normal cursor-pointer">
                        Option 1
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-2" id="option-2" />
                      <Label htmlFor="option-2" className="font-normal cursor-pointer">
                        Option 2
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-3" id="option-3" />
                      <Label htmlFor="option-3" className="font-normal cursor-pointer">
                        Option 3
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Switches</CardTitle>
                <CardDescription>
                  Toggle switches with 2px border when active
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="notifications" 
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Label htmlFor="notifications" className="font-normal cursor-pointer">
                    Enable notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-save" defaultChecked />
                  <Label htmlFor="auto-save" className="font-normal cursor-pointer">
                    Auto-save enabled
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="disabled-switch" disabled />
                  <Label htmlFor="disabled-switch" className="font-normal cursor-pointer opacity-50">
                    Disabled switch
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>
                  Container components for content grouping
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">This is a basic card with header and content.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Another Card</CardTitle>
                      <CardDescription>With some content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button size="sm" className="w-full">Action Button</Button>
                      <Button size="sm" variant="outline" className="w-full">Secondary Action</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separators</CardTitle>
                <CardDescription>
                  2px thick separators for content division
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm mb-4">Horizontal separator</p>
                  <Separator />
                  <p className="text-sm mt-4">Content below separator</p>
                </div>
                
                <div className="flex items-center gap-4 h-12">
                  <span className="text-sm">Vertical</span>
                  <Separator orientation="vertical" className="h-8" />
                  <span className="text-sm">Separators</span>
                  <Separator orientation="vertical" className="h-8" />
                  <span className="text-sm">Too</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>
                  Notification messages with different variants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-2">
                    <h5 className="font-medium">Default Alert</h5>
                    <p className="text-sm text-muted-foreground">
                      This is a default alert message
                    </p>
                  </div>
                </Alert>

                <Alert variant="destructive">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-2">
                    <h5 className="font-medium">Error Alert</h5>
                    <p className="text-sm">
                      Something went wrong with your request
                    </p>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component States</CardTitle>
                <CardDescription>
                  Interactive components showing different states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Enabled</Label>
                    <Button className="w-full">Click Me</Button>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Disabled</Label>
                    <Button className="w-full" disabled>Disabled</Button>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Loading</Label>
                    <Button className="w-full" disabled>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">With Icon</Label>
                    <Button className="w-full">
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add Item
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Looking for the full examples? Check out the original project:
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">
                  fleetio-wireframe-kit/src/App.tsx
                </code>
              </div>
              <Link href="/">
                <Button variant="outline">View All Components</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
