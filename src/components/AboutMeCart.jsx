import { TiltCartOption } from "@/constants";
import React, { useState } from "react";
import { Tilt } from "react-tilt";


const AboutMeCart = ({number , text1 , text2 }) => {

	return (
			<Tilt options={TiltCartOption} className="border-[1px] border-[#252525] hover:border-[var(--primary-color)] p-3  rounded-md ">
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
			</Tilt>
	);
};

export default AboutMeCart;
