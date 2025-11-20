#!/bin/bash
# Push script for CATATSA repository
# This will prompt for GitHub credentials

cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"

echo "=== Pushing to GitHub ==="
echo "Repository: Yatishgrandhe/CATATSA"
echo "Commits to push:"
git log --oneline origin/main..HEAD

echo ""
echo "Attempting to push..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Push failed. Please use VS Code/Cursor to push with authentication."
fi
