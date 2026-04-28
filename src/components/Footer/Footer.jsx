import "./Footer.css";
import { Grid } from "@mui/material";
import logo from "assets/logo_vertical_mono_green.png";

function Footer() {
	return (
		<footer>
			<Grid container className="container white" spacing={3}>
				<Grid size={3}>
					<img
						alt="Little Lemon"
						src={logo}
						className="footer-logo monocolor-white"
					/>
				</Grid>
				<Grid size={3}>
					<h1>Sitemap</h1>
				</Grid>
				<Grid size={3}>
					<h1>Contact</h1>
				</Grid>
				<Grid size={3}>
					<h1>Social Media</h1>
				</Grid>
			</Grid>
		</footer>
	);
}

export default Footer;
