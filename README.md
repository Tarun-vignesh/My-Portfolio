# Tarun Vignesh P M — AI & Data Science Portfolio

A modern, high-performance personal portfolio website showcasing projects, skills, education, experience, and credentials in AI, Data Science, IoT, and Software Engineering.

## ✨ Features

- **Modern UI & Aesthetics**: Dark theme with refined typography, responsive design, and smooth layout.
- **Projects Showcase**: Interactive overview of AI score forecasting, IoT home automation, and development work.
- **Skills Matrix**: Organized technical and soft skills (AI/ML, Python, Java, MySQL, Arduino, etc.).
- **Resume & Contact**: Direct access to downloadable resume, email, phone, GitHub, and LinkedIn profiles.
- **SEO & Social Metadata**: Preconfigured Open Graph and Twitter Card tags.

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router)
- **UI & Components**: [React 19](https://react.dev), [Lucide Icons](https://lucide.dev), [Radix UI](https://www.radix-ui.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Build Tool**: [Vite](https://vitejs.dev) & [Nitro](https://nitro.unjs.io)

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── resume.pdf          # Tarun Vignesh Resume
│   ├── robots.txt
│   └── tarun.jpg           # Profile Photo
├── src/
│   ├── components/
│   │   └── ui/             # Reusable UI component library
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers
│   ├── routes/
│   │   ├── __root.tsx      # Root route layout & head meta
│   │   └── index.tsx       # Main portfolio page
│   ├── router.tsx          # Router configuration
│   ├── server.ts          # Server entry for SSR
│   ├── start.ts           # TanStack Start instance
│   └── styles.css         # Global design tokens & Tailwind CSS
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18.0.0 or higher)
- [npm](https://www.npmjs.com) (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Tarun-vignesh/Portfolio.git

# Navigate into directory
cd Portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port specified by Vite) in your browser.

### Building for Production

```bash
npm run build
```

## 🌐 Deploy to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository (`Portfolio`).
4. Framework preset will automatically detect Vite / TanStack Start.
5. Click **Deploy**.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
