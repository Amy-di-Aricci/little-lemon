import { Stack, Grid, TextField, Divider, Button } from "@mui/material";
import { useState } from "react";
function Step2({ onStepChange }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		onStepChange();
	};
	return (
		<Stack>
			<Stack marginY={6}>
				<h1 className="section-heading">Contact details</h1>
			</Stack>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<Grid container spacing={4}>
						<Grid size={{ md: 6, xs: 12 }}>
							<Stack spacing={4}>
								<TextField
									value={name}
									onChange={(e) => setName(e.target.value)}
									label="Name"
								/>
								<TextField
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									label="E-mail address"
								/>
								<TextField
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									label="Phone number"
								/>
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
