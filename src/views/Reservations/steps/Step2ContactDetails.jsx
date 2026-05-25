import { Stack, Divider, Button } from "@mui/material";
import { useReservationContext } from "contexts/ReservationContext";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactDetailsForm from "../forms/ContactDetailsForm";
function Step2({ onStepChange, onCanNavigateAwayChange }) {
	const { formData, updateFormData } = useReservationContext();
	const phoneRegExp = /^\+?[\d\s\-()]+$/;
	const formik = useFormik({
		initialValues: {
			name: formData.name,
			email: formData.email,
			phoneNumber: formData.phoneNumber,
		},
		onSubmit: () => {
			updateFormData(formik.values);
			onStepChange();
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Please provide your name."),
			email: Yup.string()
				.required("Please provide your e-mail address.")
				.email("Provided e-mail address is invalid."),
			phoneNumber: Yup.string().matches(
				phoneRegExp,
				"Provided phone number is invalid.",
			),
		}),
	});
	useEffect(() => {
		onCanNavigateAwayChange(!formik.dirty);
	}, [onCanNavigateAwayChange, formik.dirty]);
	return (
		<Stack>
			<Stack marginY={6}>
				<h1 className="section-heading">Contact details</h1>
			</Stack>
			<Stack spacing={4}>
				<ContactDetailsForm form={formik} />
				<Divider />
				<Button
					form="contact-details-form"
					sx={{
						alignSelf: "flex-end",
						width: "auto",
						marginTop: "1.5rem",
					}}
					disabled={!formik.isValid}
					color="secondary"
					variant="contained"
					type="submit"
				>
					Next
				</Button>
			</Stack>
		</Stack>
	);
}

export default Step2;
