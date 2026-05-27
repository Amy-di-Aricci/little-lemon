import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Reservations from "./Reservations";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

describe("Reservations page rendering behavior", () => {
	test("Stepper starts with 1st step and other disabled", async () => {
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Reservations />
			</LocalizationProvider>,
		);

		const stepper = await screen.findByTestId("stepper");

		expect(
			await screen.findByRole("heading", { name: /Reservation details/i }),
		).toBeInTheDocument();

		const stepperButtons = within(stepper).getAllByRole("button");
		expect(stepperButtons[1]).toBeDisabled();
		expect(stepperButtons[2]).toBeDisabled();
	});
});
