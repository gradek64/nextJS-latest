#!/bin/bash

# Customs Component Library Setup Script
# This script sets up the external library for local development with npm link

echo "🚀 Setting up External Customs Component Library..."

# Navigate to the external library directory
cd /Users/greg.gil/argos/customs-component-library

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building the library (creates dist/ folder)..."
npm run build

echo "🔗 Creating local npm link..."
npm link

echo "📁 Navigating to Next.js project..."
cd /Users/greg.gil/argos/training-next-js-copy

echo "🔗 Linking the package to Next.js project..."
npm link customs-components

echo "✅ Setup complete!"
echo ""
echo "📋 Your setup:"
echo "1. ✅ External library: /Users/greg.gil/argos/customs-component-library"
echo "2. ✅ Built files: /Users/greg.gil/argos/customs-component-library/dist/"
echo "3. ✅ Linked to Next.js project as 'customs-components'"
echo ""
echo "📝 To use:"
echo "import { Customs } from 'customs-components'"
echo ""
echo "🔄 To rebuild after changes:"
echo "cd /Users/greg.gil/argos/customs-component-library && npm run build"
echo ""
echo "🏃‍♂️ Start your Next.js dev server:"
echo "cd /Users/greg.gil/argos/training-next-js-copy && npm run dev"
