import Stepper from "components/Stepper/Stepper";
import { Stack } from "@mui/material";
import { useState } from "react";
import Step1 from "./Step1ReservationDetails";
import Step2 from "./Step2ContactDetails";
import Step3 from "./Step3Summary";

function StepperSection() {
	const [currentStep, setCurrentStep] = useState(0);
	const [furthestStep, setFurthestStep] = useState(0);

	const handleStepChange = (index) => {
		setCurrentStep(index);
		setFurthestStep((prev) => Math.max(prev, index));
	};

	const stepLabels = ["Reservation details", "Contact details", "Summary"];
	return (
		<>
			<Stack className="container" marginTop={3} marginBottom={6}>
				<Stepper
					steps={stepLabels}
					currentStep={currentStep}
					furthestStep={furthestStep}
					onChangeStep={handleStepChange}
				>
					<Step1 onStepChange={() => handleStepChange(1)} />
					<Step2 onStepChange={() => handleStepChange(2)} />
					<Step3 />
				</Stepper>
			</Stack>
		</>
	);
}
export default StepperSection;
