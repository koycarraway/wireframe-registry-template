# 🎯 v0 Integration Guide

## The Problem
v0 is not discovering and using other components from your registry. It only sees the individual component you click on, not the full design system.

## The Solution

### 1. **Comprehensive Design System Context**
We've created multiple context files that v0 can reference:

- **`/design-system-complete.json`** - Full design system with all components
- **`/v0-context.json`** - v0-specific context and rules
- **`/design-system.json`** - Design tokens and styling
- **`/r/registry.json`** - Complete registry with all components

### 2. **Enhanced Open in v0 Button**
The "Open in v0" button now includes multiple context URLs:

```javascript
// Multiple context sources for v0
url=https://wireframe-registry-template.vercel.app/r/${name}.json
context=https://wireframe-registry-template.vercel.app/design-system-complete.json
registry=https://wireframe-registry-template.vercel.app/r/registry.json
designSystem=https://wireframe-registry-template.vercel.app/design-system.json
v0Context=https://wireframe-registry-template.vercel.app/v0-context.json
```

### 3. **How to Test v0 Integration**

#### **Step 1: Click "Open in v0"**
- Go to your registry: https://wireframe-registry-template.vercel.app
- Click any "Open in v0" button
- This should open v0 with the component + full design system context

#### **Step 2: Test Component Discovery**
- In v0, ask: "Create a dashboard using components from this design system"
- v0 should now discover and use other components from your registry
- v0 should apply the wireframe styling (2px borders, flat shadows, Shantell Sans)

#### **Step 3: Test Design System Rules**
- Ask v0: "Create a form with inputs and buttons"
- v0 should use your wireframe styling automatically
- All components should have 2px borders and flat shadows

### 4. **What v0 Should Now Understand**

#### **Design System Context:**
- **29 Components Available**: button, input, card, dialog, etc.
- **Design Principles**: 2px borders, flat shadows, Shantell Sans font
- **Styling Rules**: Black focus states, light gray hover states
- **Component Examples**: How each component should be styled

#### **Registry Discovery:**
- **Full Registry Access**: v0 can see all 29 components
- **Component URLs**: Each component has a direct URL for reference
- **Dependencies**: v0 understands component relationships

### 5. **Troubleshooting**

#### **If v0 Still Doesn't Work:**

1. **Check Context Files:**
   ```bash
   # Verify these URLs work:
   curl https://wireframe-registry-template.vercel.app/design-system-complete.json
   curl https://wireframe-registry-template.vercel.app/v0-context.json
   curl https://wireframe-registry-template.vercel.app/r/registry.json
   ```

2. **Test Individual Components:**
   ```bash
   # Test component URLs:
   curl https://wireframe-registry-template.vercel.app/r/button.json
   curl https://wireframe-registry-template.vercel.app/r/input.json
   ```

3. **Manual Context Injection:**
   - Copy the content from `/design-system-complete.json`
   - Paste it into v0 when creating components
   - This ensures v0 has the full design system context

### 6. **Expected Behavior**

#### **Before (Not Working):**
- v0 only sees individual component
- No design system context
- No access to other components
- Generic styling

#### **After (Working):**
- v0 gets full design system context
- v0 can discover all 29 components
- v0 applies wireframe styling automatically
- v0 can reference other components from registry

### 7. **Test Commands for v0**

Try these commands in v0 to test the integration:

```
"Create a fleet management dashboard using this design system"
"Build a form with inputs, buttons, and cards using wireframe styling"
"Create a data table with the wireframe design system"
"Make a navigation sidebar using the available components"
```

### 8. **Success Indicators**

You'll know it's working when:
- ✅ v0 references multiple components from your registry
- ✅ v0 applies 2px borders and flat shadows
- ✅ v0 uses Shantell Sans font
- ✅ v0 can discover and use other components
- ✅ v0 follows the wireframe design principles

## 🎯 **The Key Fix**

The problem was that v0 wasn't getting the **complete design system context**. Now it gets:

1. **Individual Component** - The specific component you clicked
2. **Full Design System** - All 29 components and styling rules
3. **Registry Access** - Complete registry with all components
4. **Design Context** - Wireframe principles and styling rules
5. **Component Examples** - How each component should be styled

This should resolve the issue where v0 wasn't discovering and using other components from your registry! 🚀
