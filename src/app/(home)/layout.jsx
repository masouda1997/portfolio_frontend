'use client'
import ColorSwitcher from "@/components/ColorSwitcher";
import Menu from "@/components/Menu";
import ThemeToggler from "@/utilities/ThemeToggler";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";


const Layout = ({children}) => {
	const [isDark, setIsDark] = useState(null)
	useEffect(()=>{
		localStorage.setItem('primary-color' , '#44d62c')
		setPrimaryColor('#44d62c')
	},[])
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

   const [isColorSwitchActive , setIsColorSwitchActive] = useState(false)

	return (
		<div className=" flex flex-row-reverse w-screen h-screen  ">
			<header className=" absolute z-30 flex justify-center items-end flex-col gap-3 p-5 h-screen ">
				<ThemeToggler isDark={isDark} setIsDark={setIsDark} className="absolute top-[2rem] bg-[#eeeeee] rounded-full transition-all ease-in duration-200 self-end " />
				<Menu />
			</header>

			{isColorSwitchActive ? (
				<ColorSwitcher
					color={primaryColor}
					isClose={isColorSwitchActive}
					setIsClose={setIsColorSwitchActive}
				/>
			) : (
				<button
					onClick={() => setIsColorSwitchActive(!isColorSwitchActive)}
					className="color-switcher absolute left-0 top-1/4 z-50 p-3 rounded-r-md bg-secondary "
				>
               <IoSettings className="animate-orbit  text-white"/>
            </button>
			)}

			<main className="basis-10/12 flex-grow">{children}</main>
		</div>
	);
};

export default Layout;

