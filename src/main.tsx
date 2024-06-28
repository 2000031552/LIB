import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//import React from 'react';

const rootElement = document.getElementById('root');

// Check if rootElement exists before creating root
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Root element with id "root" not found in the document.');
}
