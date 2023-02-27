//import dependencies 
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
//import css 
import './App.css';
//import components
import { Navbar, Footer, Sidebar } from './components';
//import pages 

import Bar from './pages';
 import Home from './pages/';
 import Taskmanagement from './pages/';
 import Leads from './pages/';
 import Project from './pages/';
 import Calendar from './pages/';
 import Line from './pages';
 import Area from './pages';
 import ColorPicker from './pages';
 
function App() {

const activeMenu= true;

    return (
        <div><BrowserRouter>
        <div className="flex relative dark:bbg-main-dark-bg"> 
        
        <div className="fixed right-4 bottom-4" style={{zindex:'1000'}}></div>
        <TooltipComponent content="Settings" position="Top">
<button>
   <FiSettings className="text-5xl p-3 hover:drop-shadow-xl text-white" style={{background:'blue',
    borderRadius:'50%'}}></FiSettings>
    
</button>
        </TooltipComponent>
        </div><div>
        { activeMenu ?(
<div className="w-72 fixed sidebar"> 
    <Sidebar/>
</div>
        ) : (
            <div className="w-0"> 
  <Sidebar/>
</div>
)}
            <div className={'dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72":"flex-2"}'
            } >
                <div className='fixed md:static bg-main-bg navbar w-full'>
            <Navbar/>
               
            </div>
  
        <div>
        <Routes>
            {/* Dashboard*/}
            <Route path="/" element={<Home/>}/>
              {/* Leads*/}
              <Route path="leads" element={<Leads/>} />
               {/* Task Management*/}
               <Route path="/taskmanagement" element={<Taskmanagement/>}/>
               
              {/* Project Management*/}
              <Route path="/project" element={<Project/>}/>
              {/* Calendar*/}
              <Route path="/calendar" element={<Calendar/>}/>
              {/* Bio/ editor*/}
              <Route path="/editor" element={<Editor/>} />  s
{/* color-picker*/}
<Route path="/color-picker" element={<ColorPicker/>}/>

              {/* chart*/}
              <Route path="/Line" element={<Line/>}/>
              <Route path="/Bar" element={<Bar/>} />
              <Route path="/Area" element={<Area/>}/>
        </Routes>
        </div>
        </div>

        </div>
        </BrowserRouter>
        </div>
       
    )
}

export default App