import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {HiX} from 'react-icons/hi';


import  {links}  from '../data/dummy';
import { Item } from '@syncfusion/ej2/splitbuttons';
import {useStateContext} from '../contexts/ContextProvider';
import { actionBegin } from '@syncfusion/ej2-react-grids';

const Sidebar = () => {
  const {activeMenu, setActiveMenu } = useStateContext();
  // const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  // const handleCloseSideBar = () => {
  //   if (activeMenu !== undefined && screenSize <= 900) {
  //     setActiveMenu(false);
  //   }
  // };

   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black  m-2';
 
  return (
    <div className="h-screen  bg-main-dark-bg  md:overflow-hidden 
    overflow-auto md:hover:overflow-auto pb-10">
     {activeMenu && (<>
     <div className="flex justify-between items-center">
    
     {/* <Link to="/" onClick={() => {} } className="items-center"></Link>    //empty call back function to menu link*/}
    { /*  USER PHOTO AND USERNAME PLUS PERMISSION ROLE IN THE SIDEMENU*/}
    {/* <Link to="/" onClick={() => {} } className="items-center gap-3 ml-2 flex top-0">
   <img className="rounded-full h-7 w-7" src='./data/avatar.jpg' alt="Avatar1"/>
     </Link> */}
     
     <Link to="/" onClick={() => setActiveMenu(false) } className="tems-center text-white gap-3 ml-7 mt-20 flex text-xl font-extrabold tracking-tight">
      <span>HOME</span>
     </Link>
     {/*TO CLOSE THE SIDE BAR */}
<TooltipComponent content="menu"
 position="BottomCenter">
 {/*TO CLOSES THE MENU AND RESETS STATE */} 
<button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !activeMenu)} className="text-3xl  text-white p-3 hover:text-orange-400 mt-4 
block">
  <HiX className="text-white"/>
</button>
</TooltipComponent>

 {/*navigation items: ITEMS ARE PULLED FROM CONST LINKS FROM DUMMY DATA*/}
<div className="mt-10">
   {links.map((item) => (
<div key={item.title}>
  <p className="text-gray-400 text-white m3 
mt-4 uppercase">{item.title}</p>
{item.links.map((link) => (
  <NavLink 
  to={`/${link.name}`}
  key={link.name}
  onClick={() => {}}
  className={({isActive}) =>
  isActive ? activeLink : normalLink}
  >
     <span className='uppercase text-white hover:text-orange-500'>{link.name}</span>
  </NavLink>
 

))}
</div>
))}
</div>
     </div>
     </>)}
    </div>
  )
}

export default Sidebar;