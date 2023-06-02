import React from "react";
import template from "./RectangleButton.jsx";

//w-32 h-8
function SmallButton(props) {
  if (props.hover == "true") {
     return (
         <div className>
             <button className= {`
                 w-1 h-1 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-sm
                 hover:transition-all ease-in duration-300 hover:bg-red-500 hover:text-white hover:w-32 hover:h-8`}>
             {props.text}
             </button>
         </div>
     );
 }

 return (
     <div className>
         <button className={`
             w-24 h-8 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-sm
         `}>
             {props.text}
         </button>
     </div>
 );
}


//w-40   h-8
function MediumButton(props) {
  if (props.hover == "true") {
      return (
          <div>
              <button className="
                  w-28 h-1 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-base
                  hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-40 hover:h-8
              ">
                  {props.text}
              </button>
          </div>

      );
  }
  return (
      <div>
          <button className="
              w-40 h-8 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-base
          ">
              {props.text}
          </button>
      </div>
  );
}

//w-64 h-10
function LargeButton(props) {
  if (props.hover == "true") {
    return (
        <div className>
            <button className="
                w-32 h-8 flex items-center break-keep justify-center rounded-full bg-transparent font-semibold text-red-500 text-lg
                hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-64 hover:h-10
            ">
                {props.text}
            </button>
        </div>
    );
}
return (
    <div className>
        <button className="
            w-64 h-10 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-lg
        ">
        {props.text}
        </button>
    </div>
);
}

//w-72 h-12
function XLargeButton(props) {
  if (props.hover == "true") {
    return (
        <button className="
            w-32 h-8 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-lg
            hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-72 hover:h-12
        ">
        {props.text}
        </button>
    );
  }
    return (
        <button className="
            w-72 h-12 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-lg
        ">
        {props.text}
        </button>
    );
  
}


export {
  SmallButton,
  MediumButton,
  LargeButton,
  XLargeButton
}
//export default RectangleButton;
