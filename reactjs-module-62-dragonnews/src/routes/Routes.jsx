import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Category from "../pages/Home/category/Category";
import Home from "../pages/Home/Home/Home";
import NewsDetail from "../layout/NewsDetail";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/LOgin/Login/Login";
import Register from "../pages/LOgin/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/terms/Terms";

const router=createBrowserRouter([
    {
  path:'/',
  element:<LoginLayout></LoginLayout>,
  children:[
    {
        path:'/',
        element:<Navigate to="/category/0"></Navigate>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/terms',
        element:<Terms></Terms>
    }
  ]
    },
{
path:"category",
element:<Main></Main>,
children:[
    
    {
        path:':id',
        element:<Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
    }
]
},
{
    path:'/news',
    element:<NewsDetail></NewsDetail>,
    children:[
        {
          path:':id',
          element:  <PrivateRoute><News></News></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
}

])

export default router;