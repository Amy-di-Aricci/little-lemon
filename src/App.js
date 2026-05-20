import "./App.css";
import theme from "./theme";
import Footer from "./components/Footer/Footer.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Nav />
					<Outlet />
					<Footer />
				</LocalizationProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
