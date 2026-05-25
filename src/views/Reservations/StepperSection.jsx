import Stepper from "components/Stepper/Stepper";
import { Stack } from "@mui/material";
import { useState } from "react";
import Step1 from "./steps/Step1ReservationDetails";
import Step2 from "./steps/Step2ContactDetails";
import Step3 from "./steps/Step3Summary";
import UnsavedChangesDialog from "./components/UnsavedChangesDialog";
import { ReservationContextProvider } from "contexts/ReservationContext";

function StepperSection() {
	const [currentStep, setCurrentStep] = useState(0);
	const [furthestStep, setFurthestStep] = useState(0);
	const [canStepChange, setCanStepChange] = useState(false);
	const [pendingStep, setPendingStep] = useState(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleStepChange = (index) => {
		if (!canStepChange) {
			setPendingStep(index);
			setDialogOpen(true);
		} else {
			setCurrentStep(index);
			setFurthestStep((prev) => Math.max(prev, index));
		}
	};

	const handleNext = (index) => {
		setCurrentStep(index);
		setFurthestStep((prev) => Math.max(prev, index));
	};

	const handlePendingStep = () => {
		if (pendingStep !== null) {
			setCurrentStep(pendingStep);
			setPendingStep(null);
		}
		setDialogOpen(false);
	};

	const stepLabels = ["Reservation details", "Contact details", "Summary"];
	return (
		<>
			<Stack className="container" marginTop={3} marginBottom={6}>
				<ReservationContextProvider>
					<Stepper
						steps={stepLabels}
						currentStep={currentStep}
						furthestStep={furthestStep}
						onChangeStep={handleStepChange}
					>
						<Step1
							onStepChange={() => handleNext(1)}
							onCanNavigateAwayChange={setCanStepChange}
						/>
						<Step2
							onStepChange={() => handleNext(2)}
							onCanNavigateAwayChange={setCanStepChange}
						/>
						<Step3 />
					</Stepper>
				</ReservationContextProvider>
			</Stack>
			<UnsavedChangesDialog
				open={dialogOpen}
				onDiscard={() => setDialogOpen(false)}
				onAccept={handlePendingStep}
			/>
		</>
	);
}
export default StepperSection;
