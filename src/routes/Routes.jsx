import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";



const CreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
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