/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const hocusPlugin = require('tailwindcss-hocus')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./blog/**/*.mdx',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				text: {
					light: '#EBF0FED9',
					dark: '#091122d9',
				},
				heading: {
					light: '#fff',
					dark: '#000',
				},
				background: {
					primary: {
						light: '#FFF',
						dark: '#0c121e',
					},
					nav: {
						light: '#ddf0fd80',
						dark: '#1a2b4ba6',
					},
					button: {
						hover: {
							light: '#2d52ab1a',
							dark: '#afc2ef1a',
						},
					},
				},
				button: {},
				border: {
					nav: {
						dark: '#2867d61f',
						light: '#afc2ef1f',
					},
				},
			},
			boxShadow: {
				light: '',
				dark: '0px 0px 8px 2px rgba(56, 103, 214, 0.16)',
			},
			dropShadow: {
				doodle: ['-4px -4px 2px #c0b4f0', '4px 4px 2px #c0b4f0', '4px -4px 2px #c0b4f0', '-4px 4px 2px #c0b4f0'],
			},
			screens: {
				laptop: '600px',
			},
			maxWidth: {
				laptop: '700px',
			},
			fontFamily: {
				sans: ['var(--font-man)'],
			},
			keyframes: {
				'page-transition': {
					'0%': { transform: 'scale(0.975)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				scroll: {
					'0%': { transform: 'translateX(1.5rem)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				wave: {
					'from, 50%, to': { transform: 'rotate(0deg)' },
					'10%, 30%': { transform: 'rotate(-10deg)' },
					'20%': { transform: 'rotate(12deg)' },
					'40%': { transform: 'rotate(9deg)' },
				},
			},
			animation: {
				'page-transition': 'page-transition 300ms ease-in-out backwards',
				scroll: 'scroll 15s linear infinite',
				wave: 'wave 2.5s infinite',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.neutral.700'),
						'h2,h3,h4': {
							'scroll-margin-top': '20px',
						},
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: theme('colors.text.light'),
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.light'),
							'scroll-margin-top': '20px',
						},
						hr: { borderColor: theme('colors.gray.700') },
						strong: { color: theme('colors.gray.300') },
						thead: {
							color: theme('colors.gray.100'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
					},
				},
				quoteless: {
					css: {
						'blockquote p:first-of-type::before': { content: 'none' },
						'blockquote p:first-of-type::after': { content: 'none' },
					},
				},
			}),
		},
	},
	plugins: [hocusPlugin, require('@tailwindcss/typography')],
}
