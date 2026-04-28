import { Grid, Button, Stack, Typography } from "@mui/material";
import img from "assets/404 lemon.png";
import "./NotFound.css";

function NotFound() {
	return (
		<Grid container spacing={8} className="container not-found">
			<Grid size={{ md: 6, xs: 12 }}>
				<img style={{ width: "100%" }} src={img} alt="Empty lemon basket"></img>
			</Grid>
			<Grid size={{ md: 6, xs: 12 }}>
				<Stack gap={4}>
					<h1 className="section-heading primary">
						Nothing but an empty basket
					</h1>
					<Typography>
						Looks like this page didn't make it from the garden. Let's take you
						back to something delicious.
					</Typography>
					<Button
						href="/"
						color="secondary"
						variant="contained"
						size="medium"
						sx={{
							alignSelf: "flex-start",
							width: "auto",
						}}
					>
						Back to Home
					</Button>
				</Stack>
			</Grid>
		</Grid>
	);
}
export default NotFound;
