import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/private/Home/Header";

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
