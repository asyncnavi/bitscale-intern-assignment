import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import PricingSection from "./component/pricing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PricingSection />
  </StrictMode>,
);
