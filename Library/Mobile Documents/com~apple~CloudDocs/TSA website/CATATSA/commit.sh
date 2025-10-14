#!/bin/bash

echo "Starting git commit process..."

# Navigate to the project directory
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"

# Remove existing git repository if it exists
rm -rf .git

# Initialize new git repository
echo "Initializing git repository..."
git init

# Add all files
echo "Adding files to git..."
git add .

# Check status
echo "Git status:"
git status

# Commit the changes
echo "Committing changes..."
git commit -m "Initial commit: CATA TSA Next.js project

- Next.js 15.1.0 with TypeScript
- Tailwind CSS for styling  
- ESLint configuration
- Professional CATA TSA homepage
- Clean project structure"

# Set main branch
echo "Setting main branch..."
git branch -M main

# Add remote origin
echo "Adding remote origin..."
git remote add origin https://github.com/Yatishgrandhe/CATATSA.git

# Push to remote
echo "Pushing to remote repository..."
git push -u origin main --force

echo "Git commit process completed!"
echo "Check the repository at: https://github.com/Yatishgrandhe/CATATSA"
