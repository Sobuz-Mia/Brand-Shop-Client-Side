import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";



const CreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
       
    }
])

export default CreateRoute