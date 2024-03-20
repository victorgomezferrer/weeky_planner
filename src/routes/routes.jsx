
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../layout/layout";

const ComponentRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                {
                    path: "/",
                    element: <><h1>holaooo</h1></>,
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
