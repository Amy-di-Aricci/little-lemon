import "./App.css";
import theme from "./theme";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./views/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
