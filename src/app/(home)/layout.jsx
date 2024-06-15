'use client'
import Link from "next/link";
import React, { useState } from "react";

const Layout = ({children}) => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
	return (
      <div className="bg-[#111] flex flex-row-reverse w-screen overflow-hidden ">
         
         <main className="flex-grow">{children}</main>
      </div>
	);
};

export default Layout;

