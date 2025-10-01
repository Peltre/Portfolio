"use client";

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
// Navbar component file, used to navigate through the portfolio
// Last modified 01/10/2025 at 2:52pm

const Navbar = () => {
    const router = useRouter();

  return (
    <div className='navbar bg-slate-400 shadow-md sticky top-0 z-50'>
      <div className='navbar-start'>    

      </div>
      <div className='navbar-center flex items-center justify-between'>
        <button className='linkClassNavBar' onClick={() => router.push("/")}> HOME </button>
        <button className='linkClassNavBar' onClick={() => router.push("/skills")}> SKILLS </button>
        <button className='linkClassNavBar' onClick={() => router.push("/projects")}> PROJECTS </button>
        <button className='linkClassNavBar' onClick={() => router.push("/contact")}> CONTACT </button>
      </div>
      <div className='navbar-end'>

      </div>
    </div>
  )
}

export default Navbar
