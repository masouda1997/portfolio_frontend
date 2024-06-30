import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

import { CiViewList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { CiShare1 } from "react-icons/ci";

const Modal = ({ open, handleOpen, data , theme }) => {
	const themeColor = theme === 'dark'?'#fff':"#111"
	return (
		<Dialog
			open={open}
			handler={handleOpen}
			style={{ backgroundColor: themeColor }}
		>
			<DialogHeader style={{ color: "var(--primary-color)", width: "100%" }}>
				<div className="flex justify-center items-center uppercase w-full">
					{data && data.name}
				</div>
			</DialogHeader>
			<DialogBody>
				<div className="grid grid-cols-2 grid-rows-2">
					<div className="flex justify-start items-center">
						<CiViewList className="w-6 h-6 " />
						&nbsp;
						<span> project : </span>
						<span className="font-bold text-sm "> {data && data.name} </span>
					</div>
					<div className="flex justify-start items-center">
						<CiUser className="w-6 h-6 " />
						&nbsp;
						<span> client : </span>
						<span className="font-bold text-sm "> </span>
					</div>
					<div className="flex justify-start items-center">
						<HiOutlineCodeBracket className="w-6 h-6 t" />
						&nbsp;
						<span> languages : </span>
						<span className="font-bold text-sm ">{data && data.description}</span>
					</div>
					<div className="flex justify-start items-center">
						<CiShare1 className="w-6 h-6 " />
						&nbsp;
						<span> code : </span>
						<span className="font-bold text-sm ">{data && data.link}</span>
					</div>
				</div>
			</DialogBody>
			<DialogFooter>
				<div className="w-full h-80 bg-black  overflow-hidden rounded-md">
					<img src="#" alt=" " />
				</div>
			</DialogFooter>
		</Dialog>
	);
};

export default Modal;
