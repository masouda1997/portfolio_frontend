"use client"
import ColorSwitcher from '@/components/ColorSwitcher';
import '../globals.css'
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { useEffect, useState } from 'react';
import Layout from './layout';


const Home = () => {
	const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
	// console.log("@@@@" , primaryColor , typeof primaryColor);
	
	
	
	
	return (
		<section className=" h-screen relative flex justify-center items-center bg-[#111] !overflow-hidden">
			<div style={{'backgroundColor':`${primaryColor}`}} className={`w-[50vw] h-[150vh] absolute -rotate-12 -top-10 -left-[30rem] -z-0 `}></div>
			<sectoin className="flex justify-between flex-grow h-screen p-12 bg-transparent relative z-auto  ">
				<figure className="h-[100%] rounded-3xl shadow-2xl basis-2/6 bg-black ">
					<img src="#" alt=" "/>
				</figure>
				<div className="flex justify-center items-center h-[100%] basis-4/6 relative">
					<div className=" h-max p-1 w-[32rem]">
						<h1 className="uppercase flex flex-col font-bold text-white text-[2.2rem]">
							{" "}
							I'm Masoud Anaraki.{" "}
							<span style={{"color":`${primaryColor}`}}>
								Front-end developer
							</span>{" "}
						</h1>
						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Odit quos sapiente ut, delectus iusto fugit dolorem,
							voluptates laborum nam velit doloribus adipisci. Quae, illo
							corrupti. Deserunt illo nisi incidunt aperiam!
						</p>
						<br />
						<Link href="/" style={{'border':`${primaryColor} 1px solid`}} className={` uppercase inline-flex gap-2 items-center text-white  rounded-full pl-6 text-xs loading-bar`}>
								More About Me 
							<GrFormNextLink style={{'backgroundColor':`${primaryColor}`}} className="inline w-12 h-12  p-2 rounded-full"/>
						</Link>

						<div className='absolute top'></div>
						<ColorSwitcher color={primaryColor}/>

					</div>
				</div>
			</sectoin>
		</section>
	);
};

export default Home;
