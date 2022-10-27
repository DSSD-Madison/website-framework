const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: { ...colors,
			blue: { ...colors.blue,
				400: '#0091E9',
				500: '#006FB2',
				900: '#0D1C26'
			}
		}
	},
	plugins: [],
}