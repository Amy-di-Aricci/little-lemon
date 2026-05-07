import { IconButton, Button, Stack, Divider } from "@mui/material";
import "./Stepper.css";
function Stepper({ steps, currentStep, furthestStep, onChangeStep, children }) {
	return (
		<>
			<Stack
				justifyContent={"center"}
				direction={"row"}
				className="container"
				spacing={6}
			>
				{steps.map((step, index) => {
					var bgColor = "var(--secondary-lighten)";
					var textColor = "var(--secondary-darken)";
					if (index === currentStep) {
						bgColor = "var(--secondary-color)";
						textColor = "var(--secondary-darkest)";
					}
					return (
						<>
							<Stack key={index} alignItems={"center"}>
								<Button
									disabled={index > furthestStep}
									variant="contained"
									sx={{
										backgroundColor: bgColor,
										color: textColor,
										boxShadow: "var(--black-shadow)",
										"&:hover": {
											backgroundColor: bgColor,
											filter: "brightness(0.97)",
											boxShadow: "var(--black-shadow)",
										},
										minWidth: 24,
										minHeight: 24,
										width: 28,
										height: 28,
										borderRadius: "50%",
										padding: 0,
										fontWeight: 700,
									}}
									className="step-number"
								>
									{index + 1}
								</Button>
								<p>{step}</p>
							</Stack>
						</>
					);
				})}
			</Stack>

			<Divider
				sx={{
					marginY: "1.5rem",
				}}
			/>
			{children[currentStep]}
		</>
	);
}

export default Stepper;
