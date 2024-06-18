"use client";
import AboutMeCart from "@/components/AboutMeCart";
import PageTitle from "@/components/PageTitle";
import PrimaryLink from "@/components/PrimaryLink";
import { useState } from "react";
import { CiImport } from "react-icons/ci";




const about = () => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
	return (
		<section className="h-screen relative flex flex-col justify-start bg-transparent overflow-x-hidden no-scrollbar">
         <PageTitle primaryColor={primaryColor} mainText={"about"} shadowText={"resume"} colorText={"me"}/>

			<section className="flex justify-center gap-10 ">
				<article className="flex flex-col justify-between gap-14">
					<h2 className="tracking-tight text-3xl uppercase ">personal infos</h2>
					<div className="flex justify-between items-start gap-5">
						<ul className="">
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">first name: </span> Masoud</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">last name: </span>Anaraki</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">age: </span>27 years</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">nationality: </span>Iranian</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">freelance: </span>Available</li>
						</ul>
						<ul className="">
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">address: </span> Isfahan</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">phone: </span>Anaraki</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">email: </span>masoud.anaraki97@gmail.com</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">skype: </span>---</li>
							<li className="py-1"><span className="capitalize opacity-30 font-semibold ">languages: </span>english , persian</li>
						</ul>
						
					</div>
					<div className="self-start"> 
						<PrimaryLink text={'DOWNLOAD CV'} color={primaryColor} icon={
							<CiImport style={{ backgroundColor: `${primaryColor}` }}
							className="inline w-12 h-12 p-2 rounded-full"/>
						}/>
					</div>
				</article>

				<section className="grid grid-cols-2 grid-rows-2 gap-5">
					<AboutMeCart number={1} text1={'years of'} text2={'experience'} />
					<AboutMeCart number={6} text1={'completed'} text2={'project'} />
					<AboutMeCart number={400} text1={'hours'} text2={'skills learn'} />
					<AboutMeCart number={'11k'} text1={'posts view'} text2={'stack overflow'} />	
				</section>
			</section>


			<section className="text-center ">
				<div className="h-0.5 w-1/4 bg-[#252525] m-auto my-16"></div>
				<h2 className="uppercase tracking-tight font font-extrabold text-3xl">my skills</h2>
				
			</section>
		</section>
	);
};

export default about;
