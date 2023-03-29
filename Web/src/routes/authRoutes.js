import { Navigate } from "react-router-dom";

import PrivateLayout from "../layout/PrivateLayout";

import Home from "../pages/public/Home";
import Communities from "../pages/private/Communities";
import Categories from "../pages/private/Categories";
import Recipes from "../pages/private/Recipes";

export const createRoutes = (rol) => {
  let routes = [
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        ,
        {
          path: "recipes",
          element: <Recipes />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "communities",
          element: <Communities />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  return routes;
};
