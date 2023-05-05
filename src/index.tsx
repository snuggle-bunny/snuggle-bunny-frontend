import "styles/index.scss";

import Router from "router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
