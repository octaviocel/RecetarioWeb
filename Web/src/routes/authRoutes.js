import { Navigate } from "react-router-dom";

import PrivateLayout from "../layout/PrivateLayout";

import Home from "../pages/public/Home";

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
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  return routes;
};
