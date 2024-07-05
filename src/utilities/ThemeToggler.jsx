
import React, { forwardRef, useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiSun } from "react-icons/ci";

// eslint-disable-next-line react/display-name
const ThemeToggler = forwardRef(
   (props, ref ) => {
      const [isDarkTheme, setIsDarkTheme] = useState(
         () => localStorage.getItem('theme') === 'dark'
      );
   
      useEffect(()=>{
         if(isDarkTheme){
            document.body.classList.add('darkTheme')
         }else{
            document.body.classList.remove("darkTheme")
         }
      },[isDarkTheme])
   
      const toggleTheme =() =>{
         setIsDarkTheme(!isDarkTheme)
         localStorage.setItem("theme" , isDarkTheme?'dark':'light')
      }
      return (
			<button  className={`absolute top-[1rem] bg-[#eeeeee] rounded-full transition-all ease-in duration-200 self-end`} onClick={toggleTheme}>
				{isDarkTheme ? (
               <div ref={ref} className="relative" >
                  <CiSun className="p-2 w-12 h-12 " />
               </div>
				) : (
               <div ref={ref} className="relative"  >
                  <CiDark className="p-2 w-12 h-12 " />
               </div>
				)}
			</button>
         // <button ref={ref} className={`${props.className}`} onClick={toggleTheme}>
         //    {isDarkTheme ? <CiSun  className="p-2 w-12 h-12  " /> : <CiDark className="p-2 w-12 h-12 "/>}
         // </button>
		);
   }
) 

export default ThemeToggler;
