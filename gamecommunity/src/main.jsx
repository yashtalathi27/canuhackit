import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Signup from './components/signup.jsx';
import Home from './components/Home.jsx';
import store from './components/store.js';
import Allgames from './components/allgames.jsx';
// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main layout component
    children: [
      {
        path: '/',
        element: <Home />, // Home page component
      },
      {
        path: '/signup',
        element: <Signup />, // Signup page component
      },
      {
        path: '/allgames',
        element: <Allgames />, // Signup page component
      },
      // You can add more routes here as needed
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
