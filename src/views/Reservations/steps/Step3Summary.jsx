import { Stack, Grid, Button, Divider } from "@mui/material";
import { useReservationContext } from "contexts/ReservationContext";
import { useEffect } from "react";
import dayjs from "dayjs";
import { submitAPI } from "api";
import { useNavigate } from "react-router";
function Step3({ onCanNavigateAwayChange }) {
	const { formData } = useReservationContext();
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		try {
			var success = submitAPI(formData);
		} catch (e) {
			console.log("Data submit failed");
		}

		if (success) {
			navigate("success");
		}
	};

	useEffect(() => {
		onCanNavigateAwayChange(true);
	}, [onCanNavigateAwayChange]);
	return (
		<Stack marginY={6} spacing={4}>
			<h1 className="section-heading">Summary</h1>
			<Grid container spacing={2}>
				<Grid size={{ xs: 12, md: 5 }}>
					<Stack spacing={3}>
						<Stack spacing={1}>
							<b>NAME</b>
							<p>{formData.name}</p>
						</Stack>
						<Stack spacing={1}>
							<b>E-MAIL</b>
							<p>{formData.email}</p>
						</Stack>
					</Stack>
				</Grid>
				<Grid
					size={{ xs: 12, md: 2 }}
					alignContent={"center"}
					justifyContent={"center"}
					display={"flex"}
				>
					<Divider sx={{ width: "1px" }} orientation="vertical" />
				</Grid>

				<Grid size={{ xs: 12, md: 5 }}>
					<Stack spacing={3}>
						<Stack spacing={1}>
							<b>DATE & TIME</b>
							<p>
								{dayjs(formData.date).format("DD.MM.YYYY")} {formData.time}
							</p>
						</Stack>
						<Stack spacing={1}>
							<b>NO. OF GUESTS</b>
							<p>{formData.guestNumber}</p>
						</Stack>
						<Stack spacing={1}>
							<b>OCCASION</b>
							<p>{formData.occasion}</p>
						</Stack>
						<Stack spacing={1}>
							<b>NOTE TO STAFF</b>
							<p>{formData.note.length > 0 ? formData.note : "---"}</p>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<Divider />
			<Button
				sx={{
					alignSelf: "flex-end",
					width: "auto",
					marginTop: "1.5rem",
				}}
				onClick={handleClick}
				variant="contained"
				color="secondary"
			>
				Reserve the table
			</Button>
		</Stack>
	);
}

export default Step3;
