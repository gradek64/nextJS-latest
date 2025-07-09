# TypeScript Troubleshooting - Customs Components

## 🚨 Common Issue: Pre-commit TypeScript Failures

When you try to commit changes that use the customs components library, you might encounter TypeScript errors during the pre-commit hook that runs `tsc --noEmit`.

### ❌ Typical Error Messages

```bash
src/app/customs-demo/page.tsx(5,28): error TS7016: 
Could not find declaration file for module 'customs-components'. 
Try `npm i --save-dev @types/customs-components` if it exists, 
or add a new declaration (.d.ts) file containing `declare module 'customs-components';`

src/app/customs-demo/page.tsx(10,12): error TS2339: 
Property 'Button' does not exist on type 'any'.
```

## ✅ Solutions (In Order of Preference)

### 1. 🎯 Add Proper Type Declarations (Recommended)

Create a type declaration file for the customs components:

```bash
# Create the types directory if it doesn't exist
mkdir -p src/types

# Create the declaration file
cat > src/types/customs-components.d.ts << 'EOF'
declare module 'customs-components' {
  import { ReactNode, ComponentType } from 'react'

  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    children?: ReactNode
    onClick?: () => void
    customTheme?: {
      colors?: {
        primary?: string
        secondary?: string
        accent?: string
        text?: string
        background?: string
      }
      spacing?: {
        xs?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
      }
      borderRadius?: {
        sm?: string
        md?: string
        lg?: string
      }
    }
  }

  export interface ThemeProviderProps {
    children: ReactNode
  }

  export interface CustomsComponents {
    Button: ComponentType<ButtonProps>
    ThemeProvider: ComponentType<ThemeProviderProps>
    useBreakpoint: () => 'mobile' | 'tablet' | 'desktop'
    useTheme: () => { 
      theme: any
      setTheme: (theme: any) => void 
    }
  }

  const Customs: CustomsComponents
  export { Customs }
}
EOF
```

### 2. 🔧 Update TypeScript Configuration

Add `skipLibCheck` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "skipLibCheck": true,
    // ... other options
  }
}
```

### 3. 🚫 Modify Pre-commit Hook (Temporary)

If you need a quick fix, modify your pre-commit hook:

```bash
# Find your pre-commit hook file (usually .husky/pre-commit or .git/hooks/pre-commit)
# Change from:
npx tsc --noEmit

# To:
npx tsc --noEmit --skipLibCheck
```

### 4. 🆘 Emergency Bypass (Last Resort)

Only use this when you absolutely need to commit immediately:

```bash
git commit --no-verify -m "Your commit message"
```

**⚠️ Warning**: This skips ALL pre-commit checks, not just TypeScript.

## 🔍 Diagnosing the Issue

### Check if the Library is Properly Linked

```bash
# In your Next.js project
ls -la node_modules/customs-components

# Should show a symlink to your external library
# If not, re-run the linking process
```

### Verify TypeScript Can Find Your Types

```bash
# Check TypeScript configuration
npx tsc --showConfig

# Manually run TypeScript check
npx tsc --noEmit
```

### Check Import Statements

Ensure you're importing correctly:

```tsx
// ✅ Correct
import { Customs } from 'customs-components'

// ❌ Incorrect
import { Button } from 'customs-components'
import Customs from 'customs-components'
```

## 🛠️ Development Workflow

### Recommended Setup for TypeScript

1. **Create type declarations** (Solution #1 above)
2. **Update your `tsconfig.json`** to include the types directory:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"],
    "skipLibCheck": true
  },
  "include": [
    "src/types/**/*",
    // ... other includes
  ]
}
```

3. **Test your setup**:

```bash
# Run TypeScript check manually
npx tsc --noEmit

# Should pass without errors now
```

## 📚 Understanding the Problem

### Why This Happens

1. **npm link** creates a symlink to your local library
2. The library doesn't have TypeScript definitions (`.d.ts` files)
3. TypeScript can't infer types for the linked module
4. Pre-commit hooks run `tsc --noEmit` which fails on type errors

### Why Our Solutions Work

- **Type declarations**: Tell TypeScript exactly what to expect
- **skipLibCheck**: Skip type checking for external libraries
- **Pre-commit modification**: Change the checking behavior
- **Bypass**: Skip the check entirely (not recommended)

## 🚀 Quick Fix Script

Run this script to automatically set up type declarations:

```bash
#!/bin/bash
# Quick TypeScript fix for customs components

echo "🔧 Setting up TypeScript declarations for customs-components..."

# Create types directory
mkdir -p src/types

# Create declaration file
cat > src/types/customs-components.d.ts << 'EOF'
declare module 'customs-components' {
  import { ReactNode, ComponentType } from 'react'
  
  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    children?: ReactNode
    onClick?: () => void
  }
  
  export interface CustomsComponents {
    Button: ComponentType<ButtonProps>
    ThemeProvider: ComponentType<{ children: ReactNode }>
    useBreakpoint: () => 'mobile' | 'tablet' | 'desktop'
    useTheme: () => { theme: any; setTheme: (theme: any) => void }
  }
  
  const Customs: CustomsComponents
  export { Customs }
}
EOF

echo "✅ TypeScript declarations created!"
echo "📁 File: src/types/customs-components.d.ts"
echo ""
echo "🧪 Test it:"
echo "npx tsc --noEmit"
```

Save this as `scripts/fix-customs-types.sh` and run:

```bash
chmod +x scripts/fix-customs-types.sh
./scripts/fix-customs-types.sh
```

## 🎯 Best Practices

1. **Always create type declarations** for npm linked packages
2. **Test commits** with TypeScript checks before pushing
3. **Use `skipLibCheck`** in development, proper types in production
4. **Document your setup** for team members
5. **Keep type declarations** in version control

---

**Need more help?** Check the main [Customs Consumer Guide](./customs-consumer-guide.md) or the [Quick Reference](./customs-quick-reference.md).
