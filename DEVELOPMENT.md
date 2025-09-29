# Wireframe Kit - Development Guide

## 📁 Project Structure

You have **two projects**:

1. **`fleetio-wireframe-kit`** - Development & Testing Project
   - Location: `../fleetio-wireframe-kit/`
   - Purpose: Develop and test components with live examples
   - Has: Full App.tsx with all component showcases

2. **`fleetio-wireframe-registry`** - Registry & Publishing Project
   - Location: `./` (this project)
   - Purpose: Host and distribute components via CLI
   - Has: Landing page, showcase page, and component registry

---

## 🔄 Development Workflow

### For New or Updated Components:

#### 1. Develop in `fleetio-wireframe-kit`
```bash
cd ../fleetio-wireframe-kit
npm run dev
# Open http://localhost:5173
# Edit components in src/components/ui/
# View changes in App.tsx showcase
```

#### 2. When Ready, Sync to Registry
```bash
cd ../fleetio-wireframe-registry
./sync-components.sh
```

This automatically copies:
- ✅ All UI components from `src/components/ui/`
- ✅ Utility functions from `src/lib/`
- ✅ Hooks from `src/hooks/`
- ✅ Global styles from `src/index.css`

#### 3. Update Registry JSON (if new component)

If you added a **new component**, add it to `registry.json`:

```json
{
  "name": "my-new-component",
  "type": "registry:ui",
  "title": "My New Component",
  "description": "What this component does",
  "dependencies": ["any-npm-packages"],
  "registryDependencies": ["other-components"],
  "files": [
    {
      "path": "registry/new-york/ui/my-new-component/my-new-component.tsx",
      "type": "registry:ui"
    }
  ]
}
```

#### 4. Build Registry
```bash
npm run registry:build
```

This generates JSON files in `public/r/`

#### 5. Test Registry
```bash
npm run dev
# Open http://localhost:3000
# Check homepage and showcase
```

---

## 🎨 Adding Component to Showcase

Edit `app/showcase/page.tsx` to add your new component preview:

```tsx
<Card>
  <CardHeader>
    <CardTitle>My New Component</CardTitle>
    <CardDescription>Description here</CardDescription>
  </CardHeader>
  <CardContent>
    <MyNewComponent />
  </CardContent>
</Card>
```

---

## 📦 Using Components from Registry

### Install a Single Component
```bash
npx shadcn@latest add http://localhost:3000/r/button.json
```

### Available Components
- Visit http://localhost:3000 for full list
- View live previews at http://localhost:3000/showcase

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push registry to GitHub:
```bash
git add .
git commit -m "Update registry"
git push
```

2. Import to Vercel:
   - Go to https://vercel.com
   - Import your `fleetio-wireframe-registry` repo
   - Deploy

3. Update install commands with production URL:
```bash
npx shadcn@latest add https://your-registry.vercel.app/r/button.json
```

---

## 🛠️ Common Tasks

### Sync Components
```bash
./sync-components.sh
```

### Build Registry
```bash
npm run registry:build
```

### Dev Server
```bash
npm run dev
```

### Check for Issues
```bash
npm run lint
```

---

## 📂 Directory Structure

```
fleetio-wireframe-registry/
├── app/
│   ├── page.tsx              # Homepage (component list)
│   ├── showcase/
│   │   └── page.tsx          # Component previews
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles (synced)
├── components/
│   └── ui/                   # UI components (synced)
├── registry/
│   └── new-york/
│       └── ui/               # Registry component definitions
├── public/
│   └── r/                    # Generated JSON files (after build)
├── lib/                      # Utilities (synced)
├── hooks/                    # Hooks (synced)
├── registry.json             # Component registry definition
├── sync-components.sh        # Sync script
└── DEVELOPMENT.md            # This file
```

---

## 💡 Tips

1. **Always develop in `fleetio-wireframe-kit` first** - it has all the examples and is easier to test
2. **Sync regularly** to keep registry up to date
3. **Update showcase** when adding new components for better documentation
4. **Test installations** locally before deploying
5. **Commit both projects** to preserve your work

---

## 🐛 Troubleshooting

### Components not found after sync
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Registry build fails
```bash
# Check registry.json is valid JSON
cat registry.json | jq .
```

### Missing dependencies
```bash
# Install from original project
cd ../fleetio-wireframe-kit
npm list @radix-ui/react-dialog # check what's installed
cd ../fleetio-wireframe-registry
npm install @radix-ui/react-dialog # install here
```

---

## 📞 Questions?

- Check the original project: `../fleetio-wireframe-kit/src/App.tsx`
- View component examples there for reference
- All styling is in `app/globals.css` (especially `.shadow-flat` utility)
