import React from "react";


import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

class AppLayout extends React.Component {
  render() {
    return (
      <div className="">
        <Header  />
        <Outlet />
        <Footer />

      </div>
    );
  }
}

export default AppLayout;