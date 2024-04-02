
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import loaderRandomRecipes from "../pages/loaders/loaderRandomRecipes";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import WeeklyMenu from "../pages/WeeklyMenu/WeeklyMenu";
import UseTerms from "../pages/UseTerms/UseTerms";
import PolicityPage from "../pages/PolicityPage/PolicityPage";
import LegalInfoPage from "../pages/LegalInfoPage/LegalInfoPage";
import Cookies from "../pages/CookiesPage/CookiesPage";

import SignInPage from "../pages/SignInPage/SingInPage";
import LoginPage from '../pages/LoginPage/LoginPage'
import SuscriptionPage from '../pages/SuscriptionPage/SuscriptionPage'
import AddRecipePage from '../pages/AddRecipesPage/AddRecipesPage'


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
                    path: "/recipes",
                    element: <AddRecipePage/>,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/weekly_menu",
                    element: <WeeklyMenu />,
                },
                {
                    path: "/use_terms",
                    element: <UseTerms />,
                },
                {
                    path: "/privacity",
                    element: <PolicityPage />,
                },
                {
                    path: "/legal_info",
                    element: <LegalInfoPage />,
                },
                {
                    path: "/cookies",
                    element: <Cookies />,
                },
                {
                    path: "*",
                    element: <NotFoundPage />,
                },
                {
                    path: "/price",
                    element: <SuscriptionPage/>,
                },
                {
                    path: "/login",
                    element: <LoginPage />,
                },
                {
                    path: "/signup",
                    element: <SignInPage />,
                },
            ],
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default ComponentRoutes
