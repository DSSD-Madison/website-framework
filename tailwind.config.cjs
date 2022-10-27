const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: { ...colors,
			blue: { ...colors.blue,
				400: '#0091E9', //dssd logo's blue, mainly for buttons and accents
				500: '#006FB2', //slightly darkened dssd logo blue, good for text on light background
				900: '#0D1C26' //very dark blue for text or background
			}
		}
	},
	plugins: [],
}