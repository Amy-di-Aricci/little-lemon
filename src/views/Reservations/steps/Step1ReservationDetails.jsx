import { Stack, Grid, Divider, Button } from "@mui/material";

import ReservationDetailsForm from "../forms/ReservationDetailsForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import InformationPanel from "../components/InformationPanel";
import { useTimeSlots } from "hooks/useTimeSlots";
import { useEffect } from "react";
import { useReservationContext } from "contexts/ReservationContext";

function Step1({ onStepChange, onCanNavigateAwayChange }) {
	const { formData, updateFormData } = useReservationContext();
	const formik = useFormik({
		initialValues: {
			date: formData.date,
			time: formData.time,
			occasion: formData.occasion,
			guestNumber: formData.guestNumber,
			note: formData.note,
		},
		onSubmit: () => {
			updateFormData(formik.values);
			onStepChange();
		},
		validationSchema: Yup.object({
			date: Yup.mixed().required("Please select a date."),
			time: Yup.string()
				.required("Please select time.")
				.test({
					message: () => "Selected time slot is unavailable.",
					test(value) {
						return timeSlots.includes(value);
					},
				}),
			guestNumber: Yup.number()
				.min(1, "Please select a value between 1 and 20")
				.max(20, "Please select a value between 1 and 20")
				.integer()
				.required(),
			occasion: Yup.string().required("Please select an occasion."),
		}),
	});
	const [timeSlots, updateTimeSlots] = useTimeSlots();
	useEffect(() => {
		onCanNavigateAwayChange(!formik.dirty);
	}, [onCanNavigateAwayChange, formik.dirty]);
	return (
		<Stack spacing={4} marginY={6}>
			<h1 className="section-heading">Reservation details</h1>
			<Grid spacing={4} container>
				<Grid size={{ md: 6, xs: 12 }}>
					<ReservationDetailsForm
						form={formik}
						timeSlots={timeSlots}
						updateTimeSlots={updateTimeSlots}
					/>
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
				form="reservation-details-form"
				color="secondary"
				variant="contained"
				disabled={!formik.isValid}
				type="submit"
			>
				Next
			</Button>
		</Stack>
	);
}

export default Step1;
