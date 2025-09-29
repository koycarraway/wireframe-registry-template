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
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/registry/new-york/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
