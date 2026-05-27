import { Box, Stack } from "@mui/material";
function InformationPanel() {
	return (
		<Box
			sx={{
				borderRadius: "16px",
				boxShadow: "var(--black-shadow)",
				bgcolor: "primary.background",
				paddingY: 3,
				paddingX: 2,
			}}
		>
			<Stack spacing={2}>
				<h2 className="section-subheading">Opening hours</h2>
				<p>
					We are open daily from 10:00 AM to 10:00 PM. Online reservations are
					available up to 30 minutes before closing.
				</p>
				<h2 className="section-subheading">Reservation policy</h2>
				<p>
					Reservations can be modified or cancelled up to 24 hours before your
					booking time using the link in your confirmation e-mail.
				</p>
				<h2 className="section-subheading">Additional information</h2>
				<p>
					Please inform us about any allergies or special requests in the note
					section. If you are running late, we kindly ask you to contact the
					restaurant.
				</p>
			</Stack>
		</Box>
	);
}

export default InformationPanel;
