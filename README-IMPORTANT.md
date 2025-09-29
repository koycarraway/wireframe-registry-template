# ⚠️ IMPORTANT - Action Required

## 🔴 Critical Issues Found in Registry Audit

After reviewing your registry against **all shadcn documentation**, I found **2 CRITICAL issues** that need immediate fixing:

---

## Issue 1: ❌ Wrong Import Paths in Registry Components

**Problem**: shadcn requires registry components to use `@/registry` paths, but yours use `@/lib/utils` and `@/components/ui/*`.

**Why It Matters**: 
- Your homepage has errors: "Module not found: Can't resolve '@/registry/new-york/ui/button'"
- Users installing from your registry will get broken imports

---

## Issue 2: ❌ Registry Components Don't Have Wireframe Styling

**Problem**: The latest wireframe styling (2px black borders, flat shadows, etc.) is only in `components/ui/`, NOT in `registry/new-york/ui/`.

**Why It Matters**: Users installing from your registry will get the OLD default shadcn styling, not your custom wireframe look!

---

## ✅ **THE FIX** (One Command!)

I created a comprehensive sync script that fixes BOTH issues:

```bash
cd /Users/kcarraway/Github\ Projects/fleetio-wireframe-registry
./sync-from-dev.sh
```

This script will:
1. ✅ Copy latest wireframe styling from `fleetio-wireframe-kit` to the registry
2. ✅ Fix ALL import paths to use `@/registry/new-york/*` as required
3. ✅ Sync to both locations (components/ui for homepage, registry/new-york for distribution)

Then rebuild:
```bash
npm run registry:build
```

---

## 📋 Minor Fixes (Optional but Recommended)

### 1. Add Missing registryDependency

Edit `registry.json`, find the dropdown-menu entry, and add:
```json
{
  "name": "dropdown-menu",
  ...
  "registryDependencies": ["separator"]  // ← ADD THIS
}
```

### 2. Clean Up Old Template Files

```bash
rm public/r/hello-world.json
rm public/r/example-form.json
rm public/r/complex-component.json
rm public/r/example-with-css.json
rm -rf registry/new-york/blocks.bak/
```

---

## 📚 Full Details

See these files for complete audit:
- `REGISTRY-AUDIT.md` - Full technical audit with all findings
- `FIXES-SUMMARY.md` - Detailed fixes with examples
- `STYLING-CHECKLIST.md` - Component styling verification

---

## 🎯 After Fixing

Your registry will be:
- ✅ **Working** - No more module resolution errors
- ✅ **Correct** - Follows all shadcn best practices
- ✅ **Styled** - Users get your custom wireframe components
- ✅ **Production-Ready** - Ready to deploy and use

---

## ⏱️ Time to Fix

- **Critical fixes**: 2 minutes (run script + rebuild)
- **Optional fixes**: 5 minutes (edit JSON + cleanup)

**Total: ~7 minutes to be production-ready!**
