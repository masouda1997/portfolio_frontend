import Link from "next/link";
import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Menu = () => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
   const [menuHover , setMenuHover] = useState({
      home:false,
      about:false,
      portfolio:false,
      contact:false,
   })
	return (
		<ul className="flex justify-center items-center flex-col gap-3 ">
			<li
				className=" flex items-center justify-center self-end "
				onMouseEnter={() =>
					setMenuHover((prev) => ({ ...prev, home: true }))
				}
				onMouseLeave={() =>
					setMenuHover((prev) => ({ ...prev, home: false }))
				}
			>
				<Link
					style={{ border: `${primaryColor} 1px solid` }}
					className="p-2 rounded-full  flex items-center justify-center self-end"
					href={"/"}
				>
					{menuHover.home && <span className="pl-3">home</span>}
					<CiHome className="w-8 h-8 p-1" />
				</Link>
			</li>
			<li
				className="  flex items-center justify-center self-end "
				onMouseEnter={() =>
					setMenuHover((prev) => ({ ...prev, user: true }))
				}
				onMouseLeave={() =>
					setMenuHover((prev) => ({ ...prev, user: false }))
				}
			>
				<Link
					style={{ border: `${primaryColor} 1px solid` }}
					className="p-2 rounded-full flex items-center justify-center self-end"
					href={"/about"}
				>
					{menuHover.user && <span className="pl-3">user</span>}
					<CiUser className="w-8 h-8 p-1" />
				</Link>
			</li>
			<li
				className=" flex items-center justify-center self-end "
				onMouseEnter={() =>
					setMenuHover((prev) => ({ ...prev, portfolio: true }))
				}
				onMouseLeave={() =>
					setMenuHover((prev) => ({ ...prev, portfolio: false }))
				}
			>
				<Link
					style={{ border: `${primaryColor} 1px solid` }}
					className="p-2 rounded-full  flex items-center justify-center self-end"
					href={"#"}
				>
					{menuHover.portfolio && <span className="pl-3">portfolio</span>}
					<CiFolderOn className="w-8 h-8 p-1" />
				</Link>
			</li>
			<li
				className="flex items-center justify-center self-end "
				onMouseEnter={() =>
					setMenuHover((prev) => ({ ...prev, contact: true }))
				}
				onMouseLeave={() =>
					setMenuHover((prev) => ({ ...prev, contact: false }))
				}
			>
				<Link
					style={{ border: `${primaryColor} 1px solid` }}
					className="p-2 rounded-full  flex items-center justify-center self-end"
					href={"#"}
				>
					{menuHover.contact && <span className="pl-3">contact</span>}
					<CiMail className="w-8 h-8 p-1 " />
				</Link>
			</li>
		</ul>
	);
};

export default Menu;
