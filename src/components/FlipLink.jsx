import React from 'react'
import {motion} from "framer-motion"
import { flipLinkCte } from "@/constants";

const FlipLink = ({text , color = ""})=>{
	return (
		<motion.span 
			style={{ color:color ,lineHeight: 0.80 }} 
			className="relative block gap-0 overflow-hidden whitespace-nowrap "
			initial="initial"
			whileHover="hovered"
		>
			<div className="absolute ">
				{text.split("").map((letter,index)=>(
					<motion.span 
						key={index} 
						className="inline-block " 
						variants={{initial:{y:0} , hovered:{y:"-100%"}}} 
						transition={{duration:flipLinkCte.duration , ease:"easeInOut",delay: flipLinkCte.stagger * index }}
					>
						&nbsp;{letter.toUpperCase()}
					</motion.span>
				))}
			</div>
			<div >
				{text.split("").map((letter,index)=>(
					<motion.span 
						key={index} 
						className="inline-block " 
						variants={{initial:{y:"100%"} , hovered:{y:0}}} 
						transition={{duration:flipLinkCte.duration , ease:"easeInOut",delay: flipLinkCte.stagger * index }}
					>
						&nbsp;{letter.toUpperCase()}
					</motion.span>
				))}
			</div>
		</motion.span>
	)
}

export default FlipLink