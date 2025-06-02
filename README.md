# Publitas Frontend Code Challenge – Image Slider (Canvas)

This is my solution for the Publitas Frontend Code Challenge.
The goal was to implement an image slider that mimics the behavior shown in the provided example.
The interaction is drag-based and must be rendered in a **single canvas element**.

The final result is a performant, interactive image slider that meets all specified requirements and is easily runnable via a static file server.

## 🧠 Challenge Summary

- Render a slider using a **single HTML canvas element**
- Allow users to **drag** to change between images
- Use **at least 3 images** with **varying dimensions**
- Ensure it works in **latest Chrome, Firefox, or Safari**
- Deliver a **static build folder** that can be run with a simple static file server like `nws`

## ⚙️ Tech Stack

| Technology     | Why I used it                                                                   |
| -------------- | ------------------------------------------------------------------------------- |
| **Vite**       | Super-fast development and build tooling with zero-config setup                 |
| **ReactJS**    | Enables clean, declarative UI logic and state handling                          |
| **TypeScript** | Brings strong typing and better maintainability for the codebase                |
| **KonvaJS**    | Simplifies working with 2D canvas graphics using React bindings (`react-konva`) |

## 🚀 Getting Started

To run the app locally or via static preview, follow the steps below.

### 🧪 Development Mode

```bash
# 1. Load the right version of Node.js (ensure you have nvm installed)
nvm use

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to see the project.

### 📦 Build for Production

```bash
# Create a production build
npm run build
```

This generates a `dist/` folder containing all assets needed for deployment.

### 🌐 Preview Locally with Vite

After building the project, you can preview the production-ready build locally using Vite’s built-in static file server:

```bash
# Preview the production build
npm run build
npm run preview
```

Open your browser at [http://localhost:4173/](http://localhost:4173/) to see the project.

✅ **Tested on:**

- Chrome (latest)

## 🖼️ Images Used

The slider includes 4 images with varying dimensions. You can replace them with any set of your choice, as long as they meet the challenge criteria.

## 📁 Folder Structure (Key Files)

```
.
├── public/             # Static assets (images, etc.)
├── src/                # Main application source code
│   └── components/     # React components using Konva
├── dist/               # Production-ready build (after `npm run build`)
├── index.html          # App entry point
├── vite.config.ts      # Vite configuration
└── README.md           # You're here!
```

## 🙌 Final Notes

This challenge was a great opportunity to mix React's declarative nature with the imperative flexibility of canvas rendering using Konva.
