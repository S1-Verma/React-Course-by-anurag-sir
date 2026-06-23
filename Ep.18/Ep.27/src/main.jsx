import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home.jsx';
// import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const About = lazy(()=> wait(1000).then(() => import('./components/About.jsx')))

const wait = (time) => {
  return new Promise(rej => {
    setTimeout(() => {
      rej() ;
    }, time);
  })
}


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
