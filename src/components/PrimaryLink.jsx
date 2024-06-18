import Link from "next/link";
import React from "react";

const PrimaryLink = ({ href="#", text, color, icon }) => {
	return (
		<Link
			href={`${href}`}
			style={{ border: `${color} 1px solid` }}
			className={` uppercase inline-flex gap-2 items-center  rounded-full pl-6 text-xs loading-bar font-bold`}
		>
			{text}
         {icon}
		</Link>
	);
};

export default PrimaryLink;
