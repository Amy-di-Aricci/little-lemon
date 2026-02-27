import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#495E57", // Twój primary
			contrastText: "#fff", // Tekst na przycisku
		},
		secondary: {
			main: "#F4CE14",
		},
	},
	typography: {
		button: {
			textTransform: "none",
			fontFamily: "Karla, sans-serif",
			fontWeight: 900,
			fontSize: "20px",
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
					height: "48px",
					width: "auto",
				},
			},
		},
	},
});

export default theme;
