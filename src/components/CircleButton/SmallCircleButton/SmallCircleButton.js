import React    from "react";
import {XMarkIcon} from '@heroicons/react/20/solid';
import styles from "./SmallCircleButton.scss";


function SmallCircleButton(props) {
  // let name = prop.icon;
  // name = document.createElement(`${prop.icon}`);
  return (
    <div>
      <button className = "flex justify-center items-center w-8 h-8 rounded-full bg-[#F3F4F5]" {...props.className}
      data-modal-hide={props.dataModalHide}>
        <XMarkIcon className="h-4 w-4 text-[#576673]"></XMarkIcon>
      </button>
    </div>
  
  );
}
//<XMarkIcon className = "h-5 w-5 text-[#576673] font-semibold"></XMarkIcon>
export default SmallCircleButton;
