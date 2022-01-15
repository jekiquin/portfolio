const globalPlugins = ({ addBase, config }) => {
	addBase({
		body: {
			fontFamily: config('theme.fontFamily.montserrat'),
			fontSize: config('theme.fontSize.xs')
		},
		h1: {
			fontFamily: config('theme.fontFamily.norwester'),
			lineHeight: config('theme.lineHeight.normal'),
			fontSize: config('theme.fontSize.3xl')
		},
		h2: {
			fontFamily: config('theme.fontFamily.kollektif'),
			lineHeight: config('theme.lineHeight.normal'),
			fontSize: config('theme.fontSize.xl')
		},
		'p, a': {
			margin: '0.25rem 0'
		}
	});
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				norwester: 'Norwester, sans-serif',
				kollektif: 'Kollektif, sans-serif',
				montserrat: 'Montserrat, sans-serif'
			},
			colors: {
				orange: '#ffc107',
				blue: '#007bff',
				green: '#17a2b8',
				'dark-gray': '#1d2024'
			}
		}
	},
	plugins: [globalPlugins]
};
