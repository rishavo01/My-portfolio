# 🖥️ Rishav Singh's Portfolio OS

[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4+-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

> A fully interactive, macOS-inspired portfolio experience that transforms the traditional resume into an immersive desktop operating system simulation. Built with modern web technologies to showcase full-stack development expertise through an innovative, playful interface.

**🔗 Live Demo:** 

---

## 🎯 Overview

Portfolio OS isn't just another portfolio website—it's a fully functional desktop environment that runs in your browser. Featuring draggable windows, a working dock with magnification effects, multiple applications, and even a terminal with custom commands, this project demonstrates advanced React patterns, state management, and UI/UX design principles.

Perfect for developers who want to stand out with a memorable, interactive portfolio that actually showcases technical skills through its implementation.

---

## ✨ Key Features

### 🎨 Authentic macOS Experience
- **Pixel-perfect UI**: Recreates the iconic macOS Big Sur/Monterey aesthetic
- **Dynamic Menu Bar**: Real-time clock, date, and system controls
- **Interactive Dock**: Icon magnification on hover with smooth animations
- **Desktop Environment**: Complete with wallpaper and drag-and-drop window management

### 🪟 Advanced Window Management
- **Draggable Windows**: Click and drag windows anywhere on screen with smooth tracking
- **Minimize Animation**: Authentic "Genie effect" that animates windows to the dock
- **Maximize/Restore**: Full-screen toggle for immersive app viewing
- **Z-Index Control**: Smart layering that brings active windows to front
- **Multi-Window Support**: Run multiple apps simultaneously

### 📱 Built-in Applications

#### 👤 **Finder** - About Me
Explore my professional journey with sections for:
- Personal bio and background
- Education (VIT Bhopal)
- Certifications and achievements
- Professional experience at HPE

#### 🌐 **Safari** - Projects Browser
A browser-style interface featuring:
- **Research Papers**: ETESM-2025 publication showcase
- **Project Portfolio**: Interactive cards with live demos and GitHub links
- **Social Links**: Connect across platforms (GitHub, LinkedIn, Twitter/X)
- Tab-based navigation for seamless browsing

#### 💻 **VS Code** - Developer View
Developer-centric presentation with:
- Resume data in beautifully formatted JSON
- Syntax-highlighted code display
- Skills breakdown by category
- Work experience timeline

#### 🖥️ **Terminal** - Interactive CLI
Fully functional command-line interface with:
- `help` - Display all available commands
- `about` - View professional summary
- `projects` - List featured projects with descriptions
- `skills` - Display technical stack by category
- `experience` - Work history and roles
- `education` - Academic background
- `socials` - Social media and contact links
- `whoami` - Quick profile snapshot
- `clear` - Clear terminal screen
- `neofetch` - System information display (fun Easter egg!)

#### 📸 **Photo Booth** - Live Camera
Real webcam integration featuring:
- Live camera feed using WebRTC
- Capture photos directly in-browser
- Download images to your device
- Countdown timer for perfect shots

#### 🎮 **Arcade** - Snake Game
Classic Snake game built from scratch:
- Keyboard controls (Arrow keys)
- Score tracking
- Game over detection
- Retro gaming aesthetics

---

## 🚀 Featured Projects

### **Sarovar AI** 🌾
Multilingual AI platform empowering farmers with real-time agricultural insights
- **Stack**: React, Gemini LLM, Node.js
- **Impact**: Supports 5+ regional languages for accessibility
- **Features**: Weather forecasts, crop recommendations, market prices

### **Stay Heaven** 🏨
Intelligent booking platform with AI-driven recommendations
- **Stack**: MongoDB, Express, React, Node.js (MERN)
- **Features**: Smart search, personalized suggestions, secure payments
- **Scale**: Handles 1000+ property listings

### **inVIcTus** 🎓
Academic management platform serving 5000+ students
- **Stack**: React, Firebase, Google Maps API
- **Features**: Course planning, GPA calculator, interactive campus maps
- **Recognition**: Official VIT Bhopal student platform

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: React 18+ (via Vite)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Build Tool**: Vite 5+

### Libraries & Tools
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect, useRef, useCallback)
- **Camera API**: MediaDevices WebRTC
- **Animations**: CSS transitions and transforms
- **Type Safety**: Full TypeScript coverage

### Design Patterns
- Component composition
- Custom hooks for reusable logic
- Context API for global state
- Responsive design principles

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern browser with WebRTC support (for Photo Booth)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyb3rghoul/portfolio-os.git
   cd portfolio-os
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

### Deployment

The built files in the `dist/` folder can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

---

## 🎮 Interactive Terminal Guide

Launch the Terminal app and try these commands:

```bash
# Get started
help                 # List all commands with descriptions

# Learn about me
about                # Professional summary
whoami               # Quick identity snapshot
education            # Academic background
experience           # Work history at HPE

# Explore work
projects             # View featured projects
skills               # Technical skills breakdown
socials              # Social media links

# Fun stuff
neofetch             # System information (Easter egg!)
clear                # Clear terminal screen
```

---

## 📱 Responsive Design

**Desktop-First Experience**: This portfolio is optimized for desktop/laptop viewing (≥768px) to preserve the authentic OS simulation experience.

**Mobile Fallback**: Users on mobile devices will see a friendly message with:
- Explanation of desktop-only design
- QR code for easy desktop access
- Social media quick links
- Contact information

---

## 🎨 Customization

Want to adapt this for your own portfolio? Here's what to modify:

1. **Personal Information**: Update `src/data/profile.ts`
2. **Projects**: Edit `src/data/projects.ts`
3. **Skills**: Modify `src/data/skills.ts`
4. **Theme Colors**: Customize `tailwind.config.js`
5. **Wallpaper**: Replace `public/wallpaper.jpg`

---

## 🤝 Contributing

While this is a personal portfolio, I welcome:
- Bug reports and fixes
- Performance improvements
- Feature suggestions
- Documentation enhancements

Please open an issue first to discuss major changes.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as inspiration for your own portfolio, but please:
- Don't use my personal information or projects
- Give credit if you use substantial portions of the code
- Make it your own!

---

## 👨‍💻 About Me

**Rishav Singh**  
*Software Development Engineer @ Hewlett Packard Enterprise*

Passionate about building scalable web applications and creating delightful user experiences. This portfolio represents my love for clean code, modern design, and pushing the boundaries of what's possible in the browser.

### 🔗 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-cyb3rghoul-181717?logo=github)](https://github.com/cyb3rghoul)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-harsh--shukla19-0A66C2?logo=linkedin)](https://linkedin.com/in/harsh-shukla19)
[![Twitter](https://img.shields.io/badge/Twitter-@cypher1911-1DA1F2?logo=twitter)](https://twitter.com/cypher1911)

---

## 🙏 Acknowledgments

- Inspired by macOS Big Sur/Monterey UI design
- Icons from [Lucide Icons](https://lucide.dev/)
- Built with ❤️ using React and Tailwind CSS

---

## ⭐ Show Your Support

If this project helped or inspired you, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with fellow developers
- Providing feedback or suggestions

**Built with ❤️ and countless cups of ☕**