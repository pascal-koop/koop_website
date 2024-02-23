module.exports = {
	theme: {
    fontFamily: {
      'neueRegrade': ['Neue Regrade', 'sans-serif'],
      'rota': ['Rota', 'sans-serif'],
    },
		colors: {
			bglight: '#FAF0E6',
			bgdark: '#232121',
			cardLight: '#EDEBE8',
			cardDark: '#232121',
			textLight: '#EDEBE8',
			textDark: '#232121'
		},
		extend: {

			animation: {
				slideInFromLeft: 'slideInFromLeft 2s cubic-bezier(0.19, 1, 0.22, 1)',
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
