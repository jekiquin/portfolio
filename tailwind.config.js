const globalPlugins = ({ addBase, config }) => {
	addBase({
		html: {
			scrollBehavior: 'smooth',
			color: '#343a40'
		},
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

const HEXSPACING = 1;

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
				blue: '#007bff',
				green: '#17a2b8',
				'dark-gray': '#1d2024',
				'light-blue': '#d1e4f9',
				'trans-green': 'rgba(23, 162, 184, 0.7);'
			},
			minWidth: {
				skills: '250px'
			},
			height: {
				'20vh': '20vh'
			},
			spacing: {
				'hex-first': `${HEXSPACING / 2}rem`,
				'hex-top': `${0 - HEXSPACING}rem`,
				'hex-bottom': `${1.5 * HEXSPACING}rem`,
				'hex-left': '2.6rem',
				'hex-gap': '0.2rem'
			},
			animation: {
				slideIn: 'slideIn 1s ease-in-out 1 forwards',
				popout: 'popout 1s ease-in-out 1 forwards',
				'rotate-modal': 'rotate-modal 2s ease-in-out 1 forwards',
				'rotate-modal-reverse': 'rotate-modal-reverse 2s ease-in-out 1 forwards',
				heroSlide: 'heroSlide 1s cubic-bezier(.32,.51,.64,1.15)  0.5s 1 forwards',
				'heroSlide-reverse':
					'heroSlide-reverse 1s cubic-bezier(.32,.51,.64,1.15)  0.5s 1 forwards'
			},
			keyframes: {
				slideIn: {
					'0%': {
						transform: 'translateY(4rem)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: '1'
					}
				},
				popout: {
					'0%': {
						transform: 'scale(0)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'rotate-modal': {
					'0%': { transform: 'rotateY(0deg) scaleX(0)' },
					'100%': { transform: 'rotateY(360deg) scaleX(1)' }
				},
				'rotate-modal-reverse': {
					'100%': { transform: 'rotateY(0deg) scaleX(0)' },
					'0%': { transform: 'rotateY(360deg) scaleX(1)' }
				},
				heroSlide: {
					'0%': { transform: 'translateX(-999%)' },
					'100%': { transform: 'translateX(1)', opacity: '1' }
				},
				'heroSlide-reverse': {
					'0%': { transform: 'translateX(999%)' },
					'100%': { transform: 'translateX(1)', opacity: '1' }
				}
			},
			backgroundImage: {
				hero: "url('../assets/backgrounds/hero.jpg')",
				projects: "url('../assets/backgrounds/projects.avif')"
			}
		}
	},
	plugins: [globalPlugins, require('tailwindcss-animation-delay')]
};
