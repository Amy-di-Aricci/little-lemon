import "./App.css";
import theme from "./theme";
import Footer from "./components/Footer/Footer.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav />
				<Outlet />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
