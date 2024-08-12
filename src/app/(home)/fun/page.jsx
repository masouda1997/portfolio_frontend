"use client";
import PageTitle from "@/components/PageTitle";
import React from "react";

const page = () => {
	return (
		<section className="h-screen  relative flex flex-col items-center bg-transparent overflow-x-hidden no-scrollbar">
         <PageTitle primaryColor={"var(--primary-color)"} mainText={'explore for'} colorText={'fun'} shadowText={'creativity'} />

			<section className="text-2xl">
				this part list of <span style={{color:"var(--primary-color)"}} className="font-bold"> s-components </span>  should be renders |  
				<span style={{color:"var(--primary-color)"}} className="font-bold">  coming soon</span>
			</section>
      </section>
	);
};

export default page;
