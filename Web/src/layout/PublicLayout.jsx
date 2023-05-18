import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "@app/components/Footer/";
import Header from "@app/components/Public/Header";

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
