import { Stack, Grid, TextField, Divider, Button } from "@mui/material";
function Step2({ onStepChange }) {
	return (
		<Stack>
			<Stack marginY={6}>
				<h1 className="section-heading">Contact details</h1>
			</Stack>
			<form>
				<Stack spacing={4}>
					<Grid container spacing={4}>
						<Grid size={{ md: 6, xs: 12 }}>
							<Stack spacing={4}>
								<TextField label="Name" />
								<TextField label="E-mail address" />
								<TextField label="Phone number" />
							</Stack>
						</Grid>
					</Grid>
					<p>
						You will receive status updates on your reservation via provided
						e-mail address.
					</p>

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

export default Step2;
