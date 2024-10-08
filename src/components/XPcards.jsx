import React from "react";

const XPcards = ({ key='', title, tag,text, icon, color ,company = "" }) => {
	return (
		<div
			key={key}
			className="relative border-l-2 px-10 flex flex-col justify-betweens gap-3 items-start text-left "
		>
			<span
				style={{ backgroundColor: `${color}` }}
				className="w-12 h-12 rounded-full flex justify-center items-center absolute -top-4 -left-6  "
			>
				{icon}
			</span>
			<span className="rounded-full bg-secondary bg-opacity-40 px-1 text-sm">
				{tag}
			</span>
			<h3 className="tracking-tight uppercase text-lg ">
				{title}
				<span className="font-bold text-sm"> - {company}</span>{" "}
			</h3>
			<p>{text}</p>
		</div>
	);
};

export default XPcards;
