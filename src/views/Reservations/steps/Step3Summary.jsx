import { Stack } from "@mui/material";
import { useReservationContext } from "contexts/ReservationContext";
function Step3() {
	const { formData } = useReservationContext();
	return (
		<Stack>
			<h1 className="section-heading">Summary</h1>
		</Stack>
	);
}

export default Step3;
