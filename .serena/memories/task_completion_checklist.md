# Task Completion Checklist

When completing any coding task in this project, ensure you:

## 1. Code Quality Checks
- [ ] Run `npm run lint` to check for linting errors
- [ ] Fix any ESLint warnings or errors that appear
- [ ] Ensure TypeScript types are properly defined (no `any` types unless necessary)

## 2. Testing
- [ ] Manually test the changes in the development server (`npm run dev`)
- [ ] Verify the feature works as expected in the browser
- [ ] Check both light and dark mode if UI changes were made
- [ ] Test responsive behavior on different screen sizes

## 3. Build Verification
- [ ] Run `npm run build` to ensure the production build succeeds
- [ ] Check for any build warnings or errors
- [ ] Verify no TypeScript errors during build

## 4. Code Style
- [ ] Follow existing code patterns and conventions
- [ ] Use proper TypeScript types
- [ ] Maintain consistent Tailwind CSS class organization
- [ ] Keep components modular and reusable

## 5. Before Committing
- [ ] Review all changes
- [ ] Ensure no debugging code or console.logs are left
- [ ] Update any relevant documentation if needed
- [ ] Write clear, descriptive commit messages

## Common Issues to Watch For
- Unused imports (ESLint will catch these)
- Missing TypeScript types
- Tailwind CSS class conflicts
- Accessibility issues (missing alt texts, ARIA labels)