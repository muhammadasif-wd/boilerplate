import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import ReduxProviders from "./redux/provider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="fayrashop-ui-theme">
      <ReduxProviders>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ReduxProviders>
    </ThemeProvider>
  </React.StrictMode>,
);
