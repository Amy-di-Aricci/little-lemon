import img from "assets/lemon_plate.png";
import { Typography, Grid, Stack, Button } from "@mui/material";
import { Link } from "react-router";

function ReservationSuccess() {
	return (
		<Grid marginY={12} container spacing={8} className="container">
			<Grid size={{ md: 6, xs: 12 }} alignContent={"center"}>
				<img style={{ width: "100%" }} src={img} alt="Lemon on a plate"></img>
			</Grid>
			<Grid size={{ md: 6, xs: 12 }}>
				<Stack gap={4}>
					<h1 className="section-heading primary">Reservation confirmed</h1>
					<Typography>A fresh reservation has landed on our plate.</Typography>
					<Typography>
						While you wait, take a look at the menu and find something to look
						forward to.
					</Typography>
					<Button
						component={Link}
						to="/"
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
export default ReservationSuccess;
