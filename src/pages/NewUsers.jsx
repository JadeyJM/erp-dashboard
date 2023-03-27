import React from 'react'
import { useState } from 'react'
import { Header } from '../components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NewUsers = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    contact: "",
    email: "",
    password: "",
    repeatpassword: "",
    role: "",
    date: new Date().toString(),
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f3e2bb04-314f-4ad6-b388-ad2df289d87d/tabs/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <>
<form onSubmit={handleSubmit()}>
   <div className=" flex items-end ml-12 mr-12 mb-12 mt-20 relative" >
  
    <button type="submit" className=" absolute right-0 border-2 p-3 bg-main-dark-bg rounded-xl text-sm text-white mt-4" > Submit
    </button>

    </div> 

<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
    <div className=" flex items-end ml-12 mr-12 mb-12 mt-20 relative">
   
 <Header title="Add New User"/>
 
</div>


        <div className="mb-6">
          <label htmlFor="text"  className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input  type="email" name="email"  className="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required defaultValue={data.email}
          onChange={handleChange}
        />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className=" form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="text" name="password" className=" form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required defaultValue={data.password}
          onChange={handleChange}
    />
        </div>
        <div className="mb-6">
          <label htmlFor="repeat-password" className=" form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
          <input  name="repeatpassword" type="text"  className="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required defaultValue={data.repeatpassword}
          onChange={handleChange}
      />
        </div>
        <div className="w-full mt-8 md:w-1/3 px-3 mb-6 md:mb-0">
            <label type="text" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contact">
             Contact ID
            </label>
            <input type="text" name="contact" className="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  defaultValue={data.contact}
          onChange={handleChange}/>
        
          </div>
          <div className="w-full mt-8 md:w-1/3 px-3 mb-6 md:mb-0">
            <label type="text" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-role" >
             Role
            </label>
            <input type="text" name="role" className="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  defaultValue={data.role}
          onChange={handleChange}/>
        
          </div>
          <div className="text-center">
  
      </div>

      </div> 
      </form>
</>
  )
}

export default NewUsers