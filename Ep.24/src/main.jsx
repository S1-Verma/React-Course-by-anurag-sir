import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/:country",
        element: <Contact />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
