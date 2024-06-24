import React, { useState } from "react";

const AboutMeCart = ({number , text1 , text2 }) => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))

	return (
		<div className="border-[1px] border-[#252525] p-3  rounded-md ">
			<span
				style={{ color: `var(--primary-color)` }}
				className="text-5xl font-extrabold block mb-2"
			>
				{number}<sup className="font-normal">+</sup>
			</span>
			{/* dash class is in the globalcss */}
			<span className="block uppercase font-semibold underline-before dash ">
				{text1}
			</span>
			<span className="block uppercase font-semibold ml-[34px]">
				{text2}
			</span>
		</div>
	);
};

export default AboutMeCart;
