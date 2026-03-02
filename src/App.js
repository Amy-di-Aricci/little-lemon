import "./App.css";
import theme from "./theme";
import Footer from "./components/Footer";
import Home from "./views/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { ThemeProvider } from "@emotion/react";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav />
				<Home />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
