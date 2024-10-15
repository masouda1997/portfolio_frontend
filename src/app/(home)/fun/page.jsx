"use client";
import EmptySpace from "@/components/EmptySpace";
import PageTitle from "@/components/PageTitle";
import React from "react";

const page = () => {
	return (
		<section className="h-screen  relative flex flex-col items-center bg-transparent overflow-x-hidden no-scrollbar">
         <PageTitle primaryColor={"var(--primary-color)"} mainText={'explore for'} colorText={'fun'} shadowText={'creativity'} />

			<section className="text-2xl  w-full min-h-screen">
				<EmptySpace/>
			</section>
      </section>
	);
};

export default page;
