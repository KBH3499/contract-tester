import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppKitProvider } from "./providers/AppKitProvider";

// Comprehensive error suppression for known @reown/appkit v1.8.14 issues
const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  // Convert all arguments to a single string for checking
  const allArgsString = args.map(arg => {
    if (arg instanceof Error) {
      return arg.message + ' ' + (arg.stack || '');
    }
    return String(arg || '');
  }).join(' ');

  // Suppress SVG attribute errors from @reown/appkit
  if (allArgsString.includes('<svg>') && allArgsString.includes('attribute')) {
    return;
  }

  // Suppress lit-html errors
  if (allArgsString.includes('lit-html') && allArgsString.includes('attribute')) {
    return;
  }

  // Suppress PhGlobe/phosphor-icons errors
  if (allArgsString.includes('PhGlobe') || allArgsString.includes('phosphor-icons')) {
    return;
  }

  originalError.apply(console, args);
};

console.warn = (...args) => {
  const allArgsString = args.map(arg => String(arg || '')).join(' ');

  // Suppress WalletConnect deprecation warnings
  if (allArgsString.includes('walletconnect') || allArgsString.includes('WalletConnect')) {
    return;
  }

  originalWarn.apply(console, args);
};

// Suppress unhandled promise rejections from @reown/appkit
window.addEventListener('unhandledrejection', (event) => {
  const errorMessage = event.reason?.message || '';

  // Suppress "Internal error" from WalletConnect/Reown
  if (errorMessage.includes('Internal error')) {
    event.preventDefault();
    return;
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </React.StrictMode>
);

reportWebVitals();
