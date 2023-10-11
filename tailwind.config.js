/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-banner': "url('./assets/banner-hero.svg')",
			},
		},
	},
	plugins: [],
};
