// index.js

/**
 * The main entry point for the React application.
 * This file is the first to be executed by the browser,
 * responsible for mounting the root component.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

// 1. Locate the actual DOM node in the HTML structure using its ID ('#root').
// 2. Create a React root and mount the React component tree (App) onto this DOM node.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
