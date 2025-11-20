#!/bin/bash
# GitHub Authentication Setup Script

cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"

echo "=== GitHub Authentication Setup ==="
echo ""
echo "Choose authentication method:"
echo "1. GitHub CLI (gh) - Recommended"
echo "2. Personal Access Token"
echo "3. SSH Key"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
  1)
    echo ""
    echo "Starting GitHub CLI authentication..."
    echo "Follow the prompts in your browser."
    gh auth login
    if [ $? -eq 0 ]; then
      echo "✅ Authentication successful!"
      echo "Testing push..."
      git push origin main
    else
      echo "❌ Authentication failed. Try method 2 or 3."
    fi
    ;;
  2)
    echo ""
    echo "=== Personal Access Token Setup ==="
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Click 'Generate new token (classic)'"
    echo "3. Select scope: 'repo'"
    echo "4. Copy the token"
    echo ""
    read -p "Press Enter after you have your token ready..."
    echo ""
    echo "Attempting to push (you'll be prompted for credentials)..."
    git push origin main
    echo ""
    echo "If successful, your token is now saved in macOS Keychain."
    ;;
  3)
    echo ""
    echo "=== SSH Key Setup ==="
    if [ ! -f ~/.ssh/id_ed25519.pub ]; then
      echo "Generating SSH key..."
      ssh-keygen -t ed25519 -C "Yatish.grandhe@gmail.com" -f ~/.ssh/id_ed25519 -N ""
    fi
    echo ""
    echo "Your public key:"
    cat ~/.ssh/id_ed25519.pub
    echo ""
    echo "1. Copy the key above"
    echo "2. Go to: https://github.com/settings/keys"
    echo "3. Click 'New SSH key' and paste it"
    echo ""
    read -p "Press Enter after adding the key to GitHub..."
    echo ""
    echo "Changing remote to SSH..."
    git remote set-url origin git@github.com:Yatishgrandhe/CATATSA.git
    echo "Testing connection..."
    ssh -T git@github.com
    echo ""
    echo "Attempting to push..."
    git push origin main
    ;;
  *)
    echo "Invalid choice"
    exit 1
    ;;
esac

echo ""
echo "=== Final Status ==="
git status

