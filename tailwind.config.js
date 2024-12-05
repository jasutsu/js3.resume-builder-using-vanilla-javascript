/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./learn/**/*.{html, js}'],
	theme: {
		fontFamily: {
			manrope: ['"Manrope", "sans-serif"'],
			poppins: ['"Poppins", "sans-serif"']
		},
		colors: {
			blue: '#1A91F0',
			'blue-mid': '#1170CD',
			'blue-dark': '#1A1C6A',
			white: '#FFFFFF',
			bright: '#EFF2F9',
			dark: '#1E2532',
			black: '#000000',
			grey: '#656E83',
			green: '#084C41',
		},
		extend: {},
	},
	plugins: [],
}