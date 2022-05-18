module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
	 	 extend: {
			colors: {
			"nh-grey-light": "#F3F3F3",
			"nh-grey": "#868689",
			"nh-grey-dark": "#616162",
			"nh-orange-light": "#FFF7EA",
			"nh-orange": "#F9B200",
			"bookmark-purple": "#5267DF",
			}
	  	},
	  	fontFamily: {
			robotoflex: ["Roboto Flex", "sans-serif"],
		},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				lg: "1440px",
				xl: "1440px",
				"2xl": "1440px"
			}
		}
	},
	plugins: [],
  }