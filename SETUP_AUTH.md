# GitHub Authentication Setup Guide

## Current Status
- ✅ Git configured: Yatishgrandhe / Yatish.grandhe@gmail.com
- ✅ Repository: https://github.com/Yatishgrandhe/CATATSA.git
- ⚠️ Authentication needed to push

## Method 1: Complete GitHub CLI Authentication (Recommended)

1. **Run this command in terminal:**
```bash
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"
gh auth login
```

2. **Follow the prompts:**
   - Choose: `GitHub.com`
   - Choose: `HTTPS` or `SSH` (HTTPS is easier)
   - Choose: `Login with a web browser`
   - Copy the code shown
   - Browser will open - paste the code
   - Authorize GitHub CLI
   - Return to terminal

3. **Verify authentication:**
```bash
gh auth status
```

4. **Now push:**
```bash
git push origin main
```

## Method 2: Use Personal Access Token (Quick Setup)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name it: "CATATSA Local Development"
   - Select scope: `repo` (Full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Push using the token:**
```bash
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"
git push origin main
```
   - Username: `Yatishgrandhe`
   - Password: **Paste your Personal Access Token** (not your GitHub password)

3. **Token will be saved in macOS Keychain** for future use

## Method 3: Use SSH (Most Secure)

1. **Generate SSH key:**
```bash
ssh-keygen -t ed25519 -C "Yatish.grandhe@gmail.com"
# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one)
```

2. **Copy your public key:**
```bash
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

3. **Add to GitHub:**
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Title: "Mac - CATATSA"
   - Paste your public key
   - Click "Add SSH key"

4. **Change remote to SSH:**
```bash
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"
git remote set-url origin git@github.com:Yatishgrandhe/CATATSA.git
git push origin main
```

## Verify After Setup

```bash
git push origin main
# Should push successfully without asking for credentials
```

## Current Commits Ready to Push

- `5898516` - Add push instructions and helper script
- `cd2a159` - Create competition events page without purple gradients  
- `8d5a374` - Initial commit: CATA TSA Next.js project

