import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Calendar } from '@syncfusion/ej2-react-calendars';
import { Kanban } from '@syncfusion/ej2-react-kanban';
import logo from '../data/logo.jpg';


const Sidebar = () => {
 
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5  text-md text-gray-700 dark:text-gray-200 dark:hover:text-blackm m-2';

  return (
    <div className="ml-3 bg-black h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 w-5/6 pt-8 ml-2 mt-6 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <img src={logo} alt="Logo" />;
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl text-white  p-3 hover:text-orange-500 mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-white dark:text-white ml-8 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                              
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="uppercase bold text-white hover:text-orange-500 hover:bg-none">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
           
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;