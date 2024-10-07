export const TiltCartOption = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const graphNetworkData = [
	{ from: "skills", to: "JS" },
	{ from: "skills", to: "HTML" },
	{ from: "skills", to: "css" },
	{ from: "skills", to: "SQL" },
	{ from: "skills", to: "Python" },
	{ from: "skills", to: "Git" },

	{ from: "css", to: "sass" },
	{ from: "css", to: "tailwind" },
	{ from: "css", to: "bootstrap" },
	{ from: "css", to: "css module" },

	{ from: "JS", to: "react" },
	{ from: "JS", to: "ts" },
	{ from: "JS", to: "redux" },
	{ from: "JS", to: "node" },

	{ from: "react", to: "next" },

	{ from:"node", to: "express"}
		
];
