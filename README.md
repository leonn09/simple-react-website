# Simple React Website

A clean, performance-focused React + Tailwind CSS website built as a learning project and reference implementation for modern frontend best practices.

🔗 **Live Demo:**  
https://leonn09.github.io/simple-react-website/

---

## ✨ Features

- ⚛️ Component-based React architecture
- 🎨 Tailwind CSS for fast, responsive styling
- 🌗 Light / Dark mode with persisted user preference
- 📌 Sticky navbar with scroll-based background transition
- ♿ Accessibility-focused markup (semantic HTML, ARIA-friendly patterns)
- 🚀 Optimized for performance (Lighthouse 99–100)
- 📱 Fully responsive layout across screen sizes

---

## 🧩 Implemented Training Projects

This project consolidates multiple exercises from the **SpaceBourne ALHS Developer Training Manual** into a single cohesive React application.

### ✅ Completed
- **Pricing Table Component**  
  3-tier responsive pricing layout with hover states

- **Navbar with Scroll Animation**  
  Sticky navbar that transitions from transparent to solid on scroll

- **Animated Card Hover Effects**  
  Subtle scale and color transitions using Tailwind utilities

- **To-Do List App**  
  Full CRUD functionality with `localStorage` persistence

- **Dark Mode Toggle**  
  System-aware theme toggle with saved user preference

- **Weather Dashboard**  
  Weather data from json

### ⏳ Planned / Optional Enhancements
- Image Gallery with Modal View
- Currency Converter
- Simple Blog Frontend
- Weather PWA (offline support & caching)

---

## 🧱 Project Structure
```
simple-react-website/
├── 🟡 🚫 **.gitignore**
├── 📜 eslint.config.js
├── 🌐 index.html
├── 🟡 🔒 **package-lock.json**
├── 🔴 📦 **package.json**
├── 🌐 public/
│   └── 🎨 vite.svg
├── 🔴 📖 **README.md**
├── 📁 src/
│   ├── ⚛️ App.jsx
│   ├── 🧩 components/
│   │   ├── 📂 layout/
│   │   │   ├── ⚛️ Footer.jsx
│   │   │   └── ⚛️ TopNavBar.jsx
│   │   ├── 📄 pages/
│   │   │   ├── ⚛️ HomePage.jsx
│   │   │   └── ⚛️ ProjectsPage.jsx
│   │   ├── 📂 projects/
│   │   │   ├── ⚛️ PricingTableComponent.jsx
│   │   │   ├── ⚛️ TODOApp.jsx
│   │   │   └── ⚛️ WeatherDashboard.jsx
│   │   ├── 📂 sections/
│   │   │   ├── ⚛️ AboutUs.jsx
│   │   │   ├── ⚛️ Features.jsx
│   │   │   ├── ⚛️ HeroSection.jsx
│   │   │   └── ⚛️ SampleComponents.jsx
│   │   └── 🎨 ui/
│   │   │   ├── ⚛️ Card.jsx
│   │   │   ├── ⚛️ PricingTableLogo.jsx
│   │   │   ├── ⚛️ ReactLogo.jsx
│   │   │   ├── ⚛️ TailwindLogo.jsx
│   │   │   ├── ⚛️ TODOLogo.jsx
│   │   │   └── ⚛️ WeatherLogo.jsx
│   ├── 📂 data/
│   │   ├── ⚙️ forecast.json
│   │   └── ⚙️ weather.json
│   ├── 🎨 index.css
│   └── ⚛️ main.jsx
└── 📜 vite.config.js
```

---

## 🎯 Goals

This project serves as:
- A hands-on learning platform for modern React development
- A performance-first reference implementation
- A clean base for experimenting with new features without sacrificing best practices
- A consolidated submission for multiple frontend training exercises

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Vite**
- **Git & GitHub Pages**

---

## 📦 Scripts

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
```

## 🌍 Deployment

The project is deployed using GitHub Pages.

## 🧠 Notes

Built incrementally with clean commit history

Focused on fundamentals before enhancements

Designed to scale with additional sections and features