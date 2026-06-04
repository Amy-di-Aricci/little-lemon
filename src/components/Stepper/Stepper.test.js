import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stepper from "./Stepper";
describe("Stepper behavior", () => {
	test("Initial state renders 1st and has further steps disabled", async () => {
		render(
			<Stepper steps={["1", "2", "3"]} onChangeStep={jest.fn()}>
				<div>Step 1</div>
				<div>Step 2</div>
				<div>Step 3</div>
			</Stepper>,
		);
		expect(await screen.findByText("Step 1")).toBeInTheDocument();
		const stepperButtons = await screen.findAllByRole("button");
		expect(stepperButtons[1]).toBeDisabled();
		expect(stepperButtons[2]).toBeDisabled();
	});

	test("Steps lower and equal to furthestStep should be active", async () => {
		const onChangeStep = jest.fn();
		const user = userEvent.setup();

		render(
			<Stepper
				steps={["1", "2", "3", "4"]}
				currentStep={0}
				furthestStep={2}
				onChangeStep={onChangeStep}
			>
				<div>Step 1</div>
				<div>Step 2</div>
				<div>Step 3</div>
				<div>Step 4</div>
			</Stepper>,
		);
		const stepperButtons = await screen.findAllByRole("button");

		expect(stepperButtons[0]).toBeEnabled();
		expect(stepperButtons[1]).toBeEnabled();
		expect(stepperButtons[2]).toBeEnabled();

		await user.click(stepperButtons[2]);

		expect(onChangeStep).toHaveBeenCalledWith(2);
	});

	test("Steps higher than furthestStep should be inactive", async () => {
		const onChangeStep = jest.fn();

		render(
			<Stepper
				steps={["1", "2", "3", "4"]}
				currentStep={0}
				furthestStep={2}
				onChangeStep={onChangeStep}
			>
				<div>Step 1</div>
				<div>Step 2</div>
				<div>Step 3</div>
				<div>Step 4</div>
			</Stepper>,
		);
		const stepperButtons = await screen.findAllByRole("button");
		expect(stepperButtons[3]).toBeDisabled();
	});

	test("Only selected step is rendered", async () => {
		render(
			<Stepper
				steps={["1", "2", "3"]}
				currentStep={2}
				furthestStep={2}
				onChangeStep={jest.fn()}
			>
				<div>Step 1</div>
				<div>Step 2</div>
				<div>Step 3</div>
			</Stepper>,
		);

		expect(await screen.findByText("Step 3")).toBeInTheDocument();
		expect(await screen.queryByText("Step 1")).not.toBeInTheDocument();
		expect(await screen.queryByText("Step 2")).not.toBeInTheDocument();
	});
});
