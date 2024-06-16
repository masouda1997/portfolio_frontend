'use client'
import Menu from "@/components/Menu";
import ThemeToggler from "@/utilities/ThemeToggler";
import React, { useLayoutEffect } from "react";


// const menuData =  [
// 		{
// 			id:1,
// 			title: "Home",
// 			link: "/home",
// 		},
// 		{
// 			id:2,
// 			title: "About",
// 			link: "/about",
// 		},
// 		{
// 			id:3,
// 			title: "Portfolio",
// 			link: "/portfolio",
// 		},
// 		{
// 			id:4,
// 			title: "Contact",
// 			link: "/contact",
// 		},
// 	]




const Layout = ({children}) => {
   

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
		<div className=" flex flex-row-reverse w-screen h-screen overflow-hidden ">
			<header className=" absolute z-30 flex justify-center items-end flex-col gap-3 p-5 h-screen ">
				<ThemeToggler className="absolute top-[2rem] bg-[#eeeeee] rounded-full transition-all ease-in duration-200 self-end " />
				<Menu/>
			</header>
			<main className="basis-10/12 flex-grow">{children}</main>
		</div>
	);
};

export default Layout;

