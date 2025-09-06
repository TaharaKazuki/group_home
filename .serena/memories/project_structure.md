# Project Structure

## Root Directory
```
group_home/
├── .serena/           # Serena MCP server files
├── .claude/           # Claude configuration
├── public/            # Static assets
│   └── [SVG files and icons]
├── src/               # Source code
│   └── app/          # Next.js App Router directory
│       ├── favicon.ico
│       ├── globals.css    # Global styles with Tailwind
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Homepage component
├── .gitignore
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── package-lock.json      # Lock file for npm
├── postcss.config.mjs     # PostCSS config for Tailwind
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration
```

## Key Directories
- **src/app/**: Main application code using Next.js App Router
- **public/**: Static files served directly (images, fonts, etc.)
- **node_modules/**: Dependencies (git-ignored)
- **.next/**: Build output (git-ignored)

## Important Files
- **src/app/page.tsx**: Main homepage component
- **src/app/layout.tsx**: Root layout wrapping all pages
- **src/app/globals.css**: Global CSS with Tailwind directives
- **package.json**: Project metadata and dependencies

## Next.js App Router Structure
The project uses Next.js 15's App Router, where:
- Each `page.tsx` file represents a route
- `layout.tsx` files wrap their children routes
- File-based routing system
- Server Components by default