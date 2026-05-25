import { Grid, Stack, TextField } from "@mui/material";

function ContactDetailsForm({ form }) {
	const { touched, errors, getFieldProps, handleSubmit } = form;
	return (
		<form id="contact-details-form" onSubmit={handleSubmit}>
			<Grid container spacing={4}>
				<Grid size={{ md: 6, xs: 12 }}>
					<Stack spacing={4}>
						<TextField
							{...getFieldProps("name")}
							error={touched.name && errors.name !== undefined}
							helperText={touched.name && errors.name}
							label="Name"
						/>
						<TextField
							{...getFieldProps("email")}
							error={touched.email && errors.email !== undefined}
							helperText={touched.email && errors.email}
							label="E-mail address"
						/>
						<TextField
							{...getFieldProps("phoneNumber")}
							error={touched.phoneNumber && errors.phoneNumber !== undefined}
							helperText={touched.phoneNumber && errors.phoneNumber}
							label="Phone number"
						/>
					</Stack>
				</Grid>
			</Grid>
			<p>
				You will receive status updates on your reservation via provided e-mail
				address.
			</p>
		</form>
	);
}

export default ContactDetailsForm;
