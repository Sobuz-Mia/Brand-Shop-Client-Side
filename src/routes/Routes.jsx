import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddProducts from "../components/AddProducts/AddProducts";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Products from "../components/Products/Products";
import ErrorProductPage from "../components/Products/ErrorProductPage";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MyCarts from "../pages/MyCarts";
import UpdateProduct from "../components/UpdateProduct";

const CreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCarts />
          </PrivateRoute>
        ),
      },
      {
        path:'/update/:id',
        element:<UpdateProduct/>
      },
      {
        path: "/error",
        element: <ErrorProductPage />,
      },
    ],
  },
]);

export default CreateRoute;
