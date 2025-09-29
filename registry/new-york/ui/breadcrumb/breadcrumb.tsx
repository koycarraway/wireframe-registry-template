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
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/registry/new-york/lib/utils"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
