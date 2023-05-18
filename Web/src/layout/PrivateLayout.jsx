import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "@app/components/Footer";
import Header from "@app/components/Private/Home/Header";

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateLayout;
