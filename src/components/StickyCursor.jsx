import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = ({stickyElement}) => {
  // console.log(stickyElement);
  const [isHovered , setIsHovered] = useState(false)


  let cursorSize = isHovered? 50: 25 // to centerized div with cursor


	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
  const innerMouse = {
    x:useMotionValue(0),
    y:useMotionValue(0)
  }
  

  const smoothOptions = {damping:100  , mass:0.25 , stiffness:600 }
  const innerSmoothOptions = {damping:40 , mass:0.2 , stiffness:600}
  

  const smoothMouse = {
    x:useSpring(mouse.x ,smoothOptions),
    y:useSpring(mouse.y ,smoothOptions)
  }
  const innerSmoothMouse = {
    x: useSpring(innerMouse.x , innerSmoothOptions), 
    y: useSpring(innerMouse.y , innerSmoothOptions)
  }

	const manageMouseMove = (e) => {
		const { clientX, clientY } = e;
    const {left , top , width , height} = stickyElement.current.getBoundingClientRect()
    const center = {x:left+width/2 , y:top+height/2}
    if(isHovered){
      mouse.x.set(center.x - cursorSize/2)
      mouse.y.set(center.y - cursorSize/2)
      innerMouse.x.set(center.x - cursorSize+2.4)
      innerMouse.y.set(center.y - cursorSize+2.4)
    }else{
      mouse.x.set(clientX - cursorSize/2);
      mouse.y.set(clientY - cursorSize/2);
      innerMouse.x.set(clientX - cursorSize-cursorSize+2.4)
      innerMouse.y.set(clientY - cursorSize-cursorSize+2.4)
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
      stickyElement?.current?.removeEventListener('mouseover' , manageMouseOver)
      stickyElement?.current?.removeEventListener('mouseleave' , manageMouseLeave)
    };
	});

	return (
		<>
			<motion.div
				style={{
					top: smoothMouse.y,
					left: smoothMouse.x,
					pointerEvents: "none",
				}}
				className={` w-7 h-7 border border-[var(--primary-color)] fixed rounded-full brightness-75 flex justify-center items-center z-50  `}
				animate={{ width: cursorSize, height: cursorSize }}
			></motion.div>
			<motion.div
				style={{
					x: innerSmoothMouse.x,
					y: innerSmoothMouse.y,
					pointerEvents: "none",
				}}
				className={` absolute top-11 left-11 !w-2 !h-2 bg-[var(--primary-color)] brightness-75 rounded-full z-50`}
			></motion.div>
		</>
	);
};

export default StickyCursor;
