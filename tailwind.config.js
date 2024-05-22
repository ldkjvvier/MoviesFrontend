/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#141414',
				secondary: '#121212',
			},
		},
	},
	plugins: [],
}
