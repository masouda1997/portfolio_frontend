import { motion } from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";


const FloatingCard= ({ key , containerRef , src , alt , top , left , rotate , className ,text})=>{

   const [zIndex, setZIndex] = useState(0);

   const updateZIndex = ()=>{
		console.log("a mouse keydown event happen");
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
			key={key}
         onMouseDown={updateZIndex}
         style={{top , left , rotate , zIndex}}
         className={twMerge("drag-elements absolute !w-72 , bg-blue-gray-200  p-1 pb-4" , className)}
         src={src}
         alt={alt}
         drag
         dragConstraints={containerRef}
         dragElastic={0.01} // by activate this line gravity gone
         // dragMomentum={false} // by active this line gravity come back
      />
   )
}


export default FloatingCard;




