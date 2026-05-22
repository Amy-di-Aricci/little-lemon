import {
	Button,
	Divider,
	Grid,
	MenuItem,
	Stack,
	TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useTimeSlots } from "hooks/useTimeSlots";
import InformationPanel from "../components/InformationPanel";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useFormik } from "formik";
import * as Yup from "yup";
function ReservationDetailsForm({ onStepChange }) {
	const {
		values,
		errors,
		touched,
		setFieldValue,
		getFieldProps,
		handleSubmit,
	} = useFormik({
		initialValues: {
			date: dayjs().startOf("day"),
			time: "",
			occasion: "",
			guestNumber: 1,
			note: undefined,
		},
		onSubmit: (values) => {
			onStepChange();
		},
		validationSchema: Yup.object({
			date: Yup.mixed().required("Required"),
			time: Yup.string().required("Required"),
			guestNumber: Yup.number()
				.min(1, "Please select a value between 1 and 20")
				.max(20, "Please select a value between 1 and 20")
				.integer()
				.required(),
		}),
	});

	const [timeSlots, updateTimeSlots] = useTimeSlots();

	useEffect(() => {
		if (!values.date) setFieldValue("time", "");

		const isToday = values.date.isSame(dayjs(), "day");

		if (isToday && timeSlots.length > 0) {
			setFieldValue("time", timeSlots[0]);
		} else {
			setFieldValue("time", "");
		}
	}, [values.date, timeSlots]);

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={4}>
				<Grid spacing={4} container>
					<Grid size={{ md: 6, xs: 12 }}>
						<Stack spacing={4}>
							<Grid spacing={4} container>
								<Grid size={{ xs: 12, md: 6 }}>
									<DatePicker
										{...getFieldProps("date")}
										onChange={(newValue) => {
											setFieldValue("date", newValue);
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
								placeholder="Leave a note or a special request"
								multiline
								minRows={3}
								{...getFieldProps("note")}
							/>
						</Stack>
					</Grid>
					<Grid size={{ md: 6, xs: 12 }}>
						<InformationPanel />
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
	);
}

export default ReservationDetailsForm;
