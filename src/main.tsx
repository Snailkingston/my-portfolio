  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  // Initialize i18n (internationalization)
  import "./i18n.ts";

  createRoot(document.getElementById("root")!).render(<App />);
  