# Code Style and Conventions

## TypeScript Configuration
- **Strict Mode**: Enabled (`"strict": true`)
- **Target**: ES2017
- **Module System**: ESNext with bundler module resolution
- **JSX**: Preserve mode for Next.js processing
- **Path Aliases**: `@/*` maps to `./src/*`

## Component Conventions
- **Export Style**: Default exports for page components and layouts
- **Function Components**: Using function declaration syntax (e.g., `export default function ComponentName()`)
- **Props Type**: Inline type definitions using TypeScript
- **Children Props**: Wrapped in `Readonly<{}>` for immutability

## Styling
- **Approach**: Tailwind CSS with utility classes
- **Class Names**: Using template literals for dynamic class combinations
- **Dark Mode**: Support for dark mode with `dark:` prefix utilities

## File Structure
- Components live in `src/app/` directory
- Using Next.js App Router conventions:
  - `page.tsx` for page components
  - `layout.tsx` for layout components
  - `globals.css` for global styles

## Linting
- ESLint configured with Next.js rules
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: node_modules, .next, out, build directories

## Import Conventions
- Using ES6 imports
- Next.js components imported from 'next' packages (e.g., `next/image`, `next/font`)