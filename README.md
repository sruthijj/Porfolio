# Sruthij S Nair — Neo-Brutalist Software Engineer Portfolio

A production-quality, responsive personal portfolio website for **Sruthij S Nair**, Software Engineer and Computer Science undergraduate. Designed with an experimental Neo-Brutalist visual identity inspired by high-impact editorial typography, Swiss design, and creative developer studios.

---

## 🎨 Visual Identity & Architecture
- **Palette**: Acid Lime (`#D7FF3F`), Hot Pink (`#FF4FA3`), Ink Black (`#171717`), Warm Paper (`#F6F3EA`), Crisp White (`#FFFFFF`).
- **Typography**: Space Grotesk (display), Inter (body / UI), Space Mono (technical telemetry).
- **Aesthetic**: Sharp rectangular panels, heavy outlines, hard offset drop shadows, starburst badges, and continuous ticker strips.
- **Routing**: Client-side routing with React Router (`/`, `/work/lumina-health`, `/work/dentcare`, `/404`).
- **Motion**: Fluid scroll reveals, floating badge physics, and full accessibility support for `prefers-reduced-motion`.

---

## 🚀 Projects Showcased
1. **Lumina Health** — Healthcare Booking Platform (Angular 21, TypeScript, Bootstrap, REST APIs, AWS Cognito, SQL)
   - Live URL: [https://clinic.cubacle.uk](https://clinic.cubacle.uk)
   - Highlights: 8+ medical departments, 20+ doctor profiles, AWS Cognito MFA & role-based authentication, 35% code redundancy reduction, sub-200ms API response times.
2. **DentCare** — AI-Powered Clinical Decision Support System (Python, TensorFlow, CNN, OpenCV, Flutter)
   - Highlights: 4 clinical severity grades, transfer learning on 1,000+ annotated dental images, 92.8% test accuracy, CLAHE preprocessing, near-real-time Flutter mobile inference.

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS Custom Properties (Modular tokens, global, components, sections, responsive, animations)
- **Animation**: Motion for React (`motion/react`)
- **Icons**: Lucide React + custom inline SVG icons
- **Routing**: React Router v7 (`react-router-dom`)

---

## 💻 Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Testing
```bash
# Build production bundle (generates dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Ubuntu AWS EC2 with Nginx
Refer to [`DEPLOYMENT.md`](./DEPLOYMENT.md) and [`nginx.conf`](./nginx.conf) for step-by-step instructions on deploying the `dist/` directory to `/var/www/sruthij-portfolio` with SPA fallback routing.
