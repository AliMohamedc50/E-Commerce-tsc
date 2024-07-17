import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@layouts/MainLayout/MainLayout";

import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Home from "@pages/Home";
import Products from "@pages/Products";


const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
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
            path: "products:prefix",
            element: <Products/>
        },
        {
            path: "about-us",
            element: <AboutUs/>
        }
    ]
}])

const AppRouter = () => {
    return <RouterProvider router={router} />;
}

export default AppRouter;