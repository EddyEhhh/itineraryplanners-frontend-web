import React from "react";

// <div className = "flex justify-center items-center">
//     <InputBox title = "" placeholder = "" type = "" width = ""
//               warning = ""/>
// </div>
function InputBoxWithIcon({title, placeholder, type, width, warning, icon, value, onChange, onFocus}) {
  return (
    <div>
      <span className="block text-base font-medium text-slate-700">
        {title}
      </span>
      <label class="relative block">
          {/*<span className="absolute inset-y-0 left-0 flex items-center pl-2"*/}
          {/*>{icon}</span>*/}
          <div  className="absolute inset-y-0 left-0 flex items-center pl-2">
              {icon}
          </div>

          <input
          value = {value}
          onChange= {onChange}
          onFocus = {onFocus}
            placeholder={placeholder}
            type={type}
            className={`peer w-[300px] md:w-[400px] h-12 mt-1 block px-3 py-2 pl-10 bg-white border border-slate-300 rounded-md text-base shadow-sm
                placeholder-slate-500 placeholder-opacity-75
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-red-500 invalid:text-red-600 invalid:ring-red-500 invalid:ring-1`}
          />
          <p className="invisible peer-invalid:visible text-red-500 text-sm">
            {warning}
          </p>
      </label>
    </div>
  );
}

//Colour change when it is valid
//peer-valid:visible valid:border-green-500 valid:ring-green-500 valid:ring-1

// disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
// invalid:border-pink-500 invalid:text-pink-600
// focus:invalid:border-pink-500 focus:invalid:ring-pink-500
export default InputBoxWithIcon;
