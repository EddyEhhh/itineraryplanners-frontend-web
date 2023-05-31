import './App.css'
import React from 'react'
import AddButton from "./components/add-button";
import CircleButton from "./components/new-button/CircleButton";
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg";
function App() {
  return (
      <div
          class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col`}
      >
        <label class="toggleDarkBtn">
          <input type="checkbox" />
          <span class="slideBtnTg round"></span>
        </label>
        <div class="max-w-sm rounded overflow-hidden bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-900">
          <img
              class="w-full"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
          </div>
        </div>
          <CircleButton colour='bg-red-500' width ='w-20' height='h-20' text='hello'/>
          <CalendarIcon></CalendarIcon>
        </div>
)
}
export default App