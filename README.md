# Character Creation App 🎲

A character creation application inspired by D&D, featuring a parchment-themed interface that evokes ancient manuscripts and scrolls.

## ✨ Features

- **Character Creation**: Create detailed D&D-inspired characters with attributes, classes, and background stories
- **Parchment Theme**: Beautiful UI with warm beige, sepia, and cream colors reminiscent of ancient scrolls
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **Sidebar Navigation**: Easy navigation between character creation, listing, and home

## 🛠️ Technologies Used

- **React 18** with **TypeScript** for type-safe component development
- **Vite** for fast build tool and development server
- **Tailwind CSS v4** for styling with custom CSS variables
- **React Router DOM** for client-side routing
- **Lucide React** for beautiful icons
- **SVGR** for SVG-as-React-component support
- **Custom Parchment Theme** with CSS gradients and color variables

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v16 or higher) and npm installed on your machine.

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/character-creation-app.git
   cd character-creation-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Start JSON-Server**
   ```bash
   npm run start
   ```
   The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with sidebar
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── CreateCharacter.tsx  # Character creation form
├── pages/              # Page components
├── assets/             # Static assets (icons, images)
├── types/              # TypeScript type definitions
└── index.css          # Global styles and CSS variables
```

## 🎨 Theme

The application features a custom parchment-inspired theme with:
- Warm beige and cream backgrounds
- Sepia accent colors
- Smooth gradients reminiscent of aged paper
- Dark mode support with ink-like colors

