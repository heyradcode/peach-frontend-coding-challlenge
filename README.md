# PeachyTask - Modern Task Management App

A modern, responsive task management application built with Next.js 14, TypeScript, and TanStack Query. This project has been significantly improved with modern development practices, better performance, and enhanced user experience.

## ✨ Features

- ✅ **Task Management**: Create, complete, and delete tasks
- 🗑️ **Trash System**: Move tasks to trash and restore them
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Real-time Updates**: Instant UI updates without page refresh
- 🎨 **Modern UI**: Beautiful, accessible interface with smooth animations
- 🛡️ **Error Handling**: Comprehensive error boundaries and loading states
- 🧪 **Testing**: Full test coverage with Jest and React Testing Library
- 🔧 **Developer Experience**: ESLint, Prettier, Husky, and TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js v18.0.0 or later
- [Yarn](https://yarnpkg.com/) (recommended) or npm

### Installation

1. **Clone and install dependencies:**
   ```bash
   yarn setup
   # or
   npm run setup
   ```

2. **Start the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Fix ESLint errors |
| `yarn type-check` | Run TypeScript type checking |
| `yarn format` | Format code with Prettier |
| `yarn test` | Run tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:coverage` | Run tests with coverage |

## 🏗️ Architecture Improvements

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5.3+ with strict configuration
- **Styling**: Styled Components 6+ with CSS custom properties
- **State Management**: TanStack Query v5 (formerly React Query)
- **Database**: Prisma 5+ with SQLite
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier + Husky

### Key Improvements

#### 🎯 **Performance Optimizations**
- TanStack Query with intelligent caching and background updates
- Optimized bundle size with Next.js 14 features
- Lazy loading and code splitting
- Image optimization with WebP/AVIF support

#### 🎨 **Modern UI/UX**
- CSS custom properties for consistent theming
- Responsive design with mobile-first approach
- Smooth animations and micro-interactions
- Accessibility improvements (ARIA labels, keyboard navigation)
- Dark mode support (via CSS custom properties)

#### 🛡️ **Error Handling & Resilience**
- Error boundaries for graceful error recovery
- Loading states for better user feedback
- Retry mechanisms for failed requests
- Comprehensive error logging

#### 🧪 **Testing & Quality**
- Unit tests for all components
- Integration tests for user flows
- Type safety with strict TypeScript
- Automated code formatting and linting
- Pre-commit hooks for quality assurance

#### 🔧 **Developer Experience**
- Modern development tools and configurations
- Hot reloading and fast refresh
- TypeScript path mapping for clean imports
- Comprehensive documentation

## 📁 Project Structure

```
peach-frontend-coding-challlenge/
├── components/           # Reusable UI components
│   ├── CreateTask.tsx   # Task creation form
│   ├── ErrorBoundary.tsx # Error handling component
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Loading.tsx      # Loading states
│   ├── NoTasks.tsx      # Empty state component
│   ├── TaskItem.tsx     # Individual task component
│   ├── TrashMenu.tsx    # Trash navigation
│   └── TrashModal.tsx   # Trash management modal
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   ├── _app.tsx        # App wrapper with providers
│   └── index.tsx       # Main page
├── queries/             # TanStack Query hooks
│   └── index.ts        # Data fetching logic
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
├── styles/             # Global styles
│   └── globals.css     # CSS custom properties
├── __tests__/          # Test files
└── prisma/             # Database schema and migrations
```

## 🎨 Design System

The app uses a comprehensive design system with CSS custom properties:

### Colors
- **Brand**: `#f4845f` (Peach)
- **Secondary**: `#414288` (Purple)
- **Success**: `#abff4f` (Green)
- **Danger**: `#6e0e0a` (Red)
- **Neutral**: Various grays for text and backgrounds

### Spacing Scale
- `--space-xs`: 0.25rem (4px)
- `--space-sm`: 0.5rem (8px)
- `--space-md`: 1rem (16px)
- `--space-lg`: 1.5rem (24px)
- `--space-xl`: 2rem (32px)
- `--space-2xl`: 3rem (48px)

### Typography
- Responsive font sizes with CSS custom properties
- System font stack for optimal performance
- Proper line heights and letter spacing

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

### Test Coverage
- Component unit tests
- User interaction tests
- Error boundary testing
- Accessibility testing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `yarn test`
5. Format code: `yarn format`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📝 License

This project is part of a coding challenge for Peach Finance.

---

## 🔧 Original Challenge Requirements

> **Note**: The original challenge requirements have been fulfilled and enhanced with modern practices.

### ✅ Completed Features

- **Bug Fix**: "Done" tasks list now updates in real-time without page refresh
- **Trash Feature**: Complete trash system with modal interface
- **UI/UX**: Modern, responsive design with smooth animations
- **Performance**: Optimized with TanStack Query and Next.js 14
- **Testing**: Comprehensive test coverage
- **Accessibility**: ARIA labels, keyboard navigation, focus management

### 🎯 Original Prompt

PeachyTasks has gained a lot of users and they've started requesting new features and reporting bugs. You are to fix the defects and implement any new features as specified, according to provided mockups.

All work should be done on the frontend only — **do not modify the API**.

#### Bug: "done" tasks list not updating with changes
✅ **Fixed**: When a user marks a task as "done" it is now shown under "Done" tasks without refreshing the page using TanStack Query's real-time updates.

#### Feature: Trash
✅ **Implemented**: Complete trash system with:
- Trash button on each task
- Trash menu in navigation with count
- Modal showing all trashed tasks
- Empty trash functionality
- Real-time updates across all views

---

## 🏆 Improvements Summary

This project has been significantly enhanced from the original challenge requirements:

1. **Modern Tech Stack**: Upgraded to latest versions of all dependencies
2. **Better Performance**: Optimized with modern React patterns and caching
3. **Enhanced UX**: Smooth animations, loading states, and error handling
4. **Developer Experience**: Comprehensive tooling and testing setup
5. **Code Quality**: TypeScript, ESLint, Prettier, and automated formatting
6. **Accessibility**: ARIA labels, keyboard navigation, and focus management
7. **Responsive Design**: Mobile-first approach with modern CSS
8. **Testing**: Full test coverage with Jest and React Testing Library

The result is a production-ready, modern task management application that exceeds the original requirements while maintaining clean, maintainable code.