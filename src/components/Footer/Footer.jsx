import "./Footer.css";
import { Grid, Box, Typography, Stack, Link } from "@mui/material";
import logo from "assets/logo_vertical_mono_green.png";
import SitemapList from "./SitemapList";

import { contactInfo, socialMediaInfo } from "globals/footerConfig";

function Footer() {
	return (
		<footer>
			<Grid container className="container white" spacing={3}>
				<Grid
					display={"flex"}
					justifyContent={{ xs: "center", sm: "flex-start" }}
					size={{ md: 3, sm: 6, xs: 12 }}
					p={1.25}
				>
					<img
						alt="Little Lemon"
						src={logo}
						className="footer-logo monocolor-white"
					/>
				</Grid>
				<Grid size={{ md: 3, sm: 6, xs: 12 }}>
					<Stack gap={2}>
						<h1>Sitemap</h1>
						<SitemapList />
					</Stack>
				</Grid>
				<Grid size={{ md: 3, sm: 6, xs: 12 }}>
					<Stack gap={2}>
						<h1>Contact</h1>
						<Stack gap={1}>
							{contactInfo.map(({ icon: Icon, text, key }) => (
								<Stack key={key} direction="row" alignItems="center" gap={1}>
									{Icon !== undefined ? <Icon /> : <Box sx={{ width: 24 }} />}
									<Typography fontWeight={500}>{text}</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Grid>
				<Grid size={{ md: 3, sm: 6, xs: 12 }}>
					<Stack gap={2}>
						<h1>Social Media</h1>
						<Stack gap={1}>
							{socialMediaInfo.map(({ icon: Icon, text, key, url }) => (
								<Link
									key={key}
									fontWeight={500}
									href={url}
									target="_blank"
									rel="noopener"
								>
									<Stack direction="row" alignItems="center" gap={1}>
										{Icon !== undefined ? <Icon /> : <Box sx={{ width: 24 }} />}

										{text}
									</Stack>
								</Link>
							))}
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</footer>
	);
}

export default Footer;
