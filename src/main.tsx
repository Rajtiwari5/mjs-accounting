import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const container = document.getElementById("root")!;

if (container.firstElementChild) {
  // Production build: the page HTML was pre-rendered by scripts/prerender.mjs, so attach to it.
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
