import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import News from "../Pages/News/News";
import Login from "../Pages/Shared/login/Login";
import Registration from "../Pages/registration/Registration";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Profile from "../Others/profile/Profile";

export const routes=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main> ,
       children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('http://localhost:5000/news')

            },
            {
                path:'/catagory/:id',
                element: <PrivateRoutes><Catagory></Catagory></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)

            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
            {
                path:'/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }

       ]
    }
])