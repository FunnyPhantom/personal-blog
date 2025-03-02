# CLAUDE.md - Project Guide

## Commands
- `npm run dev` - Run development server with turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Use strict mode with proper type definitions
- **Imports**: Order by external → internal → relative paths
- **Component Structure**: Follow React FC pattern with proper prop interfaces
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Styling**: Use Tailwind with shadcn/ui components via `cn()` utility
- **Error Handling**: Use try/catch for async operations with proper error typing
- **File Structure**: Group by feature for larger components
- **State Management**: Use React hooks like useState/useContext for state
- **Formatting**: Use consistent indentation (2 spaces) and semicolons
- **MDX Content**: Store blog posts in `/blogs` directory with proper frontmatter

## Architecture Notes
- Next.js App Router, React 19, TypeScript, Tailwind CSS
- shadcn/ui components with consistent theming
- MDX for blog content using next-mdx-remote