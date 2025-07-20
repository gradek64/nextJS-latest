# Customs Library - Local Development Setup Guide

## 📋 Overview

This guide provides step-by-step instructions for setting up the external Customs Component Library for local development. The library is a standalone package that gets linked to your Next.js project using npm link.

## 🏗️ Architecture

```
/Users/greg.gil/argos/
├── customs-component-library/           # External standalone library
│   ├── src/components/                  # Library source code
│   ├── dist/                           # Built files (created by npm run build)
│   ├── package.json                    # Library dependencies
│   └── node_modules/                   # Library dependencies
└── training-next-js-copy/               # Next.js consumer project
    ├── src/app/customs-demo/           # Demo page using the library
    ├── node_modules/customs-components/ # Symlink to external library
    ├── scripts/                        # Setup automation scripts
    └── package.json                    # Consumer project dependencies
```

## 🚀 Quick Setup Options

### Option 1: Automatic Setup After npm install (Recommended)

When you run `npm install`, the setup will automatically prompt you to set up the customs library:

```bash
# This will trigger the setup prompt after installing dependencies
npm install
```

You'll see:

```
🤔 Do you want to set up the customs library now? (y/N):
```

Type `y` and press Enter to automatically run the full setup.

### Option 2: Manual Setup Commands

If you skipped the automatic setup or need to run it later:

```bash
# Interactive setup with prompts and validation
npm run setup:prompt

# Or run the full setup without prompts
npm run setup:full

# Or run individual steps
npm run setup:customs      # Just the library setup
npm run fix:customs-types  # Just the TypeScript fix
```

### Option 3: Quick Start (Legacy)

```bash
# 1. Navigate to the Next.js project
cd /Users/greg.gil/argos/training-next-js-copy

# 2. Run the automated setup (handles everything)
npm run setup:full

# 3. Start the development server
npm run dev
```

That's it! Visit http://localhost:3001/customs-demo to see it working.

## 🔧 Manual Setup (Step by Step)

If you prefer to understand each step or need to troubleshoot:

### Step 1: Setup the External Library

```bash
# Navigate to the external library directory
cd /Users/greg.gil/argos/customs-component-library

# Install the library's dependencies
npm install

# Build the library (creates dist/ folder with compiled code)
npm run build

# Create an npm link (makes it available to link to other projects)
npm link
```

### Step 2: Link to Your Next.js Project

```bash
# Navigate to your Next.js project
cd /Users/greg.gil/argos/training-next-js-copy

# Link the customs-components package
npm link customs-components
```

### Step 3: Fix TypeScript Issues

```bash
# Create TypeScript declarations (prevents commit failures)
npm run fix:customs-types
```

### Step 4: Start Development

```bash
# Start the Next.js development server
npm run dev

# Visit the demo page to verify everything works
# http://localhost:3001/customs-demo
```

## 📦 What Each Script Does

### `npm install` (Automatic)

- Installs all project dependencies
- **NEW**: Automatically prompts to set up customs library
- Runs `postinstall` hook that calls `setup:prompt`
- Gracefully skips if external library is not available

### `npm run setup:prompt` (Interactive)

- Shows detailed information about what the setup will do
- Checks if external library exists at the expected location
- Prompts user with clear y/N option
- Provides helpful feedback and next steps
- Handles errors gracefully with clear messages

### `npm run setup:full` (Automated)

- Runs `setup:customs` (library setup)
- Runs `fix:customs-types` (TypeScript declarations)
- No prompts - just runs everything
- Best for CI/CD or when you know you want full setup

### `npm run setup:customs` (Library Only)

- Installs dependencies in the external library
- Builds the library (creates dist/ folder)
- Creates npm link for the library
- Links the library to your Next.js project
- Shows success confirmation

### `npm run fix:customs-types` (TypeScript Only)

- Creates `src/types/customs-components.d.ts` file
- Provides TypeScript declarations for the customs-components module
- Prevents TypeScript compilation errors during git commits

## 🔄 Development Workflow

### When Working on the Library:

```bash
# 1. Make changes in the external library
cd /Users/greg.gil/argos/customs-component-library/src

# 2. Rebuild the library
npm run build

# 3. Changes will automatically be reflected in your Next.js project
# (no need to re-link, the symlink handles this)
```

### When Working on the Consumer Project:

```bash
# Changes in your Next.js project are reflected immediately
# Just refresh your browser or rely on hot reloading
```

## 🎯 Usage in Your Components

Once set up, you can import and use the library in any component:

```tsx
'use client'

import { Customs } from 'customs-components'

export default function MyComponent() {
  return (
    <Customs.ThemeProvider>
      <Customs.Button variant='primary' size='lg' loading={false}>
        Click me!
      </Customs.Button>
    </Customs.ThemeProvider>
  )
}
```

## ❗ Important Notes

### Use Client Components

Components that use the customs library need the `'use client'` directive:

```tsx
'use client'

// Required for customs components
import { Customs } from 'customs-components'
```

### Always Wrap with ThemeProvider

Customs components need to be wrapped with the theme provider:

```tsx
<Customs.ThemeProvider>{/* Your customs components go here */}</Customs.ThemeProvider>
```

## 🛠️ Troubleshooting

### Module Not Found: 'customs-components'

```bash
# Solution 1: Run the automated setup
npm run setup:customs

# Solution 2: Manual re-linking
cd /Users/greg.gil/argos/customs-component-library
npm link

cd /Users/greg.gil/argos/training-next-js-copy
npm link customs-components
```

### TypeScript Commit Failures

```bash
# Fix TypeScript declarations
npm run fix:customs-types

# If still failing, check that this file exists:
# src/types/customs-components.d.ts
```

### Components Not Rendering

1. Ensure library is built: `cd customs-component-library && npm run build`
2. Check you're using `'use client'` directive
3. Verify components are wrapped with `<Customs.ThemeProvider>`
4. Restart your Next.js dev server

### Stale Changes

If changes to the library aren't reflected:

```bash
# Rebuild the library
cd /Users/greg.gil/argos/customs-component-library
npm run build

# Restart Next.js server
cd /Users/greg.gil/argos/training-next-js-copy
# Kill the server (Ctrl+C) and restart
npm run dev
```

## ✅ Verification Checklist

Before considering setup complete, verify:

- [ ] Library builds without errors: `cd customs-component-library && npm run build`
- [ ] npm link created: `npm link` in library directory
- [ ] Library linked to project: `npm link customs-components` in Next.js project
- [ ] TypeScript declarations exist: `src/types/customs-components.d.ts`
- [ ] Next.js server starts: `npm run dev`
- [ ] Demo page works: Visit http://localhost:3001/customs-demo
- [ ] No console errors in browser
- [ ] Components render correctly

## 📚 Additional Resources

- **[Complete Setup Guide](./customs-complete-setup.md)** - Full overview
- **[Consumer Guide](./customs-consumer-guide.md)** - Usage patterns
- **[TypeScript Troubleshooting](./customs-typescript-troubleshooting.md)** - Fix common issues
- **[Quick Reference](./customs-quick-reference.md)** - Component APIs

## 🆘 Need Help?

1. Check the demo page at `/customs-demo` for working examples
2. Look at existing components in `src/app/components/` for usage patterns
3. Review the TypeScript troubleshooting guide
4. Ensure you're following the client component and ThemeProvider requirements

---

**Happy coding!** 🚀 The external library setup provides a clean separation while maintaining an efficient development workflow.
