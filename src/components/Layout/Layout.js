import React from "react";
  import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div>
           <Header></Header>

          <div className="bg-primary-white mt-[2px] h-screen z-20">
              <div className="pl-40 pr-40">
                  <Outlet></Outlet>
              </div>

          </div>

      </div>
  );

}

export default Layout;
