import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { forwardRef, useState } from "react";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiBeaker1 } from "react-icons/ci";

const menuData = [
	{
		id: 1,
		title: "home",
		link: "/",
		icon: CiHome,
	},
	{
		id: 2,
		title: "about",
		link: "/about",
		icon: CiUser,
	},
	{
		id: 3,
		title: "portfolio",
		link: "/portfolio",
		icon: CiFolderOn,
	},
	{
		id: 4,
		title: "contact",
		link: "/contact",
		icon: CiMail,
	},
	{
		id: 5,
		title: "fun",
		link: "/fun",
		icon: CiBeaker1 ,
	},
];

const Menu = () => {
	const pathname = usePathname();

	const [menuHover, setMenuHover] = useState({
		home: false,
		about: false,
		portfolio: false,
		contact: false,
		fun: false,
	});
	return (
		<ul className="flex justify-center items-center flex-col self-center gap-3 overflow-hidden">
			{menuData.map((item) => (
				<li
					onMouseEnter={()=> setMenuHover(prev => ({...prev , [item.title]:true}))}
					onMouseLeave={()=> setMenuHover(prev => ({...prev , [item.title]:false}))}
					key={item.id}
					className="flex items-center justify-center self-end"
				>
					<Link
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${
							window.location.pathname === item.link &&
							"bg-[var(--primary-color)]"
						}`}
						href={item.link}
					>
						{menuHover[item.title] && (
							<span className="pl-3 tracking-tight uppercase transition-all duration-300">
								{item.title}
							</span>
						)}
						<item.icon className="w-8 h-8 p-1" />
					</Link>
				</li>
			))}

			{/* <li
					className=" flex items-center justify-center self-end "
					onMouseEnter={() =>setMenuHover((prev) => ({ ...prev, home: true }))}
					onMouseLeave={() =>setMenuHover((prev) => ({ ...prev, home: false }))}
				>
					<Link
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full  flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${pathname === '/' && 'bg-[var(--primary-color)]'} `}
						href={"/"}
					>
						{menuHover.home && <span className="pl-3 tracking-tight">HOME</span>}
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
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full  flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${pathname === '/about' && 'bg-[var(--primary-color)]'} `}
						href={"/about"}
					>
						{menuHover.user && <span className="pl-3 tracking-tight">ABOUT</span>}
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
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full  flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${pathname === '/portfolio' && 'bg-[var(--primary-color)]'} `}
						href={"/portfolio"}
					>
						{menuHover.portfolio && <span className="pl-3 tracking-tight">PORTFOLIO</span>}
						<CiFolderOn className="w-8 h-8 p-1" />
					</Link>
				</li>
	
				<li
					className="flex items-center justify-center self-end  "
					onMouseEnter={() =>
						setMenuHover((prev) => ({ ...prev, contact: true }))
					}
					onMouseLeave={() =>
						setMenuHover((prev) => ({ ...prev, contact: false }))
					}
				>
					<Link
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full  flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${pathname === '/contact' && 'bg-[var(--primary-color)]'} `}
						href={"/contact"}
					>
						{menuHover.contact && <span className="pl-3 tracking-tight">CONTACT</span>}
						<CiMail className="w-8 h-8 p-1 " />
					</Link>
				</li>

				<li
					className="flex items-center justify-center self-end  "
					onMouseEnter={() =>setMenuHover((prev) => ({ ...prev, fun: true }))}
					onMouseLeave={() =>setMenuHover((prev) => ({ ...prev, fun: false }))}
				>
					<Link
						style={{ border: `var(--primary-color) 1px solid` }}
						className={`p-2 rounded-full  flex items-center justify-center self-end hover:bg-[var(--primary-color)] ${pathname === '/fun' && 'bg-[var(--primary-color)]'} `}
						href={"/fun"}
					>
						{menuHover.fun && <span className="pl-3 tracking-tight">4 FUN </span>}
						<CiBeaker1 className="w-8 h-8 p-1 " />
					</Link>
				</li> */}
		</ul>
	);
};
export default Menu;
