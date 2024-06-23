"use client";
import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import Modal from "@/components/Modal";

const fakeData = [
	{
	  "id": 1,
	  "name": "EcoTrack",
	  "description": "An app that helps users track their carbon footprint and offers tips on how to reduce it.",
	  "link": "https://example.com/ecotrack",
	  "image": "https://example.com/images/ecotrack.png"
	},
	{
	  "id": 2,
	  "name": "FitLife",
	  "description": "A comprehensive fitness app that includes workout plans, diet tracking, and community support.",
	  "link": "https://example.com/fitlife",
	  "image": "https://example.com/images/fitlife.png"
	},
	{
	  "id": 3,
	  "name": "CodeBuddy",
	  "description": "An online platform where developers can collaborate, share code, and help each other solve programming challenges.",
	  "link": "https://example.com/codebuddy",
	  "image": "https://example.com/images/codebuddy.png"
	},
	{
	  "id": 4,
	  "name": "Artify",
	  "description": "A marketplace for artists to sell their digital artworks, with tools for creating and showcasing their portfolios.",
	  "link": "https://example.com/artify",
	  "image": "https://example.com/images/artify.png"
	},
	{
	  "id": 5,
	  "name": "EduLearn",
	  "description": "An e-learning platform offering a wide range of courses across various subjects, from programming to arts.",
	  "link": "https://example.com/edulearn",
	  "image": "https://example.com/images/edulearn.png"
	},
	{
	  "id": 6,
	  "name": "TravelMate",
	  "description": "An app that provides personalized travel recommendations and itineraries based on user preferences and past trips.",
	  "link": "https://example.com/travelmate",
	  "image": "https://example.com/images/travelmate.png"
	},
	{
	  "id": 7,
	  "name": "MindfulMe",
	  "description": "A mindfulness and meditation app designed to help users reduce stress and improve their mental well-being.",
	  "link": "https://example.com/mindfulme",
	  "image": "https://example.com/images/mindfulme.png"
	},
	{
	  "id": 8,
	  "name": "GreenThumb",
	  "description": "An app for gardening enthusiasts, offering tips, plant care guides, and a community for sharing gardening experiences.",
	  "link": "https://example.com/greenthumb",
	  "image": "https://example.com/images/greenthumb.png"
	},
	{
	  "id": 9,
	  "name": "HomeChef",
	  "description": "A recipe app that provides step-by-step cooking instructions, meal planning, and grocery shopping lists.",
	  "link": "https://example.com/homechef",
	  "image": "https://example.com/images/homechef.png"
	}
]

const page = () => {
	const [primaryColor, setPrimaryColor] = useState(
		localStorage.getItem("primary-color")
	);

	const [open, setOpen] = useState(false);
	const [modalData, setModalData]= useState(null)

	const handleOpen = (project) => {
		setModalData(project)
		setOpen(!open)
	}

	return (
		<section className="h-screen relative flex flex-col justify-start bg-transparent overflow-x-hidden no-scrollbar">
			<Modal open={open} handleOpen={handleOpen} data={modalData}/>

			<PageTitle
				primaryColor={primaryColor}
				mainText={"my"}
				shadowText={"works"}
				colorText={"portfolio"}
			/>


			<section className="bg-yellow-900 flex justify-center ">
				<section className="w-4/5 grid grid-cols-3 grid-rows-3 bg-red-400 gap-3">
					{fakeData.map((project)=>(
						<div key={project.id} onClick={()=>handleOpen({...project})} className="bg-blue-gray-200 p-3">
							<img src={project.image} alt=" " />
						</div>
					))}
				
				</section>
			</section>

		</section>
	);
};

export default page;
