# Git Commands to Commit CATA TSA Project

Please run these commands in your terminal to properly commit the code to GitHub:

## 1. Navigate to the project directory
```bash
cd "/Users/yatishgrandhe/Library/Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA"
```

## 2. Initialize git repository
```bash
git init
```

## 3. Add all files
```bash
git add .
```

## 4. Commit the changes
```bash
git commit -m "Initial commit: CATA TSA Next.js project

- Next.js 15.1.0 with TypeScript
- Tailwind CSS for styling
- ESLint configuration
- Professional CATA TSA homepage
- Clean project structure"
```

## 5. Set main branch
```bash
git branch -M main
```

## 6. Add remote origin
```bash
git remote add origin https://github.com/Yatishgrandhe/CATATSA.git
```

## 7. Push to GitHub
```bash
git push -u origin main --force
```

## Files being committed:
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx
- package.json
- package-lock.json
- tsconfig.json
- next.config.ts
- tailwind.config.ts
- postcss.config.mjs
- eslint.config.mjs
- .gitignore
- README.md
- next-env.d.ts

## After running these commands:
1. Check the repository at: https://github.com/Yatishgrandhe/CATATSA
2. You should see a new commit with all the project files
3. The repository will be updated with the latest code
