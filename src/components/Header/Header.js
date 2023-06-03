import React    from "react";
import template from "./Header.jsx";
import {XMarkIcon} from '@heroicons/react/20/solid';
import {BellIcon} from '@heroicons/react/20/solid';



function Header() {
  return (
    <div className = "MAIN HEADER w-full h-12 flex items-center justify-between shadow pl-10 pr-10 shadow-base font-semibold text-sm ">
      <div className = "left header flex items-center justify-around h-12 w-72">

        <button className= "mr-4">
          <XMarkIcon className="w-6"></XMarkIcon>
        </button>


        <div className="Home-Box h-11 flex items-center hover:text-[#424242]">
          <div className="absolute h-12 w-12 mr-7 opacity-0 hover:opacity-100
                          transition ease-in duration-100">
            <button className= "relative h-1 w-14 bg-sky-400 -ml-2 mt-11"></button>
          </div>

          <div className = "">
            <button>
              Home
            </button>
          </div>
        </div>

        <div className="Home-Box h-11 flex items-center hover:text-[#424242]">
          <div className="absolute h-12 w-12 mr-7 opacity-0 hover:opacity-100
                          transition ease-in duration-100">
            <button className= "relative h-1 w-16 bg-sky-400 -ml-1 mt-11"></button>
          </div>

          <div className = "">
            <button>
              My Trips
            </button>
          </div>
        </div>

        <div className="Home-Box h-11 flex items-center hover:text-[#424242]">
          <div className="absolute h-12 w-12 mr-7 opacity-0 hover:opacity-100
                          transition ease-in duration-100">
            <button className= "relative h-1 w-16 bg-sky-400 -ml-1 mt-11"></button>
          </div>

          <div className = "">
            <button>
              Calendar
            </button>
          </div>
        </div>

      </div>
  

      <div className = "Center-Header flex items-center justify-end">
        <div className = "Nav-Icon absolute mr-2">
          <button className = "bg-gray-500 rounded-full w-7 h-7 flex items-center justify-center">
            <svg className = "w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </button>
        </div>
     
        <input type="text" placeholder = "Plan your trip" className={`
                 text-sm h-9 rounded-full shadow shadow-outline px-5 w-60
                placeholder-slate-500 placeholder-opacity-75 placeholder:text-center
                focus:outline-none focus:ring-2 focus:border-[#40E0D0]
                `}>
        </input>
      </div>
  


      <div className = "Right-Header flex items-center justify-between h-12 w-72 hover:text-[#424242] ">
        <div className = "Notif-Lang-Box flex items-center justify-between w-14 ml-40 h-12 pl-2">
        <button>
          EN
        </button>
    
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
        </button>
      </div>
        
        <button className = "bg-gray-500 w-10 h-10 rounded-full">
          A
        </button> 

      </div>
    </div>



  );
}

export default Header;