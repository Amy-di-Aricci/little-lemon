import { Stack, Button, Grid, Container } from "@mui/material";
import symbol from "assets/symbol_multicolor.png";
import Header from "./Header";
import background from "assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg";

function HeaderHome() {
	return (
		<>
			<Header image={background} imagePosition="50% 57%" imageBrightness={0.75}>
				<Grid
					sx={{
						justifyContent: "center",
						alignItems: "center",
					}}
					direction={"row"}
					container
					spacing={2}
				>
					<Grid size={{ xs: 12, sm: 8 }} sx={{ order: { xs: 2, sm: 1 } }}>
						<Stack direction="column" spacing={6}>
							<Stack direction="column" spacing={-1}>
								<h1 className="headline secondary">Little Lemon</h1>
								<h2 className="subheading white">Chicago</h2>
							</Stack>
							<p className="promo-text white">
								We are a family owned Mediterranean restaurant, focused on
								traditional recipes served with a modern twist.
							</p>
							<Button
								variant="contained"
								color="secondary"
								sx={{
									alignSelf: "flex-start",
									width: "auto",
								}}
							>
								Reserve a table
							</Button>
						</Stack>
					</Grid>
					<Grid
						size={{ xs: 12, sm: 4 }}
						sx={{
							order: { xs: 1, sm: 2 },
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img height={240} src={symbol} />
					</Grid>
				</Grid>
			</Header>
		</>
	);
}

export default HeaderHome;
