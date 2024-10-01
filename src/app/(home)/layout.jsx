'use client'
import ColorSwitcher from "@/components/ColorSwitcher";
import Menu from "@/components/Menu";
import StickyCursor from "@/components/StickyCursor";
import ThemeToggler from "@/utilities/ThemeToggler";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { Suspense } from "react";



const Layout = ({children}) => {
	const [isDark, setIsDark] = useState(null)
	const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
	const [isColorSwitchActive , setIsColorSwitchActive] = useState(false)
	const [isWaveVisible , setIsWaveVisible] = useState(false)
	const stickyElement = useRef(null)
	// const router = useRouter()
	const pathname = usePathname();


	useEffect(()=>{
		localStorage.setItem('primary-color' , '#44d62c')
		setPrimaryColor('#44d62c')
	},[])
   
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

	const handleRouteChange = (url)=>{
		setIsWaveVisible(true)
		setTimeout(()=>{
			setIsWaveVisible(false)
		} , 1000)
	}
	// Detect route changes using useEffect and pathname
	useEffect(()=>{
		handleRouteChange()
	} , [pathname])


	return (
		<div className=" flex flex-row-reverse w-screen h-screen relative ">
			<header className="absolute z-30 justify-center items-end flex flex-col gap-3 p-5 h-screen">
				<ThemeToggler
					ref={stickyElement}
					isDark={isDark}
					setIsDark={setIsDark}
				/>
				<Menu ref={stickyElement} />
			</header>

			{!isColorSwitchActive ? (
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
					<IoSettings className="animate-orbit text-xl text-[var(--primary-color)]" />
				</button>
			)}

			<StickyCursor stickyElement={stickyElement} />
			{isWaveVisible && <div className='wave'></div> } 
				{!isWaveVisible && (
					<main className="basis-10/12 flex-grow">
						{" "}
						{React.Children.map(children, (child) =>
							React.isValidElement(child)
								? React.cloneElement(child, { stickyElement })
								: child
						)}
					</main>
				)}

		</div>
	);
};

export default Layout;

