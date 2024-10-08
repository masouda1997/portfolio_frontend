import React from "react";
import {delay, easeInOut, motion} from "framer-motion"

const PageTitle = ({ primaryColor, mainText, shadowText, colorText }) => {

	const DURATION = 0.25
	const STAGGER = 0.025

	return (
		<div className=" flex justify-center self-start w-screen  relative my-11 ">
			<span className="text-[110px] font-[900] tracking-widest opacity-5 ">
				{shadowText.toUpperCase()}
			</span>
			

			<span className="absolute !opacity-100 z-40 tracking-tight font-[900] text-[56px] top-10 ">
				{mainText.toUpperCase()}
				<motion.span 
					style={{ color: `${primaryColor}`,lineHeight: 0.75, }} 
					className="relative  flex-col gap-0 overflow-hidden whitespace-nowrap "
					initial="initial"
					whileHover="hovered"
					>
						<div className="bg-red-600">
							{colorText.split("").map((letter,index)=>(
								<motion.span key={index} className="inline-block" variants={{initial:{y:0} , hovered:{y:"-100%"}}} transition={{duration:DURATION , ease:"easeInOut" , delay:STAGGER*index }}>
									&nbsp;{letter.toUpperCase()}
								</motion.span>
							))}
						</div>
						<div>
							{colorText.split("").map((letter,index)=>(
								<motion.span key={index} className="inline-block" variants={{initial:{y:"100%"} , hovered:{y:0}}} transition={{duration:DURATION , ease:"easeInOut" , delay:STAGGER*index }} >
									&nbsp;{letter.toUpperCase()}
								</motion.span>
							))}
						</div>
					{/* &nbsp; {colorText.toUpperCase()} */}
				</motion.span>
			</span>
		</div>
	);
};

export default PageTitle;



{/* <span className="absolute !opacity-100 z-40 tracking-tight font-[900] text-[56px] top-10 ">
	{mainText.toUpperCase()}
	<span style={{ color: `${primaryColor}` }} className="opacity-100">
		&nbsp; {colorText.toUpperCase()}
	</span>
</span>; */}