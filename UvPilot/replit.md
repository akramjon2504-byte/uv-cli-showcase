# UV CLI Showcase - Modern Python Package Manager

## Overview

The UV CLI Showcase is a modern educational web application designed to teach Python developers about UV, a fast, Rust-based Python package manager. The application provides interactive tutorials, migration guides, deployment examples, and hands-on learning experiences to help users transition from traditional pip workflows to UV's modern package management approach.

The project serves as both a learning platform and demonstration of modern web technologies, featuring a comprehensive tutorial system with step-by-step guides, code examples, and real-world deployment scenarios specifically focused on Render.com integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **UI Components**: Comprehensive design system built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring GitHub-inspired dark theme
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build System**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and static file serving
- **Database Schema**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Storage**: In-memory storage with interface for easy migration to persistent storage
- **Development**: Hot module replacement and development server integration via Vite middleware

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM for schema management and type-safe queries
- **Schema Design**: 
  - Users table for authentication and user management
  - Tutorials table for storing interactive tutorial content with JSON-based step data
  - User progress tracking table for tutorial completion state
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store via connect-pg-simple
- **User Management**: UUID-based user identification with username/password authentication
- **Storage Interface**: Abstracted storage layer allowing easy swapping between memory and database implementations

### Key Design Patterns
- **Component Architecture**: Modular React components with clear separation of concerns
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
- **Development Experience**: Hot reloading, error overlays, and development-optimized tooling
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint handling
- **Code Examples**: Interactive code blocks with copy-to-clipboard functionality and syntax highlighting

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Drizzle Kit**: Database migration and schema management tooling

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Lucide React**: Consistent icon library for UI elements
- **Font Awesome**: Additional icon support for specific use cases

### Development and Build Tools
- **Vite**: Fast build tool with plugin ecosystem for development and production
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for server-side code compilation

### Third-party Integrations
- **Google Fonts**: Inter and JetBrains Mono fonts for typography
- **Replit Integration**: Development environment optimization with banner and cartographer plugins
- **Render.com**: Target deployment platform with specific configuration examples

### Core Libraries
- **TanStack Query**: Powerful data fetching and caching for React applications
- **React Hook Form**: Efficient form handling with validation
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for creating variant-based component APIs