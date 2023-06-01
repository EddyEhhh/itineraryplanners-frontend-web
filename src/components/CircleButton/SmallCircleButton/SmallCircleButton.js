import React    from "react";
import template from "./SmallCircleButton.jsx";
import {XMarkIcon} from '@heroicons/react/20/solid';

function SmallXCircleButton(prop) {
  // let name = prop.icon;
  // name = document.createElement(`${prop.icon}`);
  return (
    <div>
      <button className = "flex justify-center items-center w-8 h-8 rounded-full bg-[#F3F4F5]">
        <XMarkIcon className="h-4 w-4 text-[#576673]"></XMarkIcon>
      </button>
    </div>
  
  );
}
//<XMarkIcon className = "h-5 w-5 text-[#576673] font-semibold"></XMarkIcon>
export default SmallXCircleButton;
