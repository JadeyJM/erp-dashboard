//import dependencies
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
//import css
import './App.css';
//import components
import {Navbar, Sidebar} from './components';
//import pages
import {useStateContext} from './contexts/ContextProvider';
import Bar from './pages';
import Home from './pages/';
import Taskmanagement from './pages/';
import Leads from './pages/';
import Project from './pages/';
import Calendar from './pages/';
import Line from './pages';
import Area from './pages';
import ColorPicker from './pages';
import Editor from './pages';

function App() {
    const {activeMenu, setMenuActive} = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">

                    {activeMenu
                        ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                                <Sidebar/>
                            </div>
                        )
                        : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar/>
                            </div>
                        )}
                    <div
                        className={activeMenu
                        ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full '
                        : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 '}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar/>
                        </div>
                        <div>
                            <Routes>
                                {/* Dashboard*/}
                                <Route path="/" element={< Home />}/> {/* Leads*/}
                                <Route path="leads" element={< Leads />}/> {/* Task Management*/}
                                <Route path="/taskmanagement" element={< Taskmanagement />}/> {/* Project Management*/}
                                <Route path="/project" element={< Project />}/> {/* Calendar*/}
                                <Route path="/calendar" element={< Calendar />}/> {/* Bio/ editor*/}
                                <Route path="/editor" element={< Editor />}/> {/* color-picker*/}
                                <Route path="/color-picker" element={< ColorPicker />}/> {/* chart*/}
                                <Route path="/Line" element={< Line />}/>
                                <Route path="/Bar" element={< Bar />}/>
                                <Route path="/Area" element={< Area />}/>
                            </Routes>
                        </div>

                    </div>

                </div>
            </BrowserRouter>
        </div>

    )
}

export default App