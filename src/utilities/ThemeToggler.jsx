
import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const ThemeToggler = (props) => {
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
		<button className={`${props.className} !bg-gray-700`} onClick={toggleTheme}>
			{isDarkTheme ? <CiLight /> : <CiDark/>}
		</button>
	);
};

export default ThemeToggler;
