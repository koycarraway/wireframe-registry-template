/**
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


import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/registry/new-york/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-4 shrink-0 rounded-full border-2 border-black bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=checked]:border-black",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <div className="size-1.5 rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
