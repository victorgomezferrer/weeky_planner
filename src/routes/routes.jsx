
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import loaderRandomRecipes from "../pages/loaders/loaderRandomRecipes";
import SearchRecipes from "../pages/SearchRecipes/SearchRecipes";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import WeeklyMenu from "../pages/WeeklyMenu/WeeklyMenu";


const ComponentRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: loaderRandomRecipes
                },

                {
                    path: "/search",
                    element: <SearchRecipes></SearchRecipes>,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/weekly_menu",
                    element: <WeeklyMenu/>,
                },
                {
                    path: "*",
                    element: <NotFoundPage />,
                },
            ],
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default ComponentRoutes
