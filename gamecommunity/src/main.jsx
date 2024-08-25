import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Signup from './components/signup.jsx';
import Home from './components/Home.jsx';
import store from './components/store.js';
import ErrorPage from './components/ErrorPage.jsx';
import MyAllGames from './components/MyAllGames.jsx';
// Define routes


// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
