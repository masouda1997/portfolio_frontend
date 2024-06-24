import React, { useEffect, useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";


const ColorSwitcher = ({color , setIsClose , isClose}) => {
   const [primaryColor , setPrimaryColor] = useState(color)

   const handleColorChange = (event)=>{
      event.stopPropagation()
      const regex = /#([0-9a-fA-F]{6})/;
      const match = event.target.parentNode.className.baseVal?.match(regex);
      if(match){
         setPrimaryColor(match[0])
      }else{
         setPrimaryColor('#44d62c')
      }      
   }

   // useEffect(() => {
   //   localStorage.setItem("primary-color" , primaryColor)
   // }, [primaryColor]);
   
   useEffect(()=>{
      document.documentElement.style.setProperty('--primary-color' , primaryColor)
   },[primaryColor])


   return (
		<div className="color-switcher absolute left-0 top-1/4 z-50 bg-white px-4 pb-4 rounded-r-lg overflow-hidden">
			<div className="relative">
				<button
					className="absolute top-1 -right-3 !bg-white !text-secondary"
					onClick={() => setIsClose(!isClose)}
				>
					<IoCloseOutline />
				</button>
				<h2 className="text-secondary text-center text-[#eee] font-semibold pt-1 colorSwitcher  ">
            <span style={{'--i':'1'}} >C</span>
            <span style={{'--i':'2'}} >o</span>
            <span style={{'--i':'3'}} >l</span>
            <span style={{'--i':'4'}} >o</span>
            <span style={{'--i':'5'}} >r</span>
            <span style={{'--i':'6'}} >-</span>
            <span style={{'--i':'7'}} >S</span>
            <span style={{'--i':'8'}} >w</span>
            <span style={{'--i':'9'}} >i</span>
            <span style={{'--i':'10'}} >t</span>
            <span style={{'--i':'11'}} >c</span>
            <span style={{'--i':'12'}} >h</span>
            <span style={{'--i':'13'}} >e</span>
            <span style={{'--i':'14'}} >r</span>
            </h2>
				<div className=" separatorLine "></div>
				<div
					onClick={(event) => handleColorChange(event)}
					className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-2 "
				>
					<BsDropletFill className="text-[#44d62c] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#ffb400] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#fa5b0f] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#f72b1c] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#ff0059] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#8a2be2] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#2731fa] text-2xl hover:animate-drip" />
					<BsDropletFill className="text-[#00d5ff] text-2xl hover:animate-drip" />
				</div>
			</div>
		</div>
	);
};

export default ColorSwitcher;
