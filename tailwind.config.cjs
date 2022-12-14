/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "300px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
