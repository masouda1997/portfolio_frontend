import { motion } from "framer-motion";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";


// const cartInfo = [
// 	{
// 		src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "6deg",
// 		top: "20%",
// 		left: "25%",
// 		className: "w-36 md:w-56",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "12deg",
// 		top: "45%",
// 		left: "60%",
// 		className: "w-24 md:w-48",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "-6deg",
// 		top: "20%",
// 		left: "40%",
// 		className: "w-52 md:w-80",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "8deg",
// 		top: "50%",
// 		left: "40%",
// 		className: "w-48 md:w-72",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "18deg",
// 		top: "20%",
// 		left: "65%",
// 		className: "w-40 md:w-64",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 		alt: "Example image",
// 		rotate: "-3deg",
// 		top: "35%",
// 		left: "55%",
// 		className: "w-24 md:w-48",
// 	},
// ];


const Card= ({containerRef , src , alt , top , left , rotate , className})=>{
   const [zIndex, setZIndex] = useState(0);


   const updateZIndex = ()=>{
      const elements = document.querySelectorAll('.drag-elements')
      let maxZIndex = - Infinity
      elements.forEach(el=>{
         let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'))
         if(!isNaN(zIndex) && zIndex > maxZIndex){
            maxZIndex = zIndex
         }
      })
      setZIndex(maxZIndex+1)
   }

   return(
      <motion.img
         onMouseDown={updateZIndex}
         style={{top , left , rotate , zIndex}}
         className={twMerge("drag-elements absolute w-84 , bg-blue-gray-200  p-1 pb-4" , className)}
         src={src}
         alt={alt}
         drag
         dragConstraints={containerRef}
         dragElastic={0.80}
         //dragMomentum={false}
      />
   )
}

const FloatingCard = () => {
	const containerRef = useRef(null);
	return (
		<div>
			{cartInfo.map((card, index) => (
            <Card
               key={index}
               containerRef={containerRef}
               src={card.src}
               alt={card.alt}
               rotate={card.rotate}
               top={card.top}
               left={card.left}
               className={card.className}
            />))
            }
		</div>
	);
};
export default FloatingCard;
