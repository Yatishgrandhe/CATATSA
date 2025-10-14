#!/bin/bash

# Navigate to the project directory
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"

# Initialize git repository
git init

# Add all files
git add .

# Set up git configuration (if needed)
git config user.name "Yatishgrandhe"
git config user.email "yatishgrandhe@example.com"

# Commit the initial setup
git commit -m "Initial setup: Next.js project with TypeScript, Tailwind CSS, and ESLint

- Created Next.js 15.1.0 project structure
- Added TypeScript configuration  
- Set up Tailwind CSS for styling
- Configured ESLint for code quality
- Added basic CATA TSA homepage
- Connected to remote GitHub repository"

# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/Yatishgrandhe/CATATSA.git

# Push to remote repository
git push -u origin main

echo "Git setup complete!"
