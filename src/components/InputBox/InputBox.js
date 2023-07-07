import React from "react";


// <div className = "flex justify-center items-center">
//     <InputBox title = "" placeholder = "" type = "" width = ""
//               warning = ""/>
// </div>
function InputBox(props) {
  
    return (
      <div>
          <span className="block text-base font-medium text-slate-700">
          {props.title}
          </span>

          <input
            placeholder = {props.placeholder}
            type = {props.type}
            onChange = {props.onChange}
            name = {props.name}
            className= {`peer w-[300px] md:w-[400px]  h-12 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-base  
            placeholder-slate-500 placeholder-opacity-50 placeholder:font-light
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500    
            invalid:border-red-500 invalid:text-red-600 invalid:ring-red-500 invalid:ring-1`}
          />

          <p className = "invisible peer-invalid:visible text-red-500 text-sm font-normal">
            {props.warning}
          </p>
      </div>
    ); 
}

//Colour change when it is valid
//peer-valid:visible valid:border-green-500 valid:ring-green-500 valid:ring-1

// disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
// invalid:border-pink-500 invalid:text-pink-600
// focus:invalid:border-pink-500 focus:invalid:ring-pink-500
export default InputBox;
