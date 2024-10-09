import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";


const MagneticWrapper = ({children}) => {
	// { href="#", text, color, icon }
	const [mousePos , setMousePos] = useState({x:0 , y:0})
	const [isHovered , setIsHovered] = useState(false)

	const handleMouseMove = (e)=>{
		const rect =  e.currentTarget.getBoundingClientRect()
		const x = e.clientX - rect.left - rect.width/2 //get the relative position
		const y = e.clientY - rect.top - rect.height/2
		setMousePos({x,y})
	}
	const handleMouseEnter = ()=>setIsHovered(true)
	const handleMouseLeave = ()=>{
		setIsHovered(false)
		setMousePos({x:0 , y:0})
	}

	return (
		<motion.div /*this div handles mouse events*/
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="relative inline-block"
			style={{
				display: "inline-block",
				position: "relative",
				width: "fit-content",
				height: "fit-content",
			}}
		>  
			<motion.div  /*this div moves based on the mouse position*/
				animate={{
					x:isHovered ? mousePos.x * 0.3 : 0,
					y:isHovered ? mousePos.y * 0.3 : 0,
				}}
				transition={{
					type: "spring",
					stiffness : 300,
					damping:20,
					mass:1
				}}
			> 
				{children}
				
			</motion.div>
		</motion.div>


	);
};

export default MagneticWrapper;

