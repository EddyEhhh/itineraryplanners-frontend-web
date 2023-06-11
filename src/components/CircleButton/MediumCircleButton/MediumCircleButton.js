import React from "react";
import template from "./MediumCircleButton.jsx";
import { XMarkIcon } from "@heroicons/react/20/solid";

function MediumCircleButton(props) {
  return (
    <div>
      <button
        className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F3F4F5]"
        data-modal-hide={props.dataModalHide}
        onClick={props.onButtonClick}
      >
        <XMarkIcon className="h-6 w-6 text-[#576673]"></XMarkIcon>
      </button>
    </div>
  );
}

export default MediumCircleButton;
