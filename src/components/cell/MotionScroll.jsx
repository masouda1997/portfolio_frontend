import React from "react";
import { motion } from "framer-motion";


const MotionScroll = ({id , scrollDelay}) => {
   const handleClick = (e) => {
		e.preventDefault();
		const target = document.getElementById(id);
      console.log(target);
      
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });

			// Override the smooth scroll timing to 200ms
			const scrollInterval = setTimeout(() => {
				window.scrollTo({
					top: target.offsetTop,
					behavior: "auto", // instantly reaches the target after the delay
				});
				clearTimeout(scrollInterval);
			}, scrollDelay);
		}
	};
	return (
		<div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center ">
			<a href={`#${id}`} onClick={handleClick} >
				<div className="w-[30px] h-[50px] rounded-3xl border-[1px] border-[var(--primary-color)] flex justify-center items-start ">
					<motion.dev
						animate={{
							y: [5, 25, 5],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-4 h-4 rounded-full bg-[var(--primary-color)] mb-5 "
					/>
				</div>
			</a>
		</div>
	);
};

export default MotionScroll;
