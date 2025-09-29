# Wireframe Kit Design System

## Overview
This is a custom wireframe-styled design system built on shadcn/ui with bold 2px borders, flat shadows, and Shantell Sans typography. All components follow a consistent wireframe aesthetic perfect for fleet management applications.

## Key Design Principles

### Typography
- **Primary Font**: Shantell Sans (handwriting-style font for wireframe feel)
- **Fallback**: System fonts for accessibility

### Borders & Shadows
- **Border Style**: 2px solid black borders on all interactive elements
- **Focus States**: Black borders with gray outline shadows (3px ring)
- **Flat Shadow**: Custom 6px offset shadow (`shadow-flat` class) - no gradients
- **Shadow Color**: Light gray (#d1d5db)

### Color System
- **Primary**: Black borders and text
- **Secondary**: Light gray backgrounds on hover
- **Muted**: Light gray for inactive states
- **Background**: White/transparent backgrounds

## Component Styling Rules

### Buttons
- **Default**: Black background, white text
- **Outline**: 2px black border, white background, light gray hover
- **Secondary**: Light gray background
- **No shadows** on buttons (removed `shadow-xs`)

### Form Elements
- **Inputs**: 2px border, black focus state, no shadows
- **Select**: Matches input styling with flat shadow dropdown
- **Textarea**: Same as inputs
- **Checkbox/Radio**: 2px black borders, black fill when checked
- **Switch**: 2px border when active, larger size (h-6 w-10)

### Overlays
- **Popover**: 2px black border, flat shadow
- **Dialog**: Standard modal with wireframe styling
- **Dropdown**: 2px black border, flat shadow, 2px thick separators
- **Hover Card**: 2px black border, flat shadow

### Navigation
- **Tabs**: 3px bottom border on active/hover, no full borders
- **Breadcrumb**: Standard navigation with wireframe styling
- **Sidebar**: Collapsible with icons, vertical hierarchy lines

### Feedback
- **Alert**: Multiple variants (default, destructive, warning, success)
- **Sonner**: 2px black border, flat shadow (applied via CSS overrides)
- **Skeleton**: Loading states with wireframe aesthetic
- **Tooltip**: Standard tooltip with wireframe styling

## Usage Guidelines

### DO:
- Use 2px borders on all interactive elements
- Apply flat shadows to overlays and dropdowns
- Use Shantell Sans for headings and labels
- Maintain consistent spacing and sizing
- Use black for active/focused states
- Use light gray for hover states

### DON'T:
- Use gradient shadows (use flat shadows instead)
- Use rounded corners excessively
- Use thin 1px borders
- Mix different border styles
- Use default shadcn/ui colors without customization

## Custom CSS Classes

```css
.shadow-flat {
  box-shadow: 6px 6px 0px 0px #d1d5db;
}
```

## Component Dependencies
- All components use `@/lib/utils` for className merging
- Form components depend on `@radix-ui/react-*` primitives
- Date components use `date-fns` for formatting
- Sonner uses `next-themes` for theme support

## Registry URL
Components are available at: `https://wireframe-registry-template.vercel.app/r/{component-name}.json`

## Installation
```bash
npx shadcn@latest add https://wireframe-registry-template.vercel.app/r/button.json
```
