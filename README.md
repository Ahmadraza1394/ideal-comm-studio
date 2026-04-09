# Ideal Comm Studio

A modern Next.js 15 website with beautiful animations and custom design.

## Features

- ✨ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion animations
- 🖱️ Custom cursor with smooth spring physics
- 📱 Fully responsive design
- 🎯 Smooth scroll behavior

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.jsx        # Root layout with custom cursor
│   ├── page.jsx          # Main page assembling all sections
│   └── globals.css       # Global styles and font imports
├── components/
│   ├── Navbar.jsx        # Sticky navigation with frosted glass effect
│   ├── Hero.jsx          # Hero section with animated text and glow effects
│   ├── Services.jsx      # Services grid with hover animations
│   ├── Work.jsx          # Portfolio showcase
│   ├── Process.jsx       # Process timeline with sequential reveal
│   ├── Testimonials.jsx  # Client testimonials
│   ├── ContactForm.jsx   # Contact form with staggered animations
│   ├── Footer.jsx        # Footer navigation
│   └── CustomCursor.jsx  # Custom cursor component
└── lib/
    └── motion.js         # Reusable Framer Motion variants
```

## Custom Configuration

### Colors
- Brand Pink: `#D43790`
- Brand Yellow: `#FFBD59`
- Brand Black: `#000000`

### Fonts
- Serif: Times New Roman
- Sans: Montserrat

## Build

To create a production build:

```bash
npm run build
npm start
```

## Technologies

- Next.js 15
- React 18
- Framer Motion
- Tailwind CSS
- Montserrat Font
