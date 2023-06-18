import React from "react";
  import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div className>
          <Header></Header>
          <div className="
              bg-primary-white mt-[2px] min-h-screen z-0">
              <div className="lg:pl-40 lg:pr-40
                              pl-5 pr-5
                               ">
                  <Outlet></Outlet>
              </div>
          </div>

      </div>
  );

}

export default Layout;
