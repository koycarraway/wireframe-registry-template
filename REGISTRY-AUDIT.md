# Registry Audit & Fixes

Based on shadcn/ui registry documentation review: https://ui.shadcn.com/docs/registry/

## ✅ What's Correct

1. **registry.json Structure**
   - ✅ Has `$schema` reference
   - ✅ Has `name` and `homepage`
   - ✅ Has `items` array
   - ✅ Each item has required fields: `name`, `type`, `title`, `description`, `files`
   - ✅ Files have correct `path` and `type`
   - ✅ Dependencies are listed

2. **Directory Structure**
   - ✅ Using `registry/new-york/` directory structure
   - ✅ Components are in `registry/new-york/ui/[NAME]/[NAME].tsx`
   - ✅ Hooks in `registry/new-york/hooks/`
   - ✅ Utils in `registry/new-york/lib/`

3. **Build Process**
   - ✅ Using `shadcn build` command
   - ✅ Output to `public/r/` directory
   - ✅ Registry items are valid JSON

## ❌ Critical Issues Found

### Issue 1: ❌ **WRONG IMPORTS IN REGISTRY COMPONENTS**

**Problem**: According to shadcn docs:
> **Imports should always use the `@/registry` path.** eg. `import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"`

**Current State**: All registry components use `@/lib/utils` and `@/components/ui/*`

**Example from `registry/new-york/ui/button/button.tsx`**:
```typescript
import { cn } from "@/lib/utils"  // ❌ WRONG
```

**Should be**:
```typescript
import { cn } from "@/registry/new-york/lib/utils"  // ✅ CORRECT
```

**Impact**: This is why you're seeing module resolution errors in the homepage! The template example components are trying to import from `@/registry/new-york/ui/*` but your actual registry components are exporting from `@/lib/utils`.

**Files Affected**: ALL 29 components in `registry/new-york/ui/`

### Issue 2: ❌ **REGISTRY COMPONENTS NOT SYNCED WITH LATEST FIXES**

**Problem**: The components in `components/ui/` have the wireframe styling, but the components in `registry/new-york/ui/` don't.

**Example**: `registry/new-york/ui/button/button.tsx` still has:
```typescript
outline: "border bg-background shadow-xs hover:bg-accent..."  // ❌ OLD
```

Instead of:
```typescript
outline: "border-2 border-black bg-white text-black hover:bg-secondary..."  // ✅ NEW
```

**Impact**: When users install from your registry, they'll get the old non-wireframe styling!

### Issue 3: ⚠️ **OLD TEMPLATE EXAMPLES STILL PRESENT**

**Problem**: Template example files are still in the registry:
- `public/r/hello-world.json`
- `public/r/example-form.json`
- `public/r/complex-component.json`
- `public/r/example-with-css.json`
- `registry/new-york/blocks.bak/` directory

**Impact**: These aren't in `registry.json` but are still being served, creating confusion.

### Issue 4: ⚠️ **MISSING REGISTRYDEPENDENCIES**

**Problem**: According to docs, you should list registry dependencies using `registryDependencies`.

**Example**: `date-picker` uses `button`, `calendar`, and `popover`:
```json
{
  "name": "date-picker",
  "registryDependencies": ["button", "calendar", "popover"]  // ⚠️ MISSING
}
```

**Current State**: Most components are missing this field.

**Impact**: CLI won't auto-install dependencies when users add a component.

### Issue 5: ⚠️ **INCONSISTENT DEPENDENCY SPECIFICATIONS**

**Problem**: Some components list dependencies, some don't.

**Examples**:
- `button` has dependencies (good)
- `input` has NO dependencies (should have at least `clsx`, `tailwind-merge` implicitly via utils)
- `date-picker` has `date-fns` but doesn't list registry dependencies

### Issue 6: ℹ️ **NO NAMESPACE CONFIGURATION**

**Status**: Not critical, but recommended for production.

**Current**: Users install via full URL:
```bash
npx shadcn@latest add http://localhost:3000/r/button.json
```

**Better**: With namespace in `components.json`:
```bash
npx shadcn@latest add @fleetio/button
```

## 🔧 Required Fixes

### Fix 1: Update ALL Registry Component Imports

**Script needed**: Update all imports in `registry/new-york/` to use `@/registry` path.

Before:
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

After:
```typescript
import { cn } from "@/registry/new-york/lib/utils"
import { Button } from "@/registry/new-york/ui/button/button"
```

### Fix 2: Sync Latest Component Fixes to Registry

Run the sync script BUT with modifications to handle the import path differences.

### Fix 3: Clean Up Old Template Files

```bash
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
rm -rf registry/new-york/blocks.bak/
rm public/r/hello-world.json
rm public/r/example-form.json
rm public/r/complex-component.json
rm public/r/example-with-css.json
```

### Fix 4: Add registryDependencies to All Components

Update `registry.json` to include `registryDependencies` for each component:

```json
{
  "name": "alert-dialog",
  "registryDependencies": ["button"],
  "dependencies": ["@radix-ui/react-alert-dialog"]
},
{
  "name": "date-picker",
  "registryDependencies": ["button", "calendar", "popover"],
  "dependencies": ["date-fns"]
},
{
  "name": "dropdown-menu",
  "registryDependencies": ["separator"],
  "dependencies": ["@radix-ui/react-dropdown-menu"]
}
// etc...
```

### Fix 5: Add Namespace Support (Optional but Recommended)

Users' `components.json`:
```json
{
  "registries": {
    "@fleetio": "https://fleetio-registry.vercel.app/r/{name}.json"
  }
}
```

## 📋 Component Dependencies Mapping

Here's what `registryDependencies` each component should have:

- `alert` → none
- `alert-dialog` → `button`
- `avatar` → none
- `badge` → none
- `breadcrumb` → none
- `button` → none
- `calendar` → `button`
- `card` → none
- `checkbox` → none
- `date-picker` → `button`, `calendar`, `popover`
- `dialog` → none
- `dropdown-menu` → none
- `hover-card` → none
- `input` → none
- `label` → none
- `popover` → none
- `radio-group` → none
- `select` → none
- `separator` → none
- `sheet` → none
- `sidebar` → `button`, `separator`, `tooltip`, `sheet`, `skeleton`, `input`
- `skeleton` → none
- `sonner` → none (uses next-themes)
- `switch` → none
- `table` → none
- `tabs` → none
- `textarea` → none
- `tooltip` → none

## 🎯 Priority Order

1. **CRITICAL**: Fix imports in registry components (Issue 1)
2. **CRITICAL**: Sync wireframe styling to registry (Issue 2)
3. **HIGH**: Add registryDependencies (Issue 4)
4. **MEDIUM**: Clean up old template files (Issue 3)
5. **MEDIUM**: Standardize dependencies (Issue 5)
6. **LOW**: Add namespace support (Issue 6)

## 📚 References

- [Registry Getting Started](https://ui.shadcn.com/docs/registry/getting-started)
- [Registry JSON Schema](https://ui.shadcn.com/docs/registry/registry-json)
- [Registry Item Schema](https://ui.shadcn.com/docs/registry/registry-item-json)
- [Namespaces](https://ui.shadcn.com/docs/registry/namespace)
- [Examples](https://ui.shadcn.com/docs/registry/examples)
