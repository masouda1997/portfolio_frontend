import React from "react";
import FlipLink from "./FlipLink";


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