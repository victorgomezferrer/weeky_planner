
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import loaderRecipes from "../pages/loaders/loaderRecipes";


const ComponentRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: loaderRecipes

                },

                {
                    path: "*",
                    element: <><h1>hola estas en el error</h1></>,
                },
            ],
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default ComponentRoutes
