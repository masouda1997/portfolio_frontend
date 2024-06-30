import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = () => {
  let cursorSize = 20 // to centerized div with cursor

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
		mouse.x.set(clientX - cursorSize/2);
		mouse.y.set(clientY - cursorSize/2);
	};

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		return () => {window.removeEventListener("mousemove", manageMouseMove)};
	});

	return (
		<motion.div
    style={{ top: smoothMouse.y, left: smoothMouse.x }}
			className={`w-7 h-7 border border-[var(--primary-color)] fixed rounded-full flex justify-center items-center`}
		>
			<div
        style={{ top: smoothMouse.y, left: smoothMouse.x }}
				className={`w-3 h-3 bg-[var(--primary-color)] rounded-full fixed `}
			></div>
		</motion.div>
	);
};

export default StickyCursor;
