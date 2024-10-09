"use client"
import '../globals.css'
import MagneticWrapper from '@/components/PrimaryLink';
// import { useEffect, useState } from 'react';
// import ColorSwitcher from '@/components/ColorSwitcher';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';


const Home = () => {
	
	return (
		<section className=" h-screen relative flex justify-center items-center bg-transparent !overflow-hidden">
			<div
				style={{ backgroundColor: `var(--primary-color)` }}
				className={`w-[50vw] h-[150vh] absolute -rotate-12 -top-10 -left-[30rem] -z-0 `}
			></div>
			<sectoin className="flex justify-between flex-grow h-screen p-12 bg-transparent relative z-auto  ">
				<figure className="h-[100%] rounded-3xl shadow-2xl basis-2/6 bg-black ">
					<img src="#" alt=" " />
				</figure>
				<div className="flex justify-center items-center h-[100%] basis-4/6 relative">
					<div className=" h-max p-1 w-[40rem]">
						<h1 className="uppercase flex flex-col font-bold text-[3rem]">
							{'Im Masoud Anaraki.'}
							<span style={{ color: `var(--primary-color)` }}>
								{'Front-end developer'}
							</span>
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Odit quos sapiente ut, delectus iusto fugit dolorem,
							voluptates laborum nam velit doloribus adipisci. Quae, illo
							corrupti. Deserunt illo nisi incidunt aperiam!
						</p>
						<br />
						<MagneticWrapper>
							<Link
								href={'/about'}
								style={{ border: `${'var(--primary-color)'} 1px solid` }}
								className={` uppercase inline-flex gap-2 items-center  rounded-full pl-6 text-xs loading-bar font-bold`}
							>
								{'More About Me'}
								<GrFormNextLink
									style={{ backgroundColor: `var(--primary-color)` }}
									className="inline w-12 h-12 p-2 rounded-full"
								/>
							</Link> 
						</MagneticWrapper>						
					</div>
				</div>
				{/* <ColorSwitcher color={primaryColor} /> */}
			</sectoin>
		</section>
	);
};

export default Home;
