import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
let mockCanNavigateAway = true;
jest.mock("./steps/Step1ReservationDetails", () => {
	return function MockStep1({ onStepChange, onCanNavigateAwayChange }) {
		return (
			<>
				<h1>Step 1</h1>

				<button
					onClick={() => {
						onCanNavigateAwayChange(mockCanNavigateAway);
						onStepChange();
					}}
				>
					Next
				</button>
			</>
		);
	};
});
jest.mock("./steps/Step2ContactDetails", () => {
	return function MockStep2({ onStepChange, onCanNavigateAwayChange }) {
		return (
			<>
				<h1>Step 2</h1>

				<button
					onClick={() => {
						onCanNavigateAwayChange(mockCanNavigateAway);
						onStepChange();
					}}
				>
					Next
				</button>
			</>
		);
	};
});
import Reservations from "./Reservations";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

describe("Reservations page rendering behavior", () => {
	test("Stepper starts with 1st step and other disabled", async () => {
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Reservations />
			</LocalizationProvider>,
		);

		const stepper = await screen.findByTestId("stepper");

		expect(
			await screen.findByRole("heading", { name: /Step 1/i }),
		).toBeInTheDocument();

		const stepperButtons = within(stepper).getAllByRole("button");
		expect(stepperButtons[1]).toBeDisabled();
		expect(stepperButtons[2]).toBeDisabled();
	});

	test("User should be able to return to step 1 after entering step 2", async () => {
		const user = userEvent.setup();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Reservations />
			</LocalizationProvider>,
		);

		const button = await screen.findByText(/Next/i);

		await user.click(button);

		expect(
			await screen.findByRole("heading", { name: /Step 2/i }),
		).toBeInTheDocument();

		const stepper = await screen.findByTestId("stepper");
		const stepperButtons = within(stepper).getAllByRole("button");
		expect(stepperButtons[0]).toBeEnabled();
		expect(stepperButtons[1]).toBeEnabled();

		await user.click(stepperButtons[0]);

		expect(
			await screen.findByRole("heading", { name: /Step 1/i }),
		).toBeInTheDocument();
	});

	test("User should be able to return to step 1 after clicking accept button on dialog", async () => {
		mockCanNavigateAway = false;
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Reservations />
			</LocalizationProvider>,
		);
		const user = userEvent.setup();

		const button = await screen.findByText(/Next/i);

		await user.click(button);

		expect(
			await screen.findByRole("heading", { name: /Step 2/i }),
		).toBeInTheDocument();

		const stepper = await screen.findByTestId("stepper");
		const stepperButtons = within(stepper).getAllByRole("button");

		await user.click(stepperButtons[0]);

		const dialog = await screen.findByTestId("unsaved-changes-dialog");
		expect(dialog).toBeInTheDocument();
		const acceptButton = await screen.findByTestId("accept-button");
		await user.click(acceptButton);

		expect(
			await screen.findByRole("heading", { name: /Step 1/i }),
		).toBeInTheDocument();
	});

	test("User should stay in current step after clicking cancel button in dialog", async () => {
		mockCanNavigateAway = false;
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Reservations />
			</LocalizationProvider>,
		);
		const user = userEvent.setup();

		const button = await screen.findByText(/Next/i);

		await user.click(button);

		expect(
			await screen.findByRole("heading", { name: /Step 2/i }),
		).toBeInTheDocument();

		const stepper = await screen.findByTestId("stepper");
		const stepperButtons = within(stepper).getAllByRole("button");

		await user.click(stepperButtons[0]);

		const dialog = await screen.findByTestId("unsaved-changes-dialog");
		expect(dialog).toBeInTheDocument();
		const cancelButton = await screen.findByTestId("cancel-button");
		await user.click(cancelButton);

		expect(
			await screen.findByRole("heading", { name: /Step 2/i }),
		).toBeInTheDocument();
	});
});
