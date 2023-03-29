import React from "react";
import { createRoutesFromElements, Navigate, Route } from "react-router-dom";

import PublicLayout from "../layout/PublicLayout";

import Home from "../pages/public/Home";
import Communities from "../pages/public/Communities";

export const publicRoutes = createRoutesFromElements(
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<Home />} />
    <Route path="/communities" element={<Communities />} />
    <Route path="*" element={<Navigate to="/" />} />    
  </Route>
);
