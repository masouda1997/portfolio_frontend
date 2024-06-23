import React, { useEffect, useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";


const ColorSwitcher = ({color , setIsClose , isClose}) => {
   const [primaryColor , setPrimaryColor] = useState(color)

   const handleColorChange = (event)=>{
      const regex = /#([0-9a-fA-F]{6})/;
      const match = event.target.parentNode.className.baseVal.match(regex);
      console.log("@@",match[0]);
      if(match){
         setPrimaryColor(match[0])
      }else{
         setPrimaryColor('#44d62c')
      }      
   }

   useEffect(() => {
     localStorage.setItem("primary-color" , primaryColor)
   }, [primaryColor]);
   

   return (
		<div className="color-switcher absolute left-0 top-1/4 z-50 bg-white px-4 pb-4 rounded-r-lg overflow-hidden">
			<div className="relative">
				<button
					className="absolute top-1 -right-3 !bg-white !text-secondary"
					onClick={() => setIsClose(!isClose)}
				>
					<IoCloseOutline />
				</button>
				<h2 className="text-secondary  text-center   ">Color Switcher</h2>
				<div className=" separatorLine "></div>
				<div
					onClick={(event) => handleColorChange(event)}
					className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-2"
				>
					<BsDropletFill className="text-[#44d62c] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#ffb400] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#fa5b0f] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#f72b1c] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#ff0059] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#8a2be2] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#2731fa] text-2xl hover:text-3xl" />
					<BsDropletFill className="text-[#00d5ff] text-2xl hover:text-3xl" />
				</div>
			</div>
		</div>
	);
};

export default ColorSwitcher;
