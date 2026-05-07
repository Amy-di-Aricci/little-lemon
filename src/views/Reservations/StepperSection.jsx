import Stepper from "components/Stepper/Stepper";
import { Stack } from "@mui/material";
import { useState } from "react";

function StepperSection() {
	const [currentStep, setCurrentStep] = useState(1);
	const [furthestStep, setFurthestStep] = useState(1);

	const stepLabels = ["Reservation details", "Contact details", "Summary"];
	return (
		<>
			<Stack className="container" marginTop={3} marginBottom={6}>
				<Stepper
					steps={stepLabels}
					currentStep={currentStep}
					furthestStep={furthestStep}
				>
					<h1>Step1</h1>
					<h1>Step2</h1>
				</Stepper>
			</Stack>
		</>
	);
}
export default StepperSection;
