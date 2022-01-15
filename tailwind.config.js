const globalPlugins = ({ addBase, config }) => {
	addBase({
		body: {
			fontFamily: config('theme.fontFamily.montserrat')
		},
		h1: {
			fontFamily: config('theme.fontFamily.norwester'),
			marginBottom: config('theme.spacing.10'),
			lineHeight: config('theme.lineHeight.normal'),
			fontSize: config('theme.fontSize.8xl')
		},
		h2: {
			fontFamily: config('theme.fontFamily.kollektif'),
			marginBottom: config('theme.spacing.8'),
			lineHeight: config('theme.lineHeight.normal'),
			fontSize: config('theme.fontSize.5xl')
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
			}
		}
	},
	plugins: [globalPlugins]
};
