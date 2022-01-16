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
		'h2, h3': {
			fontFamily: config('theme.fontFamily.kollektif'),
			lineHeight: config('theme.lineHeight.normal')
		},
		h2: {
			fontSize: config('theme.fontSize.xl')
		},
		h3: {
			fontSize: config('theme.fontSize.lg')
		},
		'p, a': {
			margin: '0.25rem 0'
		},
		a: {
			transition: 'all 0.5s ease-in-out'
		},
		p: {
			maxWidth: config('theme.maxWidth.prose')
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
				'dark-gray': '#1d2024',
				'light-blue': '#d1e4f9'
			},
			minWidth: {
				skills: '250px'
			}
		}
	},
	plugins: [globalPlugins]
};
