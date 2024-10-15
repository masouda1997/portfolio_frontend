import React, { useRef, useState } from "react";
import FloatingCard from "./cell/FloatingCard";
import { motion } from "framer-motion";
import { floatingCard } from "@/constants";




const EmptySpace = () => {

  const containerRef = useRef(null);
  const [showCard , setShowCard] = useState(false)

  return (
   <section className="relative grid h-full w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className=" flex flex-col gap-3 items-center uppercase relative z-0  "> 
			{showCard ?
			 	<span className="text-[10vw] font-black md:text-[50px] text-[#767676]" > caution no gravity exist here !!! </span> :
				<span className="text-[10vw] font-black md:text-[50px] text-[#767676]">the gravity does exist here yet </span>
			}
				
			
			{!showCard && <motion.span
				onClick={()=>setShowCard(true)}   
				// animate={{
				// 	scale: [1, 0.8, 0], // Start at normal size, shrink, and disappear
				// 	opacity: [1, 0.8, 0], // Fade out during the shrink
				// 	y: [0, -30, -50], // Move upwards slightly during suction
				//  }}
				//  transition={{
				// 	duration: 2, // Adjust duration for speed of suction
				// 	repeat: Infinity, // Infinite loop
				// 	ease: "easeInOut", // Smooth easing
				//  }}
					animate={{ opacity: [0.2, 1] }} // Start from low (0.2) to high (1) opacity
					transition={{
						repeat: Infinity, // Loop forever
						repeatType: 'reverse', // Reverse the animation
						duration: 1.5, // Duration of the animation
					}} 
				style={{ color: `var(--primary-color)`,lineHeight: 0.80, }}
				className=" !text-[3vm] ">
			click to vacuum
			</motion.span> }
		 </h2>
     { showCard && <div className="absolute inset-0 z-10" ref={containerRef}>
			{floatingCard.map((card, index) => (
            <FloatingCard
               key={index}
               containerRef={containerRef}
               src={card.src}
               alt={card.alt}
               rotate={card.rotate}
               top={card.top}
               left={card.left}
               className={card.className}
					text={card.text}
            />
			))
            }
		</div>}
   </section>
  )
};

export default EmptySpace;
