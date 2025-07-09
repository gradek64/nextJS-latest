# Customs Component Library Documentation

The Customs component library has been restructured as a fully external, standalone package.

## 📖 Documentation Overview

### For Component Users
- **[Quick Reference](./customs-quick-reference.md)** - Cheat sheet for common usage
- **[Setup Guide](./customs-setup-guide.md)** - Getting started
- **[Usage Guide](./customs-usage.md)** - Detailed examples
- **[Consumer Guide](./customs-consumer-guide.md)** - Complete documentation

### For Library Developers
- **[Library README](../../customs-component-library/README.md)** - External library overview
- **[Build Guide](../../customs-component-library/docs/build-guide.md)** - Building the library
- **[Development Guide](../../customs-component-library/docs/development-guide.md)** - Contributing to the library

### Demo & Examples
- **[Demo Page](/customs-demo)** - Live interactive examples

## 🚀 Quick Start

```bash
# Start development (library is already linked)
cd /Users/greg.gil/argos/training-next-js-copy
npm run dev

# Import and use
import { Customs } from 'customs-components'
```

## 📁 Architecture

```
/Users/greg.gil/argos/
├── training-next-js-copy/           # ✅ Next.js project (consumption only)
│   ├── src/app/customs-demo/       # Demo page
│   └── docs/                       # Consumer documentation
└── customs-component-library/       # ✅ External library (development)
    ├── src/                        # Library source code
    ├── dist/                       # Built library files
    └── docs/                       # Library development docs
```

## 🎯 Key Benefits

- **Clean separation**: Library development is completely external
- **Professional workflow**: Real npm package development experience
- **Easy consumption**: Import from `customs-components`
- **Type safety**: Full TypeScript support
- **Responsive design**: Built-in breakpoint system
- **Modern patterns**: Context, hooks, and themes

Happy coding! 🚀
