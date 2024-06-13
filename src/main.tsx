import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from "./components/nav";
import routes from "~react-pages";
import "@ns/web/index.css";
import "./index.css";
import { tailspin } from "ldrs";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

tailspin.register();

function App() {
  return (
    <Suspense
      fallback={
        <div className="mt-40 inline-block">
          <l-tailspin size="25" stroke="5" speed="1" color="white"></l-tailspin>
        </div>
      }
    >
      {useRoutes(routes)}
    </Suspense>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
