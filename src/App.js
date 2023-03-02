import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar } from './components';
//import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import './App.css'; 
import Area  from './pages/charts/Area';
import Bar  from './pages/charts/Bar';
import Line  from './pages/charts/Line';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import { useStateContext } from './contexts/ContextProvider';



const App = () => {
  const {  activeMenu } = useStateContext();



  const newLocal = <Route exact path="./charts/Line" element={<Line />} />;
  return (
    
      <BrowserRouter>
        <div className="flex relative">     
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
           
            <div>
            <h1>test</h1>
         <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                {/* <Route path="/ecommerce" element={(<Ecommerce />)} /> */}

                {/* pages  */}
                {/* <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} /> */}

                {/* apps  */}
                {/* <Route path="/kanban" element={<Kanban />} /> */}
                {/* <Route path="/editor" element={<Editor />} />
              
                <Route path="/color-picker" element={<ColorPicker />} /> */}
  <Route path="/calendar" element={<Calendar />} />
                {/* charts  */}
                {newLocal}
                {/* <Route path="/area" element={<Area />} /> */}
                <Route exact path="/area" element={ < Area />} />
                <Route exact path='/bar' element={ <Bar />} />
                {/* <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}

              </Routes>
     
              </div>

            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
   
  );
};

export default App;