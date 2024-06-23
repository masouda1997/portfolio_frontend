/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT( {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		
		".node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      ".node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
				primary:"#f72b1c",
				secondary:"#252525"
			},
			underline: {
				'before': 'content "" block h-px bg-black'
			},
		},
	},
	plugins: [],
})
