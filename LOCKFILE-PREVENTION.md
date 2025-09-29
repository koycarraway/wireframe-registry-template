# 🔒 Lockfile Prevention Guide

## The Problem
We keep getting `ERR_PNPM_OUTDATED_LOCKFILE` errors during Vercel deployment because the `pnpm-lock.yaml` file gets out of sync with `package.json`.

## The Solution

### 1. **Always Update Lockfile When Adding Dependencies**
```bash
# When adding new dependencies, always run:
pnpm install

# Or use our custom script:
pnpm run lockfile:update
```

### 2. **Check Lockfile Before Committing**
```bash
# Check if lockfile is up to date:
pnpm run lockfile:check

# If it fails, update it:
pnpm run lockfile:update
```

### 3. **Pre-commit Hook**
The `prebuild` script automatically checks the lockfile before building:
```bash
# This will fail if lockfile is out of sync:
pnpm run build
```

### 4. **GitHub Actions**
We have a GitHub Action that automatically updates the lockfile when `package.json` changes.

## 🚨 **CRITICAL RULES**

1. **NEVER** commit changes to `package.json` without updating `pnpm-lock.yaml`
2. **ALWAYS** run `pnpm install` after modifying `package.json`
3. **ALWAYS** commit both `package.json` and `pnpm-lock.yaml` together
4. **NEVER** manually edit `pnpm-lock.yaml`

## 🔧 **Quick Fixes**

### If you get the error:
```bash
# Option 1: Update lockfile
pnpm run lockfile:update

# Option 2: Check what's wrong
pnpm run lockfile:check

# Option 3: Force fresh install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### If Vercel build fails:
1. Check the error message for `ERR_PNPM_OUTDATED_LOCKFILE`
2. Run `pnpm run lockfile:update` locally
3. Commit and push the updated `pnpm-lock.yaml`
4. Redeploy

## 📋 **Best Practices**

1. **Before adding dependencies:**
   ```bash
   pnpm add <package-name>
   # This automatically updates the lockfile
   ```

2. **Before committing:**
   ```bash
   pnpm run lockfile:check
   git add package.json pnpm-lock.yaml
   git commit -m "Add dependency and update lockfile"
   ```

3. **Before pushing:**
   ```bash
   pnpm run build  # This will fail if lockfile is out of sync
   ```

## 🎯 **Prevention Checklist**

- [ ] Added new dependency? → Run `pnpm install`
- [ ] Modified `package.json`? → Run `pnpm install`
- [ ] About to commit? → Run `pnpm run lockfile:check`
- [ ] About to push? → Run `pnpm run build`
- [ ] Vercel build failing? → Check lockfile consistency

## 🆘 **Emergency Fix**

If you're stuck with a broken lockfile:
```bash
# Nuclear option - completely regenerate:
rm -rf node_modules pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
git commit -m "Emergency: regenerate lockfile"
git push
```

This should prevent the `ERR_PNPM_OUTDATED_LOCKFILE` error from happening again! 🎯
