import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#495E57",
			contrastText: "#fff",
		},
		secondary: {
			main: "#F4CE14",
			contrastText: "#333333",
		},
	},
	typography: {
		fontFamily: "Karla, sans-serif",
		button: {
			textTransform: "none",
			fontFamily: "Karla, sans-serif",
			fontWeight: 900,
			fontSize: "20px",
		},
		link: {
			textDecoration: "none",
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: 8,
					padding: "6px 48px",
					minHeight: "48px",
					width: "auto",
				},
			},
		},
	},
});

export default theme;
