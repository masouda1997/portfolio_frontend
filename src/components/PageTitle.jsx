import React from "react";

const PageTitle = ({ primaryColor, mainText, shadowText, colorText }) => {
	return (
		<div className=" flex justify-center self-start w-screen  relative my-11 ">
			<span className="text-[100px] font-[900] tracking-widest opacity-5 ">
				{shadowText.toUpperCase()}
			</span>

			<span className="absolute !opacity-100 z-40 tracking-tight font-[900] text-[56px] top-8 ">
				{mainText.toUpperCase()}
				<span style={{ color: `${primaryColor}` }} className="opacity-100">
					&nbsp; {colorText.toUpperCase()}
				</span>
			</span>
		</div>
	);
};

export default PageTitle;
