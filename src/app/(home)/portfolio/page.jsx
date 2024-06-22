'use client'
import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";

const page = () => {
   const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))


   return (
      <section className="h-screen relative flex flex-col justify-start bg-transparent overflow-x-hidden no-scrollbar">
			<PageTitle
				primaryColor={primaryColor}
				mainText={"my"}
				shadowText={"works"}
				colorText={"portfolio"}
			/>
      </section>
   )
};

export default page;
