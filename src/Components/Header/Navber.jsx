import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import '../AllApps/Apps.jsx';
import "src/index.css"




const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <nav
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/Apps'>App</NavLink>
        <NavLink to='/Installation'>Instalation</NavLink>
      </nav>
    </div>
        <Link to='/'><div className="flex items-center gap-2">
            <img className="h-[40px] w-[40px]" src="https://i.ibb.co.com/jZ8t0KmW/logo.png" alt="" />
            <h1 className="text-[20px] font-700 text-[#632ee3]">HERO.IO</h1>
        </div></Link>


  </div>
  <div className="navbar-center hidden lg:flex">
    <nav className="menu menu-horizontal px-1 gap-4 text-[16px] font-500">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Apps'>App</NavLink>
      <NavLink to='/Installation'>Installation</NavLink>
    </nav>
  </div>
  <div className="navbar-end">
        <a href="https://github.com/sabbirhosain-h?tab=overview&from=2025-09-01&to=2025-09-30">
        <div>
            <button className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white"><BsGithub />  Contribute</button>   
        </div>
        
        </a>
  </div>
</div>
    );
}
export default Navber;