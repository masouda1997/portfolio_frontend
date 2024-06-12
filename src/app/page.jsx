
const Home = () => {
	return (
		<main className=" h-screen relative flex justify-center items-center bg-[#111] !overflow-hidden">
			<div className="w-[50vw] h-[150vh] bg-red-600 absolute -rotate-12 -top-10 -left-80 -z-0 "></div>
			<sectoin className="flex justify-between w-screen h-screen p-12 bg-transparent relative z-auto gap-4 ">
				<figure className="h-[100%] rounded-3xl shadow-2xl basis-2/5 bg-black ">
					<img src="#" alt=" " />
				</figure>
				<div className="flex justify-center items-center h-[100%] basis-3/5">
					<div className="w-2/3 h-max">
						<h1 className="uppercase flex flex-col font-bold text-white "> I'm Masoud Anaraki <span className="text-red-500">Front-end developer</span> </h1>
						<p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quos sapiente ut, delectus iusto fugit dolorem, voluptates laborum nam velit doloribus adipisci. Quae, illo corrupti. Deserunt illo nisi incidunt aperiam!</p>
					</div>
				</div>
			</sectoin>
		</main>
	);
};

export default Home;
