"use client";
import AboutMeCart from "@/components/AboutMeCart";
import PageTitle from "@/components/PageTitle";
import PrimaryLink from "@/components/PrimaryLink";
import { useState } from "react";
import { CiImport } from "react-icons/ci";
import NetworkChart from "@/components/NetworkCart";
import RadialChart from "@/components/RadialChart";
import { FaGraduationCap } from "react-icons/fa";
import XPcards from "@/components/XPcards";
import { FaBriefcase } from "react-icons/fa";
import { CiRedo } from "react-icons/ci";
import { motion } from "framer-motion";

const fetchData = async ()=>{
	try {
		const res = await fetch('http://localhost:8000/api/author/list',{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json', // Ensure the correct content type
			}
		})
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const personalInfo  = await res.json()
		console.log("❤" , personalInfo);
		return personalInfo
	} catch (error) {
		console.log(error);
		return(error)
	}
}

export const staggerContainer = (staggerChildren, delayChildren) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};



const About = () => {
	const [isRadialChart, setIsRadialChart] = useState(true)

	const data = fetchData()
	
	return (
		<section className="h-screen relative flex flex-col justify-start bg-transparent overflow-x-hidden no-scrollbar">
			<PageTitle
				primaryColor={'var(--primary-color)'}
				mainText={"about"}
				shadowText={"resume"}
				colorText={"me"}
			/>

			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }} 
				className="flex justify-center gap-28  ">

				<article className="flex flex-col justify-between gap-14">
					<h2 className="tracking-tight text-3xl uppercase ">
						personal infos
					</h2>
					<div className="flex justify-between items-start gap-5">
						<ul className="">
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									first name:{" "}
								</span>{" "}
								Masoud
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									last name:{" "}
								</span>
								Anaraki
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									age:{" "}
								</span>
								27 years
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									nationality:{" "}
								</span>
								Iranian
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									freelance:{" "}
								</span>
								Available
							</li>
						</ul>
						<ul className="">
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									address:{" "}
								</span>{" "}
								Isfahan
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									phone:{" "}
								</span>
								Anaraki
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									email:{" "}
								</span>
								masoud.anaraki97@gmail.com
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									skype:{" "}
								</span>
								---
							</li>
							<li className="py-1">
								<span className="capitalize opacity-30 font-semibold ">
									languages:{" "}
								</span>
								english , persian
							</li>
						</ul>
					</div>
					<div className="self-start">
						<PrimaryLink
							text={"DOWNLOAD CV"}
							color={'var(--primary-color)'}
							icon={
								<CiImport
									style={{ backgroundColor: `var(--primary-color)` }}
									className="inline w-12 h-12 p-2 rounded-full"
								/>
							}
						/>
					</div>
				</article>

				<section className="grid grid-cols-2 grid-rows-2 gap-5">
					<AboutMeCart
						number={1}
						text1={"years of"}
						text2={"experience"}
					/>
					<AboutMeCart number={6} text1={"completed"} text2={"project"} />
					<AboutMeCart
						number={400}
						text1={"hours"}
						text2={"skills learn"}
					/>
					<AboutMeCart
						number={"500"}
						text1={"connection"}
						text2={"Linked in"}
					/>
				</section>
			</motion.section>

			{/* ******************************** skils ********************************** */}
			

			<section className="text-center">
				<div className="h-0.5 w-1/4 bg-[#252525] m-auto my-16"></div>
				<h2 className="uppercase tracking-tight font font-extrabold text-3xl">
					my skills
				</h2>
				<section className="flex justify-center relative ">
					<button
						className="absolute top-0 left-0 z-50 p-3 rounded-r-md bg-secondary"
						onClick={() => setIsRadialChart(!isRadialChart)}
					>
						<CiRedo className="animate-orbit text-[var(--primary-color)] text-xl" />
					</button>
					{isRadialChart ? (
						<section className=" w-8/12 grid grid-cols-4 grid-rows-2">
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={60}
								skill={"javaScript"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={70}
								skill={"react.js"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={30}
								skill={"next.js"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={70}
								skill={"css"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={80}
								skill={"html"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={50}
								skill={"typeScript"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={40}
								skill={"python"}
							/>
							<RadialChart
								chartColor={'var(--primary-color)'}
								value={80}
								skill={"tailwind"}
							/>
						</section>
					) : (
						<NetworkChart nodeColor={'var(--primary-color)'} />
					)}
				</section>
			</section>

			<section className="text-center">
				<div className="h-0.5 w-1/4 bg-[#252525] m-auto my-16"></div>
				<h2 className="uppercase tracking-tight font font-extrabold text-3xl">
					experience & education
				</h2>
				<section className="flex justify-center relative mt-10">
					<section className="w-6/12 grid grid-cols-2 grid-rows-2 gap-10 relative">
						<XPcards
							title={"front-end developer"}
							tag={"2023-present"}
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!"
							}
							icon={<FaBriefcase className="w-10" />}
							color={'var(--primary-color)'}
							company={"entekhab group"}
						/>
						<XPcards
							title={"bachelor degree"}
							tag={"2015-2019"}
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!"
							}
							icon={<FaGraduationCap className="w-10" />}
							color={'var(--primary-color)'}
							company={"quchan university of technology"}
						/>
						<XPcards
							title={"Reactjs coding bootcamp"}
							tag={"2022"}
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!"
							}
							icon={<FaGraduationCap className="w-10" />}
							color={'var(--primary-color)'}
							company={"maktab sharif"}
						/>
					</section>
				</section>
				<div className="w-full h-40"></div>
			</section>
		</section>
	);
};

export default About;
