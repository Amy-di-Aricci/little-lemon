import { Stack } from "@mui/material";

import ReservationDetailsForm from "../forms/ReservationDetailsForm";

function Step1({ onStepChange }) {
	return (
		<Stack>
			<Stack marginY={6}>
				<h1 className="section-heading">Reservation details</h1>
				<ReservationDetailsForm onStepChange={onStepChange} />
			</Stack>
		</Stack>
	);
}

export default Step1;
