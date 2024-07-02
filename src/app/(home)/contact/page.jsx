"use client"
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import React, { forwardRef, useEffect, useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { FaLinkedinIn ,FaInstagram ,FaTelegramPlane , FaGithub  } from "react-icons/fa";

// eslint-disable-next-line react/display-name
const Contact = forwardRef(
	(prpos , ref) => {
		const [isDark, setIsDark] = useState(false)
	
		useEffect(() => {
			const classDark = document.body.className
			console.log(classDark.includes("darkTheme"));
			
			if(classDark.includes("darkTheme")){
				setIsDark(true)
				console.log(isDark);
			}else{
				setIsDark(false)
			}
	
		}, [isDark]);
	
	  return (
			<section className="h-screen  relative flex flex-col items-center bg-transparent overflow-x-hidden no-scrollbar">
				<PageTitle
					primaryColor={"var(--primary-color)"}
					mainText={"get in"}
					colorText={"touch"}
					shadowText={"contact"}
				/>
	
				<section className="flex justify-center  w-7/12 gap-4 ">
					<article className="flex flex-col basis-2/6 justify-between items-start gap-4">
						<h2 className="uppercase font-black text-2xl tracking-tight">
							don't be shy!
						</h2>
						<p>
							Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
						</p>
	
						<div className=" flex justify-between items-center gap-4">
							<span>
								<FaEnvelopeOpen className="text-[var(--primary-color)] text-4xl" />
							</span>
							<span className="flex flex-col">
								<p className="uppercase font-bold text-lightGray">
									mail me{" "}
								</p>
								<p className="text-opacity-25 font-extrabold">
									masoud.anaraki97@gmail.com
								</p>
							</span>
						</div>
	
						<div className=" flex justify-between items-center  gap-4">
							<span>
								<FaPhoneSquareAlt className="text-[var(--primary-color)] text-4xl" />
							</span>
							<span className="flex flex-col">
								<p className="uppercase font-bold text-lightGray">
									call me{" "}
								</p>
								<p className="text-opacity-25 font-extrabold">
									0939-503-4974
								</p>
							</span>
						</div>
	
						<div className="flex justify-around  gap-2">
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href={"https://www.linkedin.com/in/masoud-anaraki/"}>
									<FaLinkedinIn />
								</Link>
							</div>
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href="https://github.com/masouda1997">
									<FaGithub  />
								</Link>
							</div>
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href={"https://t.me/masouda1997"}>
									<FaTelegramPlane />
								</Link>
							</div>
							<div  className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href={"https://www.instagram.com/masouda1997/"}>
									<FaInstagram />
								</Link>
							</div>
							
						</div>
					</article>
	
	
					<form action="#" className="basis-4/6 flex flex-col gap-5 ">
						<div className="flex justify-between items-center "> 
							<input type="text" className={`bg-gray-300 border border-transparent rounded-full px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`} placeholder="your name" />
							<input type="email" className={`bg-gray-300 border border-transparent rounded-full px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`} placeholder="your email" />
							<input type="text" className={`bg-gray-300 border border-transparent rounded-full px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`} placeholder="your subject" />
						</div>
						<textarea rows={12} name="" id="" className={`bg-gray-300 border border-transparent rounded-3xl px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`}></textarea>
					</form>
				</section>
			</section>
		);
	}
) 

export default Contact;
