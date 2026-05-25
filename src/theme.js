import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#495E57",
			lighten: "#77968c",
			lightest: "#b5cec6",
			background: "#edefee",
			contrastText: "#fff",
		},
		secondary: {
			main: "#F4CE14",
			contrastText: "#333333",
		},
		secondaryTextDarken: {
			main: "#F4CE14",
			contrastText: "#746105",
		},
		secondaryDarken: {
			main: "#9b8207",
			contrastText: "white",
		},
		secondaryLighten: {
			main: "#f9e275",
			contrastText: "#9b8207",
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
		MuiDivider: {
			styleOverrides: {
				root: {
					borderStyle: "dotted",
					borderColor: "var(--background-grey)",
					borderWidth: "2px 0px 0px 0px",
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				root: {
					borderWidth: "0px",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: "#edefee",
					borderRadius: "8px",
					boxShadow: "var(--black-shadow)",
					"&:hover": {
						backgroundColor: "var(--background-grey-lighten)",
					},
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},

					"&:hover .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},

					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
					"&.Mui-error": {
						backgroundColor: "#f7ebeb",
					},
				},
				notchedOutline: {
					border: "none",
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontFamily: "Karla, sans-serif",
					fontWeight: 700,
					color: "#495E57",
					"&.Mui-focused": {
						color: "#495E57",
					},
				},
			},
		},
		MuiPickersDay: {
			styleOverrides: {
				root: {
					fontFamily: "Karla, sans-serif",
					borderRadius: "8px",
				},
			},
		},
		MuiPickersYear: {
			styleOverrides: {
				yearButton: {
					fontFamily: "Karla, sans-serif",
					borderRadius: "8px",
				},
			},
		},
		MuiDatePicker: {
			defaultProps: {
				slotProps: {
					textField: {
						sx: {
							"& .MuiPickersOutlinedInput-root": {
								backgroundColor: "#edefee",
								borderRadius: "8px",
							},
						},
					},
				},
			},
		},
		MuiPickersOutlinedInput: {
			styleOverrides: {
				root: {
					boxShadow: "var(--black-shadow)",
					"&:hover": {
						backgroundColor: "var(--background-grey-lighten)",
					},
					"&.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
						border: "none",
					},
				},
				notchedOutline: {
					border: "none",
					borderWidth: "0px",
				},
			},
		},
		MuiPickerPopper: {
			styleOverrides: {
				paper: {
					backgroundColor: "#edefee",
					marginTop: "8px",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				text: {
					textTransform: "uppercase",
					fontSize: "1rem",
				},
				contained: {
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
