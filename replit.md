# ForanTech Website

## Overview
A modern, professional, and visually stunning website for ForanTech - a forward-thinking technology company. Built with React.js, TypeScript, and Tailwind CSS, featuring smooth animations, responsive design, and a clean minimal aesthetic with deep blue and teal accents.

## Project Status
**Current Phase:** MVP Complete ✅
**Last Updated:** January 2025

## Features Implemented

### Frontend (Completed)
- ✅ Fixed header with backdrop blur and smooth scroll navigation
- ✅ Hero section with background video, gradient overlay, and animated CTAs
- ✅ Services section with GSAP scroll animations and 360° flip cards
- ✅ Blog section with elegant card grid and loading states
- ✅ About Us section with company stats and core values
- ✅ Contact form with validation, API integration, and success toasts
- ✅ Footer with multi-column layout and social links
- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ GSAP-powered scroll animations and smooth transitions

### Backend (Completed)
- ✅ Contact form submission API with validation
- ✅ Blog posts API with seeded sample data
- ✅ Type-safe schema definitions with Zod
- ✅ In-memory storage implementation

## Architecture

### Tech Stack
- **Frontend:** React.js, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend:** Express.js, Node.js
- **Data:** In-memory storage (MemStorage)
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Animations:** CSS transitions, intersection observer

### Design System
- **Color Palette:** Deep blue primary, vibrant teal accent, charcoal gray, white
- **Typography:** Inter font family (400-800 weights)
- **Spacing:** Consistent 4, 8, 12, 16, 20, 24 units
- **Components:** Following Shadcn design patterns with custom ForanTech branding

### Data Models
1. **Contact Submissions**
   - name, email, subject, message
   - Timestamp tracking

2. **Blog Posts**
   - title, description, content, thumbnail
   - Published date tracking

## Project Structure
```
client/
  src/
    components/      # Reusable UI components
      header.tsx
      hero-section.tsx
      services-section.tsx
      blog-section.tsx
      about-section.tsx
      contact-section.tsx
      footer.tsx
      theme-provider.tsx
      theme-toggle.tsx
    pages/           # Page components
      home.tsx
    lib/             # Utilities
server/
  routes.ts         # API endpoints
  storage.ts        # Data storage interface
shared/
  schema.ts         # Type definitions and validation
```

## Recent Changes
- January 2025: Initial project setup with complete frontend implementation
- Generated hero background image with futuristic tech visualization
- Implemented all main sections with smooth animations and transitions
- Added dark/light theme support
- Configured design tokens following design guidelines

## User Preferences
- Prefer clean, minimal, professional design
- Focus on smooth animations and transitions
- Emphasis on responsive design across all devices
- Modern tech company aesthetic

## Next Steps
1. Complete backend API implementation
2. Connect frontend to backend
3. Add loading states and error handling
4. Test all features and interactions
5. Final polish and optimization
