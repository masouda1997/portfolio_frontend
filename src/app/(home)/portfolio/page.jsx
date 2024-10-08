"use client";
import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import Modal from "@/components/Modal";

const fakeData = [
	{
		id: 1,
		name: "EcoTrack",
		description:
			"An app that helps users.",
		link: "https://example.com/ecotrack",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 2,
		name: "FitLife",
		description:
			"A comprehensive fitness app that includes.",
		link: "https://example.com/fitlife",
		image: "https://fakeimg.pl/400x300/",
	},
	{
		id: 3,
		name: "CodeBuddy",
		description:
			"An online platform where developers can collaborate",
		link: "https://example.com/codebuddy",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 4,
		name: "Artify",
		description:
			"A marketplace for artists to.",
		link: "https://example.com/artify",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 5,
		name: "EduLearn",
		description:
			"subjects, from programming to arts.",
		link: "https://example.com/edulearn",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 6,
		name: "TravelMate",
		description:
			"An app that",
		link: "https://example.com/travelmate",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 7,
		name: "MindfulMe",
		description:
			"A mindfulness and meditation app desi",
		link: "https://example.com/mindfulme",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 8,
		name: "GreenThumb",
		description:
			"An app for gardening",
		link: "https://example.com/greenthumb",
		image: "https://fakeimg.pl/350x250/",
	},
	{
		id: 9,
		name: "HomeChef",
		description:
			"A recipe app that providessdfsdf sdfs  dfsdf sfsdf swfsdf fsdf ssssssssssssss sssssssssssssssssss ssssssssssssssssss ssssssssssssssssssss ssssssssssssssssss sssssssssssssssss e",
		link: "https://example.com/homechef",
		image: "https://fakeimg.pl/350x250/",
	},
];

const Page = () => {
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState(null);
	const [modalTheme, setModalTheme] = useState("");

	const handleOpen = (project) => {
		setModalTheme(localStorage.getItem('theme'))
		setModalData(project);
		setOpen(!open);
	};

	return (
		<section className="h-screen relative flex flex-col justify-start bg-transparent overflow-x-hidden no-scrollbar">
			<Modal open={open} handleOpen={handleOpen} data={modalData} theme={modalTheme} />

			<PageTitle
				primaryColor={"var(--primary-color)"}
				mainText={"my"}
				shadowText={"works"}
				colorText={"portfolio"}
			/>

			<section className=" flex justify-center  relative  pb-10 ">
				<section className="grid grid-cols-3 grid-rows-3 gap-5">
					{fakeData.map((project) => (
						<div
							key={project.id}
							onClick={() => handleOpen({ ...project })}
							className="rounded-md over group relative max-w-[350px] max-h-[250px]  overflow-hidden">
								<img src={project.image} alt="" />
								<div className="absolute top-0 p-3 opacity-0 group-hover:opacity-80 group-hover:bg-[var(--primary-color)] w-full h-full transition duration-300 ease-in-out flex justify-center items-center">
									<span>{project.name}</span>
								</div>
						</div>
					))}
				</section>
			</section>
		</section>
	);
};

export default Page;
