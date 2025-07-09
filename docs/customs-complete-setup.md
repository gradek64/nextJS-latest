# Customs Components - Complete Setup Guide

## 📋 Overview

The Customs Component Library is now a fully external, standalone package that can be consumed via npm link. This document provides a quick overview of the complete setup.

## 📁 Project Structure

```
/Users/greg.gil/argos/
├── customs-component-library/           # ✅ External library (standalone)
│   ├── src/components/                  # Library source code
│   ├── dist/                           # Built library files
│   ├── docs/                           # Library development docs
│   ├── package.json                    # Library dependencies
│   └── README.md                       # Library overview
└── training-next-js-copy/               # ✅ Next.js consumer project
    ├── src/app/customs-demo/           # Demo page
    ├── docs/                           # Consumer documentation
    ├── scripts/                        # Setup & utility scripts
    └── package.json                    # Consumer dependencies
```

## 🚀 Quick Start

### 1. One-Time Setup

```bash
# Option A: Use the automated setup script
cd /Users/greg.gil/argos/training-next-js-copy
npm run setup:customs

# Option B: Manual setup
cd /Users/greg.gil/argos/customs-component-library
npm install && npm run build && npm link

cd /Users/greg.gil/argos/training-next-js-copy
npm link customs-components
```

### 2. Fix TypeScript Issues

```bash
# Create TypeScript declarations (prevents commit failures)
npm run fix:customs-types
```

### 3. Start Development

```bash
npm run dev
# Visit: http://localhost:3001/customs-demo
```

## 🎯 Available Commands

### Library Development (in customs-component-library)

- `npm run build` - Build the library
- `npm run dev` - Watch mode development
- `npm run link` - Create npm link

### Consumer Project (in training-next-js-copy)

- `npm run setup:customs` - Full setup automation
- `npm run fix:customs-types` - Fix TypeScript commit issues
- `npm run dev` - Start Next.js development server

## 📚 Documentation

### For Consumers (Next.js Project)

- **[Consumer Guide](./docs/customs-consumer-guide.md)** - Complete usage guide
- **[TypeScript Troubleshooting](./docs/customs-typescript-troubleshooting.md)** - Fix commit failures
- **[Quick Reference](./docs/customs-quick-reference.md)** - Component APIs
- **[Setup Guide](./docs/customs-setup-guide.md)** - Installation instructions

### For Library Developers (Library Project)

- **[Library README](/Users/greg.gil/argos/customs-component-library/README.md)** - Overview
- **[Build Guide](/Users/greg.gil/argos/customs-component-library/docs/build-guide.md)** - Development setup
- **[Development Guide](/Users/greg.gil/argos/customs-component-library/docs/development-guide.md)** - Adding components

## 🔧 Common Issues & Solutions

### TypeScript Commit Failures

```bash
# Quick fix
npm run fix:customs-types

# Manual fix: Bypass pre-commit (emergency only)
git commit --no-verify -m "Your message"
```

### Import Errors

```bash
# Rebuild and relink library
cd /Users/greg.gil/argos/customs-component-library
npm run build

# If that doesn't work, full reset
npm unlink
npm link
cd /Users/greg.gil/argos/training-next-js-copy
npm link customs-components
```

### Runtime Errors

- Use `'use client'` directive for components with hooks
- Wrap components with `<Customs.ThemeProvider>`
- Ensure library is built: `cd customs-component-library && npm run build`

## 🎨 Usage Example

```tsx
'use client'

import { Customs } from 'customs-components'

export default function MyPage() {
  return (
    <Customs.ThemeProvider>
      <Customs.Button variant='primary' size='lg' loading={false}>
        Hello World!
      </Customs.Button>
    </Customs.ThemeProvider>
  )
}
```

## ✅ Validation Checklist

Before committing or deploying:

- [ ] Library is built: `cd customs-component-library && npm run build`
- [ ] Library is linked: `npm link` (in library) + `npm link customs-components` (in consumer)
- [ ] TypeScript declarations exist: `src/types/customs-components.d.ts`
- [ ] Demo page works: Visit `/customs-demo`
- [ ] Imports use: `import { Customs } from 'customs-components'`
- [ ] Components wrapped with: `<Customs.ThemeProvider>`
- [ ] Client components use: `'use client'` directive

## 🏗️ Architecture Benefits

### ✅ What We Achieved

1. **🔄 External Library**: Fully standalone, reusable across projects
2. **📦 npm Link**: Local development without publishing
3. **🔧 Proper TypeScript**: No more commit failures
4. **📚 Clear Documentation**: Separate consumer vs developer docs
5. **⚡ Automated Setup**: One-command installation
6. **🚀 Working Demo**: Live examples at `/customs-demo`

### 🎯 Development Workflow

1. **Library Changes**: Edit in `customs-component-library/`, run `npm run build`
2. **Consumer Changes**: Edit in `training-next-js-copy/`, changes reflect immediately
3. **TypeScript Issues**: Run `npm run fix:customs-types`
4. **Testing**: Visit `/customs-demo` to verify everything works

---

**Need Help?** Check the specific guides in the `docs/` folder or visit the demo page to see working examples.

Happy coding! 🚀
