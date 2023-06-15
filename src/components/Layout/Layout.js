import React from "react";
  import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div className>

          <div className="
              bg-primary-white mt-[2px] h-full mb-[10px] z-0">
              <div className="lg:pl-40 lg:pr-40
                               sm:pl-0 sm:pr-0
                               ">
                  <Outlet></Outlet>
              </div>
          </div>

      </div>
  );

}

export default Layout;
