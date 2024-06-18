/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// darkMode:'class',
	theme: {
		extend: {
			animation: {
				"fill-width": "fill-width 1s ease-in-out forwards",
			},
			keyframes: {
				"fill-width": {
					from: { transform: "translateX(-100%)" },
					to: { transform: "translateX(0)" },
				},
			},
			colors:{
				primary:"#f72b1c"
			},
			underline: {
				'before': 'content "" block h-px bg-black'
			},
		},
	},
	plugins: [],
};
