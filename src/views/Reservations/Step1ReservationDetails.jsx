import { Button, Divider, MenuItem, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTimeSlots } from "hooks/useTimeSlots";

function Step1({ onStepChange }) {
	const [date, setDate] = useState(dayjs().startOf("day"));
	const [time, setTime] = useState("");
	const [occasion, setOccasion] = useState();
	const [guestNumber, setGuestNumber] = useState();
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
					<DatePicker
						value={date}
						onChange={(newValue) => setDate(newValue)}
						label="Date"
						disablePast
					/>
					<TextField
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
						onChange={(e) => setNote(e.target.value)}
					/>
				</Stack>

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
			</form>
		</Stack>
	);
}

export default Step1;
