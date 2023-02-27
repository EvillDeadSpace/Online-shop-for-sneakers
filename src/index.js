import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from 'react-router-dom';
import About from './components/SHOP/About';
import Contact from './components/SHOP/Contact';
import Home from './components/SHOP/Home';
import Services from './components/SHOP/Services';
import Pricing from './components/SHOP/Pricing';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },

  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "Pricing",
    element: <Pricing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <RouterProvider router={router} />

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

