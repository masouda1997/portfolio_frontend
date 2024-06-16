"use client";
import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";

const about = () => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
	return (
		<section className="h-screen relative flex flex-col justify-start bg-transparent !overflow-hidden">
         <PageTitle primaryColor={primaryColor} mainText={"about"} shadowText={"resume"} colorText={"me"}/>
		</section>
	);
};

export default about;
