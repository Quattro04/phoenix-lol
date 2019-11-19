/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		extend: {
			colors: {
				'grey': '#212121',
				'light-grey': '#3c3c3c',
				'orange': '#e46a13',
				'lighter': '#68A3AB'
			},
			borderRadius: {
				'large': '25px'
			}
		},
		fontFamily: {
			'trade': ['Trade Winds', 'cursive']
		}
	},
	variants: {},
	plugins: []
}
