import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ only createRoot imported
import { ThemeProvider } from './components/ThemeContext';
import App from './App.tsx';
import './index.css';

// ✅ use createRoot directly (no ReactDOM here)
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
