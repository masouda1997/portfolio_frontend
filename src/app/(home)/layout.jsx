'use client'
import ThemeToggler from "@/utilities/ThemeToggler";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";


const Layout = ({children}) => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))

   useLayoutEffect(()=>{
      const preferredTheme = window.matchMedia('(perfers-color-scheme:dark)').matches?"dark":'light'
      const storedTheme = localStorage.getItem('theme');
      const initialTheme = storedTheme || preferredTheme;
      localStorage.setItem('theme', initialTheme)
      document.documentElement.classList.add(initialTheme);
      return () => {
         document.documentElement.classList.remove(initialTheme);
      };
   },[])

	return (
      <div className="darktheme flex flex-row-reverse w-screen overflow-hidden ">
         <header className=" flex justify-center items-center flex-col gap-3 p-5 relative">
            <ThemeToggler className="absolute top-[2rem] bg-gray-600 "/>
            <Link style={{'border':`${primaryColor} 1px solid`}} className="p-2 rounded-full w-16 h-16 flex items-center justify-center" href={"#"}>home</Link>
            <Link style={{'border':`${primaryColor} 1px solid`}} className="p-2 rounded-full w-16 h-16 flex items-center justify-center" href={"#"}>about</Link>
            <Link style={{'border':`${primaryColor} 1px solid`}} className="p-2 rounded-full w-16 h-16 flex items-center justify-center" href={"#"}>portfolio</Link>
            <Link style={{'border':`${primaryColor} 1px solid`}} className="p-2 rounded-full w-16 h-16 flex items-center justify-center" href={"#"}>contact</Link>
         </header>
         <main className="flex-grow">{children}</main>
      </div>
	);
};

export default Layout;

