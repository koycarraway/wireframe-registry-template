# Registry Fixes Summary

## 🔍 Audit Results

After reviewing against [shadcn registry documentation](https://ui.shadcn.com/docs/registry/), here's what needs to be fixed:

---

## ❌ **CRITICAL Issues**

### 1. Registry Components Have Wrong Import Paths

**Problem**: All components in `registry/new-york/ui/` use `@/lib/utils` and `@/components/ui/*` imports.

**shadcn Requirement**:
> **Imports should always use the `@/registry` path.** eg. `import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"`

**Impact**:
- Homepage errors: "Module not found: Can't resolve '@/registry/new-york/ui/button'"
- Users who install from your registry will get components that import from the wrong paths

**Fix**: Run `./sync-from-dev.sh` - it handles this automatically

---

### 2. Registry Components Don't Have Latest Wireframe Styling

**Problem**: Components in `components/ui/` have wireframe styling, but `registry/new-york/ui/` don't.

**Example**:
- `components/ui/button.tsx`: ✅ Has `border-2 border-black` on outline variant
- `registry/new-york/ui/button/button.tsx`: ❌ Still has old `border bg-background shadow-xs`

**Impact**: Users installing from your registry get OLD non-wireframe components!

**Fix**: Run `./sync-from-dev.sh` - it copies latest components and fixes imports

---

## ⚠️ **Important Issues**

### 3. Missing Some registryDependencies

**Current State**: Some components have it, most don't

**Need to Add**:
```json
{
  "name": "dropdown-menu",
  "registryDependencies": ["separator"]  // ← ADD THIS
}
```

**Components Missing It**:
- `button` - none needed ✅
- `input` - none needed ✅
- `checkbox` - none needed ✅
- `radio-group` - none needed ✅
- `switch` - none needed ✅
- `textarea` - none needed ✅
- `select` - none needed ✅
- `label` - none needed ✅
- `separator` - none needed ✅
- `popover` - none needed ✅
- `dialog` - none needed ✅
- `alert-dialog` - HAS IT ✅
- `dropdown-menu` - ❌ should have `["separator"]`
- `hover-card` - none needed ✅
- `card` - none needed ✅
- `badge` - none needed ✅
- `avatar` - none needed ✅
- `table` - none needed ✅
- `tabs` - none needed ✅
- `alert` - none needed ✅
- `skeleton` - none needed ✅
- `tooltip` - none needed ✅
- `breadcrumb` - none needed ✅
- `calendar` - HAS IT ✅
- `date-picker` - HAS IT ✅
- `sonner` - none needed ✅
- `sidebar` - HAS IT ✅
- `sheet` - HAS IT ✅

**Fix**: Update `registry.json` to add `"registryDependencies": ["separator"]` to dropdown-menu

---

### 4. Old Template Files Still Present

**Files to Delete**:
```bash
rm public/r/hello-world.json
rm public/r/example-form.json
rm public/r/complex-component.json
rm public/r/example-with-css.json
rm -rf registry/new-york/blocks.bak/
```

---

### 5. Missing Dependencies for Some Components

**Current State**: 
- `button` has deps ✅
- `checkbox` has deps ✅
- `input` has NO deps ❌ (should have at least `clsx`, `tailwind-merge` implicitly)

**Impact**: Minor - users might need to install these manually

**Fix**: Not critical, but could add for completeness

---

## ✅ **What's Already Good**

1. ✅ `registry.json` has correct schema
2. ✅ Has `name`, `homepage`, `items` array
3. ✅ Each item has `name`, `type`, `title`, `description`, `files`
4. ✅ Files have correct `path` and `type`
5. ✅ Using correct `registry/new-york/ui/[NAME]/[NAME].tsx` structure
6. ✅ Build process works (`npm run registry:build`)
7. ✅ Output to correct `public/r/` directory
8. ✅ Some components already have `registryDependencies`

---

## 🔧 **How to Fix Everything**

### Step 1: Run the Comprehensive Sync (CRITICAL)

```bash
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
./sync-from-dev.sh
```

This will:
- ✅ Copy latest wireframe styling to registry
- ✅ Fix all import paths to use `@/registry`
- ✅ Sync to both `components/ui/` (for homepage) and `registry/new-york/ui/` (for distribution)

### Step 2: Add Missing registryDependency (MINOR)

Edit `registry.json`:

```json
{
  "name": "dropdown-menu",
  "type": "registry:ui",
  "title": "Dropdown Menu",
  "description": "Dropdown menu with flat shadow and 2px borders",
  "files": [
    {
      "path": "registry/new-york/ui/dropdown-menu/dropdown-menu.tsx",
      "type": "registry:ui"
    }
  ],
  "dependencies": ["@radix-ui/react-dropdown-menu"],
  "registryDependencies": ["separator"]  // ← ADD THIS LINE
}
```

### Step 3: Clean Up Old Template Files (CLEANUP)

```bash
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
rm public/r/hello-world.json
rm public/r/example-form.json
rm public/r/complex-component.json
rm public/r/example-with-css.json
rm -rf registry/new-york/blocks.bak/
```

### Step 4: Rebuild Registry (REQUIRED)

```bash
npm run registry:build
```

### Step 5: Test Everything

```bash
# Test dev server
npm run dev

# In another terminal, test installation
npx shadcn@latest add http://localhost:3000/r/button.json
```

---

## 📊 Priority

1. **CRITICAL** - Run `./sync-from-dev.sh` (fixes imports + styling)
2. **REQUIRED** - Rebuild with `npm run registry:build`
3. **RECOMMENDED** - Add missing registryDependencies
4. **CLEANUP** - Remove old template files
5. **OPTIONAL** - Add missing dependencies to some components

---

## 🎯 Expected Outcome

After running `./sync-from-dev.sh` and rebuilding:

✅ Homepage will load without errors
✅ Users will get wireframe-styled components
✅ Components will have correct imports
✅ Dependencies will auto-install
✅ Registry will be production-ready

---

## 📚 Documentation References

- [Getting Started](https://ui.shadcn.com/docs/registry/getting-started)
- [Registry JSON Schema](https://ui.shadcn.com/docs/registry/registry-json)
- [Registry Item Schema](https://ui.shadcn.com/docs/registry/registry-item-json)
- [Import Path Requirements](https://ui.shadcn.com/docs/registry/getting-started#guidelines)
