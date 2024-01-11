import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './component/UpdateCoffee.jsx';
import AddCoffees from './component/AddCoffees.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
 
  {
    path:"updateCoffee",
    element:<UpdateCoffee></UpdateCoffee>
  },
  {
    path:"addCoffees",
    element:<AddCoffees></AddCoffees>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
