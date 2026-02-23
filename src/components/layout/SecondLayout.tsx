import React from "react";


import { Outlet } from "react-router-dom";
import { MainHeader } from "./MainHeader";




class SecondLayout extends React.Component {
  render() {
    return (
      <div className="">
        <MainHeader/>
        <Outlet />
    

      </div>
    );
  }
}

export default SecondLayout;