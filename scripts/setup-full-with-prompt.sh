#!/bin/bash

# Full Customs Library Setup with User Prompt
# This script provides an interactive setup experience

echo "🚀 Customs Library Setup Assistant"
echo "=================================="
echo ""
echo "This will set up the external customs component library for local development."
echo ""
echo "What this does:"
echo "  1. ✅ Install dependencies in the external library"
echo "  2. ✅ Build the library (creates dist/ folder)"
echo "  3. ✅ Create npm link for the library"  
echo "  4. ✅ Link library to this Next.js project"
echo "  5. ✅ Fix TypeScript declarations"
echo ""
echo "Prerequisites:"
echo "  - External library must exist at: /Users/greg.gil/argos/customs-component-library"
echo ""

# Check if the external library exists
if [ ! -d "/Users/greg.gil/argos/customs-component-library" ]; then
    echo "❌ Error: Customs library not found at expected location:"
    echo "   /Users/greg.gil/argos/customs-component-library"
    echo ""
    echo "Please ensure the external library is cloned and available."
    exit 1
fi

# Ask user if they want to proceed
read -p "🤔 Do you want to set up the customs library now? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🎯 Starting full setup..."
    echo ""
    
    # Run the customs setup script
    echo "📦 Step 1/2: Setting up customs library..."
    bash scripts/setup-customs-library.sh
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🔧 Step 2/2: Fixing TypeScript declarations..."
        bash scripts/fix-customs-types.sh
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "🎉 Setup Complete!"
            echo "=================="
            echo ""
            echo "✅ Customs library is now ready for use!"
            echo ""
            echo "🚀 Next steps:"
            echo "  1. Start development server: npm run dev"
            echo "  2. Visit the demo: http://localhost:3001/customs-demo"
            echo ""
            echo "📝 Usage in your components:"
            echo "  import { Customs } from 'customs-components'"
            echo ""
            echo "📚 Need help? Check: docs/customs-setup-guide.md"
            echo ""
        else
            echo "❌ TypeScript setup failed. Check the output above for details."
            exit 1
        fi
    else
        echo "❌ Customs library setup failed. Check the output above for details."
        exit 1
    fi
else
    echo ""
    echo "⏭️  Setup skipped."
    echo ""
    echo "💡 You can run the setup later using:"
    echo "   npm run setup:full"
    echo "   npm run setup:optional"
    echo ""
    echo "📚 For manual setup instructions, see: docs/customs-setup-guide.md"
    echo ""
fi
