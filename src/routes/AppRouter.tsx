import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@layouts/MainLayout/MainLayout";

import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Home from "@pages/Home";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";


const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "categories",
            element: < Categories/>
        },
        {
            path: "products/:prefix",
            element: <Products/>,
            loader: ({params}) => {
                if(
                    typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)) {
                    throw new Response("bad request", {
                        statusText:"Category not found",
                        status: 400
                    })
                    
                }
                return true
            }
        },
        {
            path: "about-us",
            element: <AboutUs/>
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register/>
        }
    ]
}])

const AppRouter = () => {
    return <RouterProvider router={router} />;
}

export default AppRouter;