import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";
import BottomNav from "../Shared/BottomNav";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNav />
      <Fotter />
    </>
  );
};

export default RootLayout;
