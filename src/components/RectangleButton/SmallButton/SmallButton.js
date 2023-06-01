import React    from "react";
import template from "./SmallButton.jsx";

//use this as div
/*
    <div className = "h-8 flex justify-center items-center">
        <SmallButton text= 'Small'/>
    </div>

*/
function SmallButton(props) {
  return (
      <div className>
          <button className=
              "w-1 h-1 flex items-center break-keep justify-center rounded-full bg-transparent font-semibold text-red-500
              hover:transition-all ease-in duration-300 hover:bg-red-500 hover:text-white hover:w-32 hover:h-8
              "> 
          {props.text} 
          </button>
      </div>     
  );
}
export default SmallButton;
