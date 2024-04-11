module.exports = {
	theme: {
		screens: {
			xxs: '375px',
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1516px'
		},
    fontFamily: {
      'neueRegrade': ['Neue Regrade', 'sans-serif'],
      'rota': ['Rota', 'sans-serif'],
    },
		colors: {
			bglight: '#FAF0E6',
			bgdark: '#232121',
			cardLight: '#EDEBE8',
			cardDark: '#232121',
			textLight: '#F9F6EE',
			textDark: '#232121',

		},
		extend: {
			boxShadow: {
				cardImage: '0px 4.8px 4.8px hsl(0deg 0% 0% / 43%);',
				image: '2.4px 4.8px 4.8px hsl(0deg 0% 0% / 43%);',
			},
			animation: {
				slideInFromLeft: 'slideInFromLeft 2s cubic-bezier(0.19, 1, 0.22, 1)',
				slideOutToLeft: 'slideOutToLeft 1s cubic-bezier(0.19, 1, 0.22, 1)',
				slideInFromTop: 'slideInFromTop 2.5s cubic-bezier(0.19, 1, 0.22, 1)'
			},
			keyframes: {
				slideInFromLeft: {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				slideOutToLeft: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				slideInFromTop: {
					'0%': {
						transform: 'translateY(-500px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			}
		}
	}
};
