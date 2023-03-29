import { Navigate } from "react-router-dom";

import PrivateLayout from "../layout/PrivateLayout";

import Home from "../pages/public/Home";
import Communities from "../pages/public/Communities";

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
        {
          path: "/communities",
          element: <Communities />
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
