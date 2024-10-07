"use client";
import AboutMeCart from "@/components/AboutMeCart";
import PageTitle from "@/components/PageTitle";
import PrimaryLink from "@/components/PrimaryLink";
import React, { useState } from "react";
import { CiImport } from "react-icons/ci";
import NetworkChart from "@/components/NetworkCart";
import RadialChart from "@/components/RadialChart";
import XPcards from "@/components/XPcards";
import { FaBriefcase } from "react-icons/fa";
import { CiRedo } from "react-icons/ci";
import { motion } from "framer-motion";
import MotionScroll from "@/components/cell/MotionScroll";


// const fetchData = async ()=>{
// 	try {
// 		const res = await fetch('http://localhost:8000/api/author/list',{
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json', // Ensure the correct content type
// 			}
// 		})
// 		if (!res.ok) {
// 			throw new Error(`HTTP error! status: ${res.status}`);
// 		}
// 		const personalInfo  = await res.json()
// 		console.log("❤" , personalInfo);
// 		return personalInfo
// 	} catch (error) {
// 		console.log(error);
// 		return(error)
// 	}
// }


const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 200 : direction === "right" ? -200 : 0,
			// y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

const radialChartFakeDate = [
	{
		id: 1,
		skill: "javaScript",
		value: 60,
	},
	{
		id: 2,
		skill: "react.js",
		value: 70,
	},
	{
		id: 3,
		skill: "next.js",
		value: 30,
	},
	{
		id: 4,
		skill: "css",
		value: 70,
	},
	{
		id: 5,
		skill: "html",
		value: 80,
	},
	{
		id: 6,
		skill: "typeScript",
		value: 50,
	},
	{
		id: 7,
		skill: "python",
		value: 40,
	},
	{
		id: 8,
		skill: "tailwind",
		value: 90,
	},
];

const xpCardFakeData = [
	{
	  title: "front-end developer",
	  tag: "2023-present",
	  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!",
	  company: "entekhab group"
	},
	{
	  title: "bachelor degree",
	  tag: "2015-2019",
	  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!",
	  company: "quchan university of technology"
	},
	{
	  title: "Reactjs coding bootcamp",
	  tag: "2022",
	  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga!",
	  company: "maktab sharif"
	}
 ]




const About = () => {
	const [isRadialChart, setIsRadialChart] = useState(true)

	// const data = fetchData()
	
	return (
		<section className="h-screen relative flex flex-col gap-32 justify-start bg-transparent overflow-x-hidden no-scrollbar">
			<PageTitle
				primaryColor={'var(--primary-color)'}
				mainText={"about"}
				shadowText={"resume"}
				colorText={"me"}
			/>

			<section
				className="flex justify-center gap-16 ">

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
					<AboutMeCart 
						number={6} 
						text1={"completed"} 
						text2={"project"} 
					/>
					<AboutMeCart
						number={400}
						text1={"hours"}
						text2={"skills learn"}
					/>
					<AboutMeCart
						number={500}
						text1={"connection"}
						text2={"Linked in"}
					/>
				</section>

				<MotionScroll id={"skills"} scrollDelay={500}/>
			</section>

			{/* ******************************** skils ********************************** */}
			
			<section  className="text-center  ">
				<div id="skills" className="h-0.5 w-1/4 bg-[#252525] m-auto my-32 "></div>
				<h2  className="uppercase tracking-tight font font-extrabold text-3xl pb-10">
					my skills
				</h2>
				<section className="flex  justify-center relative ">
					<button
						className="absolute top-0 left-0 z-50 p-3 rounded-r-md bg-secondary"
						onClick={() => setIsRadialChart(!isRadialChart)}
					>
						<CiRedo className="animate-orbit text-[var(--primary-color)] text-xl" />
					</button>
					{isRadialChart ? (
						<section className=" w-8/12 grid grid-cols-4 grid-rows-2 mb-28">
							{radialChartFakeDate.map((chart , index)=>(
									<motion.div
										key={chart.id}
										initial="hidden"
										whileInView="show"
										// animate="show"s 
										viewport={{ once: true, amount: 0.25 }}
										variants={fadeIn("right", "spring", 0.5 * index, 0.5)}>
										<RadialChart 
											chartColor={'var(--primary-color)'}
											value={chart.value}
											skill={chart.skill}
										/>
									</motion.div>
							))}
						</section>
					) : (
						<div className=" w-8/12 bg-transparent border-none mb-28" >
							<NetworkChart nodeColor={'var(--primary-color)'} />
						</div>
					)}
					
				<MotionScroll id={"experience"} scrollDelay={500} />
				</section>
			</section>

			{/* *********************** experience & education ************************** */}


			<section className="text-center  mb-40">
				<div id="experience" className="h-0.5 w-1/4 bg-[#252525] m-auto mb-32 "></div>
				<h2 className="uppercase tracking-tight font font-extrabold text-3xl pb-32">
					experience & education
				</h2>
				<section className="flex justify-center relative mt-10">
					<section className="w-6/12 grid grid-cols-2 grid-rows-2 gap-10 relative">
					{/* <section className=""> */}
					{/* <VerticalTimeline> */}

						{xpCardFakeData.map((cart)=>(
								<XPcards 
								key={cart.id}
								title={cart.title}
								tag={cart.tag}
								text={cart.text}
								icon={<FaBriefcase className="w-10" />}
								color={'var(--primary-color)'}
								company={cart.company}
								/>
						))}
					{/* </VerticalTimeline> */}

					</section>
				</section>
				<div className="w-full h-40"></div>
			</section>
		</section>
	);
};

export default About;
