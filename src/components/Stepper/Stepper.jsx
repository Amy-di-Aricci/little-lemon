import { Button, Stack, Divider } from "@mui/material";
import "./Stepper.css";
function Stepper({
	steps,
	currentStep,
	furthestStep,
	onChangeStep,

	children,
}) {
	return (
		<>
			<Stack
				justifyContent={"center"}
				direction={"row"}
				className="container"
				spacing={6}
			>
				{steps.map((step, index) => {
					return (
						<>
							<Stack key={index} alignItems={"center"}>
								<Button
									onClick={() => {
										onChangeStep(index);
									}}
									disabled={index > furthestStep}
									variant="contained"
									color={
										index === currentStep
											? "secondaryTextDarken"
											: "secondaryLighten"
									}
									sx={{
										minWidth: 24,
										minHeight: 24,
										width: 32,
										height: 32,
										borderRadius: "50%",
										borderWidth: "2px",
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
					marginTop: "1.5rem",
				}}
			/>
			{children[currentStep]}
		</>
	);
}

export default Stepper;
