import { Grid, MenuItem, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";
import dayjs from "dayjs";

function ReservationDetailsForm({ form, timeSlots, updateTimeSlots }) {
	const {
		values,
		errors,
		touched,
		setFieldValue,
		getFieldProps,
		handleSubmit,
	} = form;

	useEffect(() => {
		if (values.time !== "") return;
		if (!values.date) setFieldValue("time", "");

		const isToday = values.date.isSame(dayjs(), "day");

		if (isToday && timeSlots.length > 0) {
			setFieldValue("time", timeSlots[0]);
		} else {
			setFieldValue("time", "");
		}
	}, [values.date, values.time, timeSlots, setFieldValue]);

	return (
		<form onSubmit={handleSubmit} id="reservation-details-form">
			<Stack spacing={4}>
				<Stack spacing={4}>
					<Grid spacing={4} container>
						<Grid size={{ xs: 12, md: 6 }}>
							<DatePicker
								{...getFieldProps("date")}
								errors={errors.date}
								onChange={(newValue) => {
									setFieldValue("date", newValue);
									setFieldValue("time", "");
									updateTimeSlots(newValue);
								}}
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
								error={touched.time && errors.time !== undefined}
								helperText={touched.time && errors.time}
								{...getFieldProps("time")}
								placeholder="Select time"
								slotProps={{
									inputLabel: {
										shrink: values.time !== "",
									},
								}}
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
						error={touched.guestNumber && errors.guestNumber !== undefined}
						helperText={touched.guestNumber && errors.guestNumber}
						{...getFieldProps("guestNumber")}
						slotProps={{
							htmlInput: { min: 1, max: 20 },
							inputLabel: { shrink: values.guestNumber !== "" },
						}}
					/>

					<TextField
						select
						label="Occasion"
						{...getFieldProps("occasion")}
						error={touched.occasion && errors.occasion !== undefined}
						helperText={touched.occasion && errors.occasion}
						placeholder="Select occasion"
						slotProps={{
							inputLabel: {
								shrink: values.occasion !== "",
							},
						}}
					>
						<MenuItem key="default" value="" disabled>
							<em>Select occasion</em>
						</MenuItem>
						<MenuItem key="birthday" value="Birthday">
							Birthday
						</MenuItem>
						<MenuItem key="anniversary" value="Anniversary">
							Anniversary
						</MenuItem>
						<MenuItem key="engagement" value="Engagement">
							Engagement
						</MenuItem>
						<MenuItem key="casual" value="Casual">
							Casual
						</MenuItem>
					</TextField>
					<TextField
						label="Note"
						placeholder="Leave a note or a special request"
						multiline
						minRows={4}
						{...getFieldProps("note")}
					/>
				</Stack>
			</Stack>
		</form>
	);
}

export default ReservationDetailsForm;
