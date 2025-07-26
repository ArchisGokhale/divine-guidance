# Sheetal Ghate Spiritual Website

## Overview

This is a spiritual consulting website for Sheetal Ghate, offering divine guidance through palmistry, Vedic astrology, and horoscope readings. The application is built as a modern full-stack web application with a focus on aesthetic Indian spiritual design elements and mobile-responsive user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom spiritual color palette and design tokens
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theme**: Dark purple spiritual theme with deep purple backgrounds, white/light text, and yellow accents for perfect readability
- **Typography**: Custom font stack including Playfair Display, Inter, and Noto Serif Devanagari for Sanskrit text
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Color Palette**: Purple-900/800 backgrounds, White/Gray-200 text, Yellow-300/400 accents, perfect contrast ratios following color theory

## Key Components

### Page Structure
1. **Home Page**: Hero section with Sanskrit quotes, service overview, and call-to-action buttons
2. **About Page**: Sheetal's biography, credentials, and spiritual background
3. **Services Page**: Detailed service offerings with pricing and descriptions
4. **Horoscope Page**: Interactive zodiac sign selector with daily predictions
5. **Contact/Booking Page**: Consultation booking form with service selection

### UI Components
- **Navigation**: Fixed header with mobile hamburger menu
- **Layout**: Consistent header, main content area, and footer structure
- **Forms**: Booking forms with validation and user feedback
- **Cards**: Service cards with spiritual iconography and hover effects
- **Animations**: Scroll-triggered animations and floating effects for spiritual elements

### Spiritual Design Elements
- Sanskrit text integration with Devanagari font support
- Mandala and lotus imagery placeholders
- Om symbols and celestial decorations
- Dark purple gradient backgrounds with cosmic themes
- Yellow accent borders and spiritual animations
- Last panels on every page feature deep purple gradients for spiritual depth
- All forms and interactive elements use white backgrounds with dark purple text for perfect readability
- Yellow accents work perfectly on dark purple backgrounds following proper color theory

## Data Flow

### Client-Side Data Management
- React Query handles all server state and caching
- Local state managed through React hooks (useState, useRef)
- Form state managed through React Hook Form with Zod validation
- Custom hooks for mobile detection and scroll animations

### Backend Integration Ready
- Express server setup with middleware for JSON parsing and CORS
- Storage interface abstraction (currently in-memory, ready for database integration)
- API route structure in place for future endpoints
- Session management preparation with connect-pg-simple

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL adapter
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **cmdk**: Command palette functionality

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- TypeScript compilation with strict type checking
- Replit-specific plugins for cartographer and runtime error overlay
- Environment-based configuration switching

### Production Build Process
1. Frontend: Vite builds React application to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Static assets served from built frontend directory
4. Server runs on Node.js with production optimizations

### Database Strategy
- Drizzle ORM configured for PostgreSQL
- Migration system ready with `drizzle-kit`
- Schema defined in shared directory for type safety
- Environment variable configuration for database URL
- Ready for Neon serverless PostgreSQL deployment

### Hosting Considerations
- Express server handles both API routes and static file serving
- Single deployment artifact containing both frontend and backend
- Environment variable configuration for production settings
- Session storage configured for PostgreSQL backend