# How to Push Your Code to GitHub

## Current Status
- ✅ Git account configured: Yatishgrandhe
- ✅ Email configured: Yatish.grandhe@gmail.com
- ✅ 2 commits ready to push:
  1. `cd2a159` - Create competition events page without purple gradients
  2. `8d5a374` - Initial commit: CATA TSA Next.js project

## Method 1: Push via VS Code/Cursor (Easiest)

1. Open the **Source Control** panel (Git icon in sidebar, or `Ctrl+Shift+G`)
2. You should see "2" commits ahead of origin/main
3. Click the **"..."** menu (three dots) at the top
4. Select **"Push"**
5. When prompted for credentials:
   - Username: `Yatishgrandhe`
   - Password: Use a **Personal Access Token** (not your GitHub password)
   
   To create a token:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control of private repositories)
   - Copy the token and use it as the password

## Method 2: Push via Terminal

```bash
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"
git push origin main
```

When prompted:
- Username: `Yatishgrandhe`
- Password: Your Personal Access Token

## Method 3: Use SSH (Recommended for Future)

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "Yatish.grandhe@gmail.com"
```

2. Add to GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
# Copy the output and add it to: https://github.com/settings/keys
```

3. Change remote to SSH:
```bash
git remote set-url origin git@github.com:Yatishgrandhe/CATATSA.git
git push origin main
```

## Verify After Pushing

```bash
git status
# Should show: "Your branch is up to date with 'origin/main'"
```

