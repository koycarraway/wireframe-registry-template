# Wireframe Styling Checklist

This document verifies that all components have the correct wireframe styling applied.

## ✅ Global Styles

- [x] **Shantell Sans Font** - Applied in `app/globals.css` and `index.html`
- [x] **Flat Shadow Utility** - `.shadow-flat` class with 6px offset (`#d1d5db`)
- [x] **Sonner Custom Styling** - 2px black border + flat shadow in `app/globals.css`

## ✅ Form Controls

### Input
- [x] `border-2` - 2px border thickness
- [x] `border-input` - Default gray border
- [x] `focus-visible:border-black` - Black border on focus
- [x] No `shadow-xs` - Shadow removed
- [x] `rounded-sm` - Minimal rounding

### Textarea
- [x] `border-2 border-input` - Matches input
- [x] `focus-visible:border-black` - Black focus border
- [x] No `shadow-xs` - Shadow removed

### Checkbox
- [x] `border-2 border-black` - Thick black border
- [x] `size-4` - Original size maintained
- [x] `bg-white` - White background unchecked
- [x] `data-[state=checked]:bg-black` - Black background checked
- [x] White checkmark icon when checked

### Radio Group
- [x] `border-2 border-black` - Thick black border
- [x] `size-4` - Original size maintained
- [x] `bg-white` - White background unchecked
- [x] `data-[state=checked]:bg-black` - Black background checked
- [x] White dot (`size-1.5`) when checked

### Switch
- [x] `h-6 w-10` - Slightly larger size
- [x] `border-2` - 2px border
- [x] `border-transparent` - Transparent when off
- [x] `data-[state=checked]:border-black` - Black border when on
- [x] Thumb size `size-5` to match larger switch
- [x] No border on thumb (avoid doubled border)

### Select
- [x] **SelectTrigger**: `border-2 border-input` - Matches input
- [x] **SelectTrigger**: No `shadow-xs`
- [x] **SelectTrigger**: `focus-visible:border-black` - Black focus
- [x] **SelectTrigger**: `data-[state=open]:border-black` - Black when open
- [x] **SelectTrigger**: Ring shadow on focus/open
- [x] **SelectContent**: `border-2 border-black` + `shadow-flat`

### Label
- [x] Standard styling - No special wireframe changes needed

## ✅ Buttons

### Button (all variants)
- [x] **Default**: Primary color, no border changes needed
- [x] **Secondary**: Secondary color, no border changes needed
- [x] **Outline**: 
  - `border-2 border-black` - Thick black border
  - `bg-white text-black` - White background, black text
  - `hover:bg-secondary` - Light gray hover (not black)
- [x] **Destructive**: Red styling, no border changes needed
- [x] **Ghost**: No border, hover effects only
- [x] **Link**: Text-only, no borders

## ✅ Layout Components

### Separator
- [x] `h-0.5` / `w-0.5` - 2px thickness (not 1px)
- [x] `bg-border` - Original gray color maintained
- [x] Horizontal and vertical both 2px

### Card
- [x] Standard card styling - Works with theme

### Table
- [x] Standard table styling - Works with theme

### Tabs
- [x] **TabsList**: No background, no border, no rounded corners
- [x] **TabsTrigger**:
  - `border-b-[3px]` - 3px bottom border only
  - `border-transparent` - Transparent by default
  - `data-[state=active]:border-black` - Black when active
  - `hover:border-input` - Light gray on hover
  - `text-muted-foreground` - Gray text by default
  - `data-[state=active]:text-foreground` - Black text when active
  - `py-2` - Extra padding top/bottom

## ✅ Overlay Components

### Popover
- [x] `border-2 border-black` - Thick black border
- [x] `shadow-flat` - Flat shadow (6px offset)
- [x] `rounded-sm` - Minimal rounding

### Dialog
- [x] Standard dialog styling - Works with theme

### Alert Dialog
- [x] Standard alert dialog styling - Works with theme

### Dropdown Menu
- [x] **DropdownMenuContent**: `border-2 border-black` + `shadow-flat`
- [x] **DropdownMenuSubContent**: `border-2 border-black` + `shadow-flat`
- [x] **DropdownMenuSeparator**: `h-0.5` - 2px thickness

### Hover Card
- [x] `border-2 border-black` - Thick black border
- [x] `shadow-flat` - Flat shadow (6px offset)

### Tooltip
- [x] Standard tooltip styling - Works with theme

## ✅ Feedback Components

### Alert
- [x] All variants (default, destructive, warning, success)
- [x] Standard styling with theme colors

### Badge
- [x] Standard badge styling - Works with theme
- [x] Various variants implemented

### Sonner (Toasts)
- [x] `border: 2px solid black !important` - In globals.css
- [x] `box-shadow: 6px 6px 0px 0px #d1d5db !important` - Flat shadow

### Skeleton
- [x] Standard skeleton styling - Works with theme

## ✅ Data Components

### Calendar
- [x] `border-2 border-black` when used in examples
- [x] `shadow-flat` when used in examples
- [x] Standard internal styling

### Date Picker
- [x] Custom component composing Popover + Calendar
- [x] Trigger matches input styling (`border-2 border-input`)
- [x] Popover content has flat shadow

## ✅ Navigation

### Breadcrumb
- [x] Standard breadcrumb styling - Works with theme

### Sidebar
- [x] Custom static implementation
- [x] Collapsible with state management
- [x] Fleet management taxonomy
- [x] Vertical line for sub-menu hierarchy

## ✅ Display

### Avatar
- [x] Standard avatar styling - Works with theme

### Sheet
- [x] Standard sheet styling - Works with theme

---

## 🔍 Verification Commands

Check border styling consistency:
```bash
# Check 2px borders in original
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-kit
grep -r "border-2" src/components/ui/

# Check 2px borders in registry
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
grep -r "border-2" components/ui/
```

Check flat shadow usage:
```bash
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
grep -r "shadow-flat" components/ui/ app/
```

Check separator thickness:
```bash
grep "h-0.5" */components/ui/separator.tsx
```

---

## 📝 Notes

- **Rounded corners**: Most components use `rounded-sm` for minimal rounding
- **Focus states**: Most form controls use black borders on focus
- **Shadow**: Only `shadow-flat` is used, no `shadow-xs` or other shadows
- **Border thickness**: All wireframe borders are `border-2` (2px)
- **Colors**: Black (`#000`) for borders, light gray (`#d1d5db`) for shadow
