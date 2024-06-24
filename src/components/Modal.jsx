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
						<CiViewList className="w-7 h-7 " />
						&nbsp;
						<span> project : </span>
						<span className="font-bold text-sm "> {data && data.name} </span>
					</div>
					<div className="flex justify-start items-center">
						<CiUser className="w-7 h-7 " />
						&nbsp;
						<span> client : </span>
						<span className="font-bold text-sm "> </span>
					</div>
					<div className="flex justify-start items-center">
						<HiOutlineCodeBracket className="w-7 h-7 t" />
						&nbsp;
						<span> languages : </span>
						<span className="font-bold text-sm ">{data && data.description}</span>
					</div>
					<div className="flex justify-start items-center">
						<CiShare1 className="w-7 h-7" />
						&nbsp;
						<span> code : </span>
						<span className="font-bold text-sm ">{data && data.link}</span>
					</div>
				</div>
				{/* {data && data.description} */}
			</DialogBody>
			{/* <DialogFooter>
				<Button
					variant="text"
					color="red"
					onClick={handleOpen}
					className="mr-1"
				>
					<span>Cancel</span>
				</Button>
				<Button variant="gradient" color="green" onClick={handleOpen}>
					<span>Confirm</span>
				</Button>
			</DialogFooter> */}
		</Dialog>
	);
};

export default Modal;
