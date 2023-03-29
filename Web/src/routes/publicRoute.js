import React from "react";
import { createRoutesFromElements, Navigate, Route } from "react-router-dom";

import PublicLayout from "../layout/PublicLayout";

import Home from "../pages/public/Home";

export const publicRoutes = createRoutesFromElements(
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);
