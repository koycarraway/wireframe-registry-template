# Fleetio Wireframe Kit - Registry

A shadcn/ui registry for wireframe-styled UI components designed for fleet management applications.

## 🎨 Features

- **29 Customized Components** - All shadcn/ui components with wireframe styling
- **2px Black Borders** - Bold, clear borders for that wireframe aesthetic
- **Flat Shadow Utility** - Custom 6px offset shadow for depth without gradients  
- **Shantell Sans Typography** - Handwriting-style font for wireframe feel
- **Fleet Management Examples** - Real-world examples throughout

## 📦 Installation

Install any component directly from this registry:

```bash
npx shadcn@latest add http://localhost:3000/r/button.json
npx shadcn@latest add http://localhost:3000/r/input.json
npx shadcn@latest add http://localhost:3000/r/date-picker.json
```

## 🔍 Preview Components

- **Homepage**: http://localhost:3000 - Browse all 29 components
- **Showcase**: http://localhost:3000/showcase - See components in action
- **Full Examples**: See `../fleetio-wireframe-kit/src/App.tsx` for comprehensive fleet management examples

## 📚 Available Components

### Form Controls
- `button` - Buttons with 2px borders and various variants
- `input` - Text inputs with black focus border
- `textarea` - Multi-line text input
- `checkbox` - Checkboxes with thick borders
- `radio-group` - Radio buttons with wireframe style
- `switch` - Toggle switches with border on active state
- `select` - Dropdown select with flat shadow
- `label` - Form labels

### Layout
- `card` - Content containers
- `separator` - 2px thick dividers
- `table` - Data tables
- `tabs` - Tab navigation with bottom border

### Overlay Components
- `dialog` - Modal dialogs
- `alert-dialog` - Confirmation dialogs
- `popover` - Popovers with flat shadow
- `dropdown-menu` - Dropdown menus with flat shadow
- `hover-card` - Hover cards with flat shadow
- `tooltip` - Tooltips

### Navigation
- `breadcrumb` - Breadcrumb navigation
- `sidebar` - Collapsible sidebar with fleet taxonomy

### Feedback
- `alert` - Alert notifications (default, destructive, warning, success)
- `badge` - Status badges
- `sonner` - Toast notifications with flat shadow
- `skeleton` - Loading skeletons

### Data Entry
- `calendar` - Calendar with flat shadow
- `date-picker` - Date picker with calendar

### Display
- `avatar` - User avatars
- `sheet` - Side sheet

## 🔧 Development

This is the **registry/publishing project**. For development:

### Work in the Development Project
```bash
cd ../fleetio-wireframe-kit
npm run dev
# http://localhost:5173 - Full showcase with all examples
```

### Sync Changes to Registry
```bash
cd fleetio-wireframe-registry
./sync-components.sh
npm run registry:build
```

See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed workflow.

## 📂 Project Structure

```
fleetio-wireframe-registry/
├── app/
│   ├── page.tsx              # Component list homepage
│   ├── showcase/page.tsx     # Interactive preview
│   └── globals.css           # Wireframe styling
├── components/ui/            # All customized components
├── registry/                 # Component definitions
├── public/r/                 # Generated JSON files
└── DEVELOPMENT.md            # Development guide
```

## 🚀 Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import to Vercel
3. Deploy
4. Update install commands with your production URL

## 💡 Why Two Projects?

- **`fleetio-wireframe-kit`** - Development environment with comprehensive examples
- **`fleetio-wireframe-registry`** - Publishing/distribution of components

This separation keeps the registry clean while allowing full development and testing in the original project.

## 🎯 Key Customizations

All components include:
- ✅ 2px borders (`border-2`)
- ✅ Black focused states (`focus-visible:border-black`)
- ✅ Flat shadow utility (`shadow-flat` class)
- ✅ Shantell Sans typography
- ✅ Wireframe aesthetic throughout

## 📞 More Information

- Full component examples: `../fleetio-wireframe-kit/src/App.tsx`
- Development guide: [DEVELOPMENT.md](./DEVELOPMENT.md)
- Custom styles: `app/globals.css` (especially `.shadow-flat` utility)