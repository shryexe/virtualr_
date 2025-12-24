# VirtualR

A modern landing page for a VR development platform built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.14-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC)

## Overview

VirtualR is a landing page showcasing a VR application development platform that enables users to build immersive virtual reality experiences with ease. The platform features drag-and-drop interfaces, multi-platform compatibility, real-time previews, and collaboration tools.

## Features

- **Hero Section** - Eye-catching introduction with video backgrounds
- **Features Section** - Highlights platform capabilities
- **Workflow Section** - Demonstrates the development process
- **Pricing Section** - Three-tier pricing plans (Free, Pro, Enterprise)
- **Testimonials** - Customer reviews and feedback
- **Responsive Design** - Fully responsive across all devices

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── assets/           # Images, videos, and static files
├── components/       # React components
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturesSection.jsx
│   ├── Workflow.jsx
│   ├── pricing.jsx
│   ├── testimonials.jsx
│   └── footer.jsx
├── constants/        # Static data and configuration
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

## License

This project is private and not licensed for public distribution.
