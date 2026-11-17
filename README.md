<div align="center">

# 🍎 macOS-Style Portfolio

**An interactive portfolio that recreates the macOS desktop experience in the browser.**
Draggable windows, an animated Dock, a working menu bar, and a clean, reusable React architecture.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)
![Zustand](https://img.shields.io/badge/Zustand-State-orange)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)

[Live Demo](#) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Path Aliases](#path-aliases)
- [Project Structure](#project-structure)
- [Architecture Highlights](#architecture-highlights)
- [Scripts](#scripts)
- [Customization](#customization)
- [Acknowledgements](#acknowledgements)

---

## About

This project is a portfolio built from scratch to look and feel like macOS. Instead of a classic scrolling page, visitors interact with a desktop: they open apps from the Dock, drag windows around, browse projects in a Finder, read a blog in Safari, view my resume as a PDF, and more.

It was built to practice **Higher-Order Components**, **global state management with Zustand + Immer**, and **GSAP animations**, while keeping the codebase clean and reusable.

## Features

- 🖥️ **macOS desktop UI**: wallpaper, menu bar, Dock, and layered windows
- 🧲 **Animated Dock**: magnification effect on hover powered by GSAP, with tooltips
- 🪟 **Window system**: open, close, focus (z-index stacking), draggable windows
- 📁 **Finder**: navigable folders, files, and projects with active-state sidebar
- 🌐 **Safari**: developer blog with posts and external links
- 💻 **Terminal**: animated tech stack output
- 🖼️ **Photos & image/text file viewers**
- 📄 **Resume viewer**: PDF rendering and download
- 📶 **Wi-Fi popover**: macOS-style menu bar control with selectable networks
- ✨ **Interactive welcome text**: variable-font weight reacts to the cursor
- 🔤 **Live clock** in the menu bar
- 📱 **Responsive notice** for small screens (designed for desktop/tablet)

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library |
| [Vite](https://vite.dev) | Dev server and bundler |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling (`@theme`, `@utility`, `@layer`) |
| [GSAP](https://gsap.com) + [@gsap/react](https://gsap.com/resources/React/) | Dock magnification, text hover and window animations |
| [Zustand](https://zustand.docs.pmnd.rs) | Global state (windows, locations, popovers) |
| [Immer](https://immerjs.github.io/immer/) | Immutable state updates with Zustand middleware |
| [clsx](https://github.com/lukeed/clsx) | Conditional class names (`active` / `not-active`) |
| [React PDF](https://github.com/wojtekmaj/react-pdf) | Resume rendering and download |
| [Lucide React](https://lucide.dev) | Icon set |
| [react-tooltip](https://react-tooltip.com) | Dock tooltips |
| [Day.js](https://day.js.org) | Menu bar date and time formatting |
| [ESLint](https://eslint.org) | Linting and code quality |

### Patterns used

- **Higher-Order Components (HOC)**: `WindowWrapper` adds open/close state, z-index focus, and animation to any window component
- **Zustand + Immer stores**: simple, mutable-style updates for navigating between windows
- **Path aliases**: clean imports such as `#components/*`, `#Store/*`, `#hoc/*`, `#constants/*`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **18+** (20+ recommended)
- npm (bundled with Node), or yarn / pnpm

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies

```bash
npm install
```

<details>
<summary>Or install every library manually</summary>

```bash
# Core
npm install react react-dom

# Animation
npm install gsap @gsap/react

# State management
npm install zustand immer

# UI helpers
npm install clsx lucide-react react-tooltip dayjs

# Resume PDF
npm install react-pdf

# Styling (Tailwind v4 + Vite plugin)
npm install tailwindcss @tailwindcss/vite

# Dev tools
npm install -D vite @vitejs/plugin-react eslint
```

</details>

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
npm run preview
```

## Path Aliases

Imports use `#` aliases. They are declared in `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "#components": resolve(__dirname, "src/components"),
            "#constants": resolve(__dirname, "src/constants"),
            "#Store": resolve(__dirname, "src/Store"),
            "#hoc": resolve(__dirname, "src/hoc"),
            "#windows": resolve(__dirname, "src/windows"),
        },
    },
});
```

Optional `jsconfig.json` for editor autocomplete:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "#components/*": ["src/components/*"],
            "#constants/*": ["src/constants/*"],
            "#Store/*": ["src/Store/*"],
            "#hoc/*": ["src/hoc/*"],
            "#windows/*": ["src/windows/*"]
        }
    }
}
```

## Project Structure

```text
.
├── public/
│   ├── icons/            # Menu bar and UI icons (wifi, search, lock…)
│   ├── images/           # Wallpaper, dock icons, project images
│   └── files/            # Resume PDF
├── src/
│   ├── components/       # Navbar, Dock, Welcome, Wifi, WindowControls…
│   ├── constants/        # navLinks, navIcons, dockApps, locations, WINDOW_CONFIG
│   ├── hoc/              # WindowWrapper (higher-order component)
│   ├── Store/            # Zustand stores: window, location, popover
│   ├── windows/          # Finder, Safari, Terminal, Resume, Contact, Photos…
│   ├── App.jsx
│   ├── index.css         # Tailwind v4 theme, utilities, component styles
│   └── main.jsx
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Architecture Highlights

### Window store (Zustand + Immer)

Every window lives in one store. Opening a window raises its `zIndex`, so the last clicked window is always on top.

```js
const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (key, data = null) =>
            set((state) => {
                const win = state.windows[key];
                win.isOpen = true;
                win.zIndex = state.nextZIndex++;
                win.data = data ?? win.data;
            }),

        closeWindow: (key) =>
            set((state) => {
                const win = state.windows[key];
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focusWindow: (key) =>
            set((state) => {
                state.windows[key].zIndex = state.nextZIndex++;
            }),
    })),
);
```

### Higher-Order Component

Each window is a plain component wrapped once:

```jsx
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
```

The HOC handles visibility, stacking, dragging, and animation, so window components only contain their own UI.

### Dock magnification (GSAP)

Icon scale and vertical offset follow a Gaussian curve based on the distance between the cursor and each icon:

```js
const intensity = Math.exp(-(distance ** 2.8) / 20000);
gsap.to(icon, { scale: 1 + 0.25 * intensity, y: -15 * intensity, duration: 0.2 });
```

### Conditional styling with clsx

```jsx
<li className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
```

The same pattern drives the Finder sidebar and the Wi-Fi network list.

### Menu bar popovers

`navIcons` entries declare which popover they open, and a small store tracks the active one:

```js
const navIcons = [
    { id: 1, img: "/icons/wifi.svg", popover: "wifi" },
    { id: 2, img: "/icons/search.svg" },
];
```

`Navbar` only toggles by name. All Wi-Fi logic lives in `Wifi.jsx`, so adding a new popover means one new component and one `popover` key.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Customization

1. **Name and branding**: edit the title in `Navbar.jsx` and the welcome text in `Welcome.jsx`
2. **Wallpaper**: replace `public/images/wallpaper.jpg`
3. **Dock apps and windows**: edit `dockApps` and `WINDOW_CONFIG` in `src/constants/index.js`
4. **Projects and files**: edit `locations` in `src/constants/index.js`
5. **Resume**: replace the PDF in `public/files/`
6. **Blog posts**: edit `blogPosts` in `src/constants/index.js`
7. **Fonts**: Georama and Roboto Mono are loaded in `index.css` and registered in `@theme`



---

<div align="center">

Built with ❤️ by **Ghassen**

</div>
