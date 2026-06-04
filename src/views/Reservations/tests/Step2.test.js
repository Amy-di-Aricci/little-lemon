import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReservationContextProvider } from "contexts/ReservationContext";
import Step2ContactDetails from "../steps/Step2ContactDetails";

describe("Step 2 form", () => {
	test("Filling form with valid data should activate Next button", async () => {
		const onStepChange = jest.fn();
		const user = userEvent.setup();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step2ContactDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);
		await fillStep2("John Smith", "john.smith@mail.com");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeEnabled();
		await user.click(button);
		expect(onStepChange).toHaveBeenCalled();
	});
	test("Button should be inactive with empty name", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step2ContactDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);
		await fillStep2(null, "john.smith@mail.com", "+48123123123");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with empty email", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step2ContactDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);
		await fillStep2("John Smith", null);

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with invalid email", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step2ContactDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);
		await fillStep2("John Smith", "abcd");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with invalid phone number", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step2ContactDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);
		await fillStep2("John Smith", "john.smith@mail.com", "abcd123");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
});

async function fillStep2(name, email, phone) {
	const user = userEvent.setup();

	const nameInput = await screen.findByLabelText(/name/i);
	await user.clear(nameInput);
	if (name) {
		await user.type(nameInput, String(name));
	}

	const emailInput = await screen.findByLabelText(/e-mail address/i);
	await user.clear(emailInput);
	if (email) {
		await user.type(emailInput, String(email));
	}

	const phoneInput = await screen.findByLabelText(/phone number/i);
	await user.clear(phoneInput);
	if (phone) {
		await user.type(phoneInput, String(phone));
	}
}
