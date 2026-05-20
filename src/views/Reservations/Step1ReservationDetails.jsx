import {
	Button,
	Divider,
	Grid,
	MenuItem,
	Stack,
	TextField,
	Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTimeSlots } from "hooks/useTimeSlots";

function Step1({ onStepChange }) {
	const [date, setDate] = useState(dayjs().startOf("day"));
	const [time, setTime] = useState("");
	const [occasion, setOccasion] = useState("");
	const [guestNumber, setGuestNumber] = useState(1);
	const [note, setNote] = useState();

	const timeSlots = useTimeSlots(date);

	useEffect(() => {
		if (!date) setTime("");

		const isToday = date.isSame(dayjs(), "day");

		if (isToday && timeSlots.length > 0) {
			setTime(timeSlots[0]);
		} else {
			setTime("");
		}
	}, [date, timeSlots]);

	const handleSubmit = (e) => {
		e.preventDefault();
		onStepChange();
	};
	return (
		<Stack>
			<Stack marginY={6}>
				<h1 className="section-heading">Reservation details</h1>
			</Stack>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<Grid spacing={4} container>
						<Grid size={{ md: 6, xs: 12 }}>
							<Stack spacing={4}>
								<Grid spacing={4} container>
									<Grid size={{ xs: 12, md: 6 }}>
										<DatePicker
											value={date}
											onChange={(newValue) => setDate(newValue)}
											label="Date"
											disablePast
											slotProps={{
												textField: { fullWidth: true },
											}}
										/>
									</Grid>
									<Grid size={{ xs: 12, md: 6 }}>
										<TextField
											fullWidth
											select
											label="Time"
											value={time}
											placeholder="Select time"
											slotProps={{
												inputLabel: {
													shrink: time !== "",
												},
											}}
											onChange={(e) => setTime(e.target.value)}
										>
											<MenuItem key="default" value="" disabled>
												<em>Select time</em>
											</MenuItem>
											{timeSlots.map((slot) => (
												<MenuItem key={slot} value={slot}>
													{slot}
												</MenuItem>
											))}
										</TextField>
									</Grid>
								</Grid>

								<TextField
									label="No. of guests"
									type="number"
									value={guestNumber}
									onChange={(e) => setGuestNumber(e.target.value)}
									slotProps={{
										htmlInput: { min: 1, max: 20 },
										inputLabel: { shrink: guestNumber !== "" },
									}}
								/>

								<TextField
									select
									label="Occasion"
									value={occasion}
									onChange={(e) => setOccasion(e.target.value)}
									placeholder="Select occasion"
									slotProps={{
										inputLabel: {
											shrink: occasion !== "",
										},
									}}
								>
									<MenuItem key="default" value="" disabled>
										<em>Select occasion</em>
									</MenuItem>
									<MenuItem key="birthday" value="birthday">
										Birthday
									</MenuItem>
									<MenuItem key="anniversary" value="anniversary">
										Anniversary
									</MenuItem>
									<MenuItem key="engagement" value="engagement">
										Engagement
									</MenuItem>
								</TextField>
								<TextField
									label="Note"
									value={note}
									placeholder="Leave a note or a special request"
									multiline
									minRows={3}
									onChange={(e) => setNote(e.target.value)}
								/>
							</Stack>
						</Grid>
						<Grid size={{ md: 6, xs: 12 }}>
							<Box
								sx={{
									borderRadius: "16px",
									border: "1px solid rgba(0, 0, 0, 0.25)",
									bgcolor: "primary.background",
									padding: 2,
								}}
							>
								<Stack spacing={2}>
									<h2 className="section-subheading">Opening hours</h2>
									<p>
										We are open daily from 10:00 AM to 10:00 PM. Online
										reservations are available up to 30 minutes before closing.
									</p>
									<h2 className="section-subheading">Reservation policy</h2>
									<p>
										Reservations can be modified or cancelled up to 24 hours
										before your booking time using the link in your confirmation
										e-mail.
									</p>
									<h2 className="section-subheading">Additional information</h2>
									<p>
										Please inform us about any allergies or special requests in
										the note section. If you are running late, we kindly ask you
										to contact the restaurant.
									</p>
								</Stack>
							</Box>
						</Grid>
					</Grid>

					<Divider />
					<Button
						sx={{
							alignSelf: "flex-end",
							width: "auto",
							marginTop: "1.5rem",
						}}
						color="secondary"
						variant="contained"
						type="submit"
					>
						Next
					</Button>
				</Stack>
			</form>
		</Stack>
	);
}

export default Step1;
