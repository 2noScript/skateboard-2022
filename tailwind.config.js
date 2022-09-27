/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'no-primary': '#808191',
				'no-bg-primary': '#1f1d2b',
				'no-bg-element': '#353340',
				'no-border-primary': '#8081913d',
				'no-bg-video': '#252936',
				// ''
			},
		},
	},
	plugins: [],
};
