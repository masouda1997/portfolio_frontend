import React, { useRef, useState } from "react";
import FloatingCard from "./cell/FloatingCard";
import { motion } from "framer-motion";


const cartInfo = [
	{
		src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "6deg",
		top: "20%",
		left: "25%",
		className: "w-36 md:w-56",
	},
	{
		src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "12deg",
		top: "45%",
		left: "60%",
		className: "w-24 md:w-48",
	},
	{
		src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-6deg",
		top: "20%",
		left: "40%",
		className: "w-52 md:w-80",
	},
	{
		src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "8deg",
		top: "50%",
		left: "40%",
		className: "w-48 md:w-72",
	},
	{
		src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "18deg",
		top: "20%",
		left: "65%",
		className: "w-40 md:w-64",
	},
	{
		src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-3deg",
		top: "35%",
		left: "55%",
		className: "w-24 md:w-48",
	},
	{
		src: " ",
		alt: "caution no gravity exist here !!!",
		rotate: "-3deg",
		top: "35%",
		left: "55%",
		className: "w-20 md:w-20",
	},
];

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
			{cartInfo.map((card, index) => (
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
