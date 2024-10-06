import React, { useState } from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const AboutMeCart = ({number , text1 , text2 }) => {

	return (
		// <Tilt options={defaultOptions} >
			<Tilt options={defaultOptions} className="border-[1px] border-[#252525] hover:border-[var(--primary-color)] p-3  rounded-md ">
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
		// </Tilt>
	);
};

export default AboutMeCart;
