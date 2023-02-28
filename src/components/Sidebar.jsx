import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import  {links}  from '../data/dummy';
// import useStateContext  from '../contexts/ContextProvider';

const Sidebar = () => {
  // const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  // const handleCloseSideBar = () => {
  //   if (activeMenu !== undefined && screenSize <= 900) {
  //     setActiveMenu(false);
  //   }
  // };

  // const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  // const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
 const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between items-center">
      <div class="space-y-6 md:space-y-10 mt-10">
          <h1 class="font-bold text-4xl text-center md:hidden">
            D<span class="text-teal-600">.</span>
          </h1>
          <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
            Dashwind<span class="text-teal-600">.</span>
          </h1>
          <div id="profile" class="space-y-3">
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Avatar user"
              class="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2
                class="font-medium text-xs md:text-sm text-center text-teal-500"
              >
                Eduard Pantazi
              </h2>
              <p class="text-xs text-gray-500 text-center">Administrator</p>
            </div>
          </div>
      </div>
      </>)}
    </div>
  );
};

export default Sidebar;