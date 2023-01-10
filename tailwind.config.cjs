const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./source/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.amber,
				secondary: colors.stone,
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
