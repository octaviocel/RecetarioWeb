import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/public/Header/Header";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
