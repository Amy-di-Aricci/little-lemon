import { Button, Stack, Divider } from "@mui/material";
import "./Stepper.css";
function Stepper({
	steps,
	currentStep = 0,
	furthestStep = 0,
	onChangeStep,
	children,
}) {
	return (
		<>
			<Stack
				data-testid="stepper"
				justifyContent={"center"}
				direction={"row"}
				className="container"
				spacing={6}
			>
				{steps.map((step, index) => {
					return (
						<Stack key={index} alignItems={"center"}>
							<Button
								onClick={() => {
									onChangeStep(index);
								}}
								disabled={index > furthestStep}
								aria-labelledby={`step-${index}-label`}
								aria-current={index === currentStep ? "step" : undefined}
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
							<p id={`step-${index}-label`}>{step}</p>
						</Stack>
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
