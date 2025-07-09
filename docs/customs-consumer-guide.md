# Customs Component Library - Usage Guide

## 📖 Overview

This guide shows how to consume the external Customs component library in your Next.js project.

## 📁 Project Structure

```
/Users/greg.gil/argos/
├── training-next-js-copy/           # ✅ Your Next.js project
│   ├── src/app/customs-demo/       # Demo page
│   └── docs/                       # Consumer documentation
└── customs-component-library/       # ✅ External library (separate project)
    ├── src/                        # Library source code
    ├── dist/                       # Built library files
    └── docs/                       # Library development docs
```

## 🚀 Quick Start

### 1. Setup (One Time)

```bash
# Build and link the external library
cd /Users/greg.gil/argos/customs-component-library
npm install
npm run build
npm link

# Link in your Next.js project
cd /Users/greg.gil/argos/training-next-js-copy
npm link customs-components
```

### 2. Import and Use

```tsx
'use client'

import { Customs } from 'customs-components'

export default function MyPage() {
  return (
    <Customs.ThemeProvider>
      <Customs.Button variant="primary">Hello World!</Customs.Button>
    </Customs.ThemeProvider>
  )
}
```

### 3. Start Development

```bash
cd /Users/greg.gil/argos/training-next-js-copy
npm run dev
```

## 🎯 Available Components

### Button Component

```tsx
<Customs.Button 
  variant="primary"    // 'primary' | 'secondary' | 'accent' | 'outline'
  size="md"           // 'sm' | 'md' | 'lg'
  disabled={false}
  loading={false}
  fullWidth={false}
>
  Click me
</Customs.Button>
```

### Responsive Props

```tsx
<Customs.Button
  variant={{
    mobile: 'outline',
    tablet: 'secondary', 
    desktop: 'primary'
  }}
  size={{
    mobile: 'sm',
    desktop: 'lg'
  }}
>
  Responsive Button
</Customs.Button>
```

### Theme Provider

Always wrap your app or components with the theme provider:

```tsx
<Customs.ThemeProvider>
  {/* Your components */}
</Customs.ThemeProvider>
```

### Custom Themes

```tsx
<Customs.Button
  customTheme={{
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      text: '#ffffff',
      background: '#2c3e50',
    },
    spacing: { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem' },
    borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '1rem' },
  }}
>
  Custom Theme Button
</Customs.Button>
```

## 🎨 Responsive Features

### Breakpoints
- **Mobile**: ≤767px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥1024px

### Available Hooks

```tsx
import { Customs } from 'customs-components'

function MyComponent() {
  const breakpoint = Customs.useBreakpoint() // 'mobile' | 'tablet' | 'desktop'
  const { theme, setTheme } = Customs.useTheme()
  
  return <div>Current breakpoint: {breakpoint}</div>
}
```

## 🏃‍♂️ Demo

Visit [`/customs-demo`](http://localhost:3001/customs-demo) to see all examples in action!

## 🔄 Development Workflow

### When Library Changes

If the library is updated, you'll need to rebuild it:

```bash
cd /Users/greg.gil/argos/customs-component-library
npm run build
```

Your Next.js project will automatically pick up the changes.

### Automated Setup

Use the setup script for easy configuration:

```bash
cd /Users/greg.gil/argos/training-next-js-copy
npm run setup:customs
```

## 📋 Integration Checklist

- [ ] ✅ Library is built: `cd /Users/greg.gil/argos/customs-component-library && npm run build`
- [ ] ✅ Library is linked: `npm link`
- [ ] ✅ Project has linked library: `npm link customs-components`
- [ ] ✅ Components use `'use client'` directive
- [ ] ✅ Components are wrapped with `<Customs.ThemeProvider>`
- [ ] ✅ Import from `'customs-components'`

## 🔧 Troubleshooting

### Import Errors
```bash
# Ensure library is built and linked
cd /Users/greg.gil/argos/customs-component-library
npm run build
npm link

cd /Users/greg.gil/argos/training-next-js-copy  
npm link customs-components
```

### Runtime Errors
- Ensure you're using `'use client'` for components with hooks
- Wrap components with `<Customs.ThemeProvider>`
- Check that the library is properly built

### TypeScript Commit Failures

If commits fail due to TypeScript errors from the pre-commit hook (`tsc --noEmit`):

#### 🚨 Common Issue: Type Definition Errors
```bash
# Error example:
# src/app/customs-demo/page.tsx(5,28): error TS7016: 
# Could not find declaration file for module 'customs-components'
```

#### 🔧 Solutions:

**Option 1: Add Type Declarations (Recommended)**
```bash
# In your Next.js project, create type declarations
echo "declare module 'customs-components'" > src/types/customs-components.d.ts
```

**Option 2: Skip TypeScript Check for Linked Packages**
Add to your `tsconfig.json`:
```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

**Option 3: Exclude from Pre-commit Check**
Modify your pre-commit hook to exclude specific files:
```bash
# In .husky/pre-commit or equivalent
npx tsc --noEmit --skipLibCheck
```

**Option 4: Bypass Pre-commit (Emergency)**
```bash
# Only use when you need to commit urgently
git commit --no-verify -m "Your commit message"
```

#### 🎯 Best Practice Fix

Create a proper type declaration file:

```typescript
// src/types/customs-components.d.ts
declare module 'customs-components' {
  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    children?: React.ReactNode
  }
  
  export interface CustomsComponents {
    Button: React.ComponentType<ButtonProps>
    ThemeProvider: React.ComponentType<{ children: React.ReactNode }>
    useBreakpoint: () => 'mobile' | 'tablet' | 'desktop'
    useTheme: () => { theme: any; setTheme: (theme: any) => void }
  }
  
  const Customs: CustomsComponents
  export { Customs }
}
```

#### ⚡ Quick Fix Command

```bash
# Automatically create TypeScript declarations
npm run fix:customs-types
```

### TypeScript Errors (General)
The library may have some TypeScript definition issues, but components work at runtime. Use the solutions above to handle type checking during commits.

## 📚 Additional Resources

- **TypeScript Issues**: See [TypeScript Troubleshooting Guide](./customs-typescript-troubleshooting.md)
- **Library Development**: See `/Users/greg.gil/argos/customs-component-library/docs/`
- **Build Instructions**: See `/Users/greg.gil/argos/customs-component-library/docs/build-guide.md`
- **Setup Script**: `/scripts/setup-customs-library.sh`
- **TypeScript Fix Script**: Run `npm run fix:customs-types`

Happy coding! 🚀
