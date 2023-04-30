import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/register/Register.jsx';
import RegisterEP from './components/registerEP/registerEP';

const router = createBrowserRouter([
  {
   path:"/",
   element:<Main></Main>,
   children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/registerep",
      element:<RegisterEP></RegisterEP>
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
