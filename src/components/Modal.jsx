import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ open, handleOpen, data }) => {
   data && console.log(data);
   const [primaryColor, setPrimaryColor] = useState(
		localStorage.getItem("primary-color")
	);
   
	return (
		<Dialog open={open} handler={handleOpen}>
			<DialogHeader style={{'color':`${primaryColor}`}} >{data&&data.name}</DialogHeader>
			<DialogBody>
				{data&&data.description}
			</DialogBody>
			<DialogFooter>
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
			</DialogFooter>
		</Dialog>
	);
};

export default Modal;
