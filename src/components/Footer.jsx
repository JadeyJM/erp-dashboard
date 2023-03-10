import React from 'react';
import logo from '../data/logo.jpg';


const Footer = () => (
  <div className="mt-24 bg-black w-full pt-10 pb-1 ">
            <div className="items-center pl-30">
            <img src={logo} alt="Logo" className='w-3/6  mtitems-center ml-60'/>;
            </div>
    <p className=" text-white text-center ml-20 mt-10 mb-10 mr-20">
      © 2023 - Lilith Agency Workspace 
    </p>
  </div>
);

export default Footer;