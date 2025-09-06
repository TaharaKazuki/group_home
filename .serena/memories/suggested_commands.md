# Suggested Commands for Development

## Development Server
```bash
npm run dev        # Start development server with Turbopack on http://localhost:3000
```

## Build & Production
```bash
npm run build      # Build the application for production with Turbopack
npm run start      # Start the production server
```

## Code Quality
```bash
npm run lint       # Run ESLint to check code quality
```

## Package Management
```bash
npm install        # Install dependencies
npm install <package>  # Add a new dependency
npm install -D <package>  # Add a new dev dependency
```

## Git Commands (Darwin/macOS)
```bash
git status         # Check current changes
git add .          # Stage all changes
git commit -m "message"  # Commit changes
git push           # Push to remote
git pull           # Pull latest changes
git branch         # List branches
git checkout -b <branch>  # Create and switch to new branch
```

## File System (Darwin/macOS)
```bash
ls -la            # List all files with details
cd <directory>    # Change directory
pwd               # Print working directory
mkdir <name>      # Create directory
rm -rf <name>     # Remove directory/file (use with caution)
find . -name "*.tsx"  # Find files by pattern
grep -r "pattern" .   # Search for text in files
```

## TypeScript
```bash
npx tsc --noEmit   # Type-check without building
```

## Next.js Specific
- Main entry point for editing: `src/app/page.tsx`
- The page auto-updates when you save files (Hot Module Replacement)