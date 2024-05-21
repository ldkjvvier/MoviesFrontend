/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#2A2A2A',
				secondary: '#121212',
			},
		},
	},
	plugins: [],
}
