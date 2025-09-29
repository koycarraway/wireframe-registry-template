# Wireframe Kit Design System Context

## Design System Instructions for v0

**IMPORTANT**: This is a custom wireframe-styled design system. When generating components, you MUST follow these design principles:

### Core Design Principles
- **2px black borders** on all interactive elements (buttons, inputs, cards, etc.)
- **Flat shadows** (6px offset, no gradients) on overlays and dropdowns
- **Shantell Sans typography** for headings and labels
- **Black focus states** with gray outline shadows
- **Light gray hover states** for secondary elements

### Component Styling Rules

#### Buttons
- Default: Black background, white text
- Outline: 2px black border, white background, light gray hover
- NO shadows on buttons (removed shadow-xs)

#### Form Elements
- All inputs: 2px border, black focus state
- Select dropdowns: 2px black border, flat shadow
- Checkbox/Radio: 2px black borders, black fill when checked
- Switch: 2px border when active, larger size

#### Overlays
- Popover: 2px black border, flat shadow
- Dialog: Standard modal with wireframe styling
- Dropdown: 2px black border, flat shadow, 2px thick separators

#### Navigation
- Tabs: 3px bottom border on active/hover, no full borders
- Sidebar: Collapsible with icons, vertical hierarchy lines

### Custom CSS Classes
```css
.shadow-flat {
  box-shadow: 6px 6px 0px 0px #d1d5db;
}
```

### Usage Guidelines
- ALWAYS use 2px borders on interactive elements
- ALWAYS apply flat shadows to overlays
- ALWAYS use Shantell Sans for headings
- NEVER use gradient shadows
- NEVER use thin 1px borders
- NEVER use default shadcn/ui colors without customization

### Registry Components Available
All components are available at: `https://wireframe-registry-template.vercel.app/r/{component-name}.json`

When creating new components, reference the existing wireframe-styled components from this registry to maintain consistency.
