import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = ({stickyElement}) => {
  console.log(stickyElement);
  

  const [isHovered , setIsHovered] = useState(false)

  let cursorSize = isHovered?60: 20 // to centerized div with cursor

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
  
  const smoothOptions = {damping:20  , mass:0.5 , stiffness:300 }
  const smoothMouse = {
    x:useSpring(mouse.x ,smoothOptions),
    y:useSpring(mouse.y ,smoothOptions)
  }

	const manageMouseMove = (e) => {
		const { clientX, clientY } = e;
    const {left , top , width , height} = stickyElement.current.getBoundingClientRect()
    const center = {x:left+width/2 , y:top+height/2}
    if(isHovered){
      mouse.x.set(center.x - cursorSize/2)
      mouse.y.set(center.y - cursorSize/2)
    }else{
      mouse.x.set(clientX - cursorSize/2);
      mouse.y.set(clientY - cursorSize/2);
    }
	};

  const manageMouseOver = (e)=>{
    setIsHovered(true)
  }
  const manageMouseLeave = (e)=>{
    setIsHovered(false)
  }

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
    stickyElement?.current.addEventListener("mouseover" , manageMouseOver)
    stickyElement?.current.addEventListener("mouseleave" , manageMouseLeave)
		return () => {
      window.removeEventListener("mousemove", manageMouseMove)
      stickyElement?.current.removeEventListener('mouseover' , manageMouseOver)
      stickyElement?.current.removeEventListener('mouseleave' , manageMouseLeave)
    };
	});

	return (
		<motion.div
      style={{ top: smoothMouse.y, left: smoothMouse.x  , pointerEvents:"none"}}
			className={`w-9 h-9 border border-[var(--primary-color)] fixed rounded-full flex justify-center items-center z-50  `}
      animate={{width:cursorSize , height:cursorSize }}
		>
			<div className={`w-3 h-3 bg-[var(--primary-color)] rounded-full`}></div>
		</motion.div>
	);
};

export default StickyCursor;
