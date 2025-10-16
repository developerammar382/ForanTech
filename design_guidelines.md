# ForanTech Website Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Tech Industry Leaders)  
**Primary References:** Linear (typography & spacing), Stripe (color restraint & professionalism), Vercel (modern tech aesthetic)  
**Justification:** Technology company requiring professional credibility with modern, futuristic appeal

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Background: 0 0% 100% (Pure white)
- Surface: 210 20% 98% (Soft gray-blue)
- Text Primary: 220 25% 15% (Deep charcoal)
- Text Secondary: 220 15% 45% (Medium gray)
- Brand Primary: 210 85% 25% (Deep blue)
- Brand Secondary: 210 90% 35% (Rich blue)
- Accent: 180 75% 45% (Vibrant teal)
- Accent Light: 180 60% 92% (Soft teal background)

**Dark Mode:**
- Background: 220 25% 8% (Deep charcoal)
- Surface: 220 20% 12% (Elevated charcoal)
- Text Primary: 0 0% 95% (Off-white)
- Text Secondary: 220 10% 65% (Light gray)
- Brand Primary: 210 75% 55% (Bright blue)
- Brand Secondary: 210 70% 45% (Medium blue)
- Accent: 180 70% 50% (Bright teal)
- Accent Dark: 180 50% 15% (Deep teal background)

### B. Typography
- **Primary Font:** Inter (Google Fonts) - modern, professional, tech-forward
- **Headings:** Font weights 700-800, letter-spacing tight (-0.02em for large headings)
- **Body:** Font weight 400-500, line-height 1.6 for optimal readability
- **Scale:** Hero (4xl-6xl), Section Headers (3xl-4xl), Subsections (xl-2xl), Body (base-lg)

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 8, 12, 16, 20, 24 for harmony
- Component padding: p-8 to p-12
- Section spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container max-width: max-w-7xl with px-6 to px-8
- Grid gaps: gap-8 to gap-12 for card layouts

### D. Component Library

**Header:**
- Fixed position with backdrop blur
- ForanTech logo (left) with modern sans-serif logotype
- Navigation links (Home, About, Services, Contact) with subtle hover states
- CTA button in accent teal on right
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full-width with gradient background (deep blue to charcoal)
- Large hero image: Abstract tech visualization (neural networks, digital circuits, or floating geometric shapes) with 50% opacity overlay
- Centered content with max-w-4xl
- Headline: Bold, 5xl-6xl, white text
- Subheadline: lg-xl, light gray, max-w-2xl
- Dual CTAs: Primary (teal, solid) + Secondary (outline with blur background)
- Subtle floating animation on tech elements

**Services Section:**
- Clean white background
- Section header: "Our Services" centered, 3xl-4xl
- Three-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Service cards with:
  - Icon area with teal circular background
  - Service title (2xl, deep blue)
  - Description (base, gray)
  - Subtle hover elevation (shadow-lg)
- Services: AI Solutions, Cloud Infrastructure, Cybersecurity

**About Us Section:**
- Two-column layout (text + image/stats)
- Deep blue background section with white text
- Mission statement in prominent display
- Company values in grid format
- Team introduction with professional headshots (if applicable)

**Contact Section:**
- Split layout: Form (left, 60%) + Info (right, 40%)
- Form fields with modern input styling
- Submit button in accent teal
- Company information with icons (location, email, phone)
- Subtle background pattern or gradient

**Footer:**
- Multi-column layout (Company Info | Quick Links | Social)
- Social media icons in teal with hover states
- Newsletter signup field
- Copyright and legal links
- Charcoal background with light gray text

### E. Interactions & Animations
- Smooth scroll behavior between sections
- Subtle fade-in on scroll for sections (intersection observer)
- Hover states: Slight scale (scale-105) or color shifts
- Button hover: Brightness increase, no outline buttons on images
- Card hover: Elevation increase with smooth transition
- Navigation: Underline slide animation on hover
- Form inputs: Focus ring in accent teal

## Images
**Hero Image:** Large, full-width abstract tech visualization (1920x1080 minimum). Suggested: Neural network nodes, digital circuit patterns, or futuristic geometric shapes with particle effects. Apply 50% dark overlay for text legibility.

**Service Icons:** Modern, minimalist line icons for AI (brain/chip), Cloud (cloud network), Cybersecurity (shield/lock)

**About Section:** Professional office environment, team collaboration, or modern tech workspace (optional but recommended)

## Responsive Behavior
- Desktop (1280px+): Full multi-column layouts, maximum spacing
- Tablet (768-1279px): Two-column grids, reduced spacing
- Mobile (<768px): Single column, stacked sections, hamburger navigation, touch-optimized buttons (min 44px height)

## Accessibility
- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support throughout