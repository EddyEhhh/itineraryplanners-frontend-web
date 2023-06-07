import React from "react";
import {useNavigate} from "react-router-dom";
function SmallButton(props) {
    let colour = `${props.colour}`;
    const navigate = useNavigate();
    return (
         <div className>
             <button className=
                 {` flex items-center justify-center rounded-full text-sm 
                    ${props.hover === "true" ? 'w-1 h-1 bg-transparent font-semibold text-red-500 ' +
                     `hover:transition-all ease-in duration-300 hover:bg-${colour} hover:text-white hover:w-32 hover:h-8`
                     : `w-32 h-8 bg-red-500 text-white ${props.disabled === "true" ? 'opacity-50' : ''} 
                    `} 
                `}
                onClick={ () => navigate(`${props.route}`) } >
             {props.text}
             </button>
         </div>
     );
}
//w-40   h-8
function MediumButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
      return (
          <div>
              <button className=
                  {` flex items-center justify-center rounded-full font-semibold text-base
                      ${props.hover === "true" ? `w-28 h-1 bg-transparent text-red-500 
                      hover:transition-all ease-in duration-200 hover:bg-${colour} hover:text-white hover:w-40 hover:h-8` 
                      : `w-40 h-8 text-white bg-${colour} ${props.disabled === "true" ? `opacity-50` : ''}
                      `}
                  `}
              onClick={() => navigate(`${props.route}`) }>
                  {props.text}
              </button>
          </div>

      );
}

//w-64 h-10
function LargeButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
    return (
        <div className>
            <button className=
                {`flex items-center justify-center rounded-full text-lg font-semibold 
                    ${props.hover === "true" ? `w-32 h-8 bg-transparent text-red-500 
                    hover:transition-all ease-in duration-200 hover:bg-${colour} hover:text-white hover:w-64 hover:h-10` 
                    : `text-white w-64 h-8 bg-${colour} ${props.disabled === "true" ? `opacity-50` : ``}
                    `}
                `}
            onClick={() => navigate(`${props.route}`) }>
                {props.text}
            </button>
        </div>
    );
}

//w-72 h-12
function XLargeButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
    return (
        <button className=
            {`flex items-center justify-center rounded-full text-lg font-semibold
                ${props.hover === "true" ? `w-32 h-8  bg-transparent text-red-500
                hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-72 hover:h-12` 
                : `text-white w-72 h-12 bg-${colour} ${props.disabled === "true" ? `opacity-50` : ``}
                `}
            `}
            onClick={() => navigate(`${props.route}`)}>
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
