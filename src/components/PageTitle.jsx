import React from "react";
import {motion} from "framer-motion"
import { flipLinkCte } from "@/constants";

const FlipLink = ({text , color = ""})=>{
	return (
		<motion.span 
			style={{ color:color ,lineHeight: 0.80, }} 
			className="relative  block gap-0 overflow-hidden whitespace-nowrap "
			initial="initial"
			whileHover="hovered"
		>
			<div className="absolute ">
				{text.split("").map((letter,index)=>(
					<motion.span 
						key={index} 
						className="inline-block" 
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
						className="inline-block" 
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



const PageTitle = ({ primaryColor, mainText, shadowText, colorText }) => {
	return (
		<div className=" flex justify-center self-start w-screen  relative my-11 ">
			<span className="absolute -top-5 -z-40  text-[110px] font-[900] tracking-widest opacity-5 ">
				{shadowText.toUpperCase()}
			</span>
			<span className="flex justify-center items-center my-10 !opacity-100 tracking-[-0.015em] font-[900] text-[56px]  ">
				<FlipLink text={mainText}/>
				<FlipLink text={colorText} color={`${primaryColor}`} /> 
			</span>
		</div>
	);
};

export default PageTitle;

{/* <motion.span 
			style={{ color: `${primaryColor}`,lineHeight: 0.80, }} 
			className="relative  block gap-0 overflow-hidden whitespace-nowrap "
			initial="initial"
			whileHover="hovered"
			>
				<div className="absolute ">
					{colorText.split("").map((letter,index)=>(
						<motion.span key={index} className="inline-block" variants={{initial:{y:0} , hovered:{y:"-100%"}}} transition={{duration:DURATION , ease:"easeInOut" delay:STAGGER*index }}>
							&nbsp;{letter.toUpperCase()}
						</motion.span>
					))}
				</div>
				<div className="">
					{colorText.split("").map((letter,index)=>(
						<motion.span key={index} className="inline-block" variants={{initial:{y:"100%"} , hovered:{y:0}}} transition={{duration:DURATION , ease:"easeInOut" delay:STAGGER*index }} >
							&nbsp;{letter.toUpperCase()}
						</motion.span>
					))}
				</div>
		</motion.span> */}



{/* <span className="absolute !opacity-100 z-40 tracking-tight font-[900] text-[56px] top-10 ">
	{mainText.toUpperCase()}
	<span style={{ color: `${primaryColor}` }} className="opacity-100">
		&nbsp; {colorText.toUpperCase()}
	</span>
</span>; */}