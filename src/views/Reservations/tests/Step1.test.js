import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
jest.mock("hooks/useTimeSlots", () => ({
	useTimeSlots: jest.fn(),
}));
import { useTimeSlots } from "hooks/useTimeSlots";
var mockedDate = null;
jest.mock("@mui/x-date-pickers", () => {
	return {
		DatePicker: ({ onChange }) => (
			<button type="button" onClick={() => onChange(mockedDate)}>
				Select date
			</button>
		),
	};
});
import Step1ReservationDetails from "../steps/Step1ReservationDetails";
import { ReservationContextProvider } from "contexts/ReservationContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

describe("Step 1 behavior", () => {
	beforeEach(() => {
		useTimeSlots.mockReturnValue([["10:00", "11:00", "12:00"], jest.fn()]);
	});

	test("Filling form with valid data should activate Next button", async () => {
		const user = userEvent.setup();
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2026-06-15", "10:00", "Birthday", 2, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeEnabled();
		await user.click(button);
		expect(onStepChange).toHaveBeenCalled();
	});

	test("Button should be inactive with empty date", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("", "10:00", "Birthday", 2, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with empty time", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2025-06-20", null, "Birthday", 2, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with empty guest number", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2025-06-20", "11:00", "Birthday", null, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with guest number lesser than 1", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2025-06-20", "11:00", "Birthday", 0, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with guest number greater than 20", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2025-06-20", "11:00", "Birthday", 42, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
	test("Button should be inactive with no occasion selected", async () => {
		const onStepChange = jest.fn();
		render(
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ReservationContextProvider>
					<Step1ReservationDetails
						onStepChange={onStepChange}
						onCanNavigateAwayChange={jest.fn()}
					/>
				</ReservationContextProvider>
			</LocalizationProvider>,
		);

		await fillStep1("2025-06-20", "11:00", null, 2, "");

		const button = await screen.findByRole("button", { name: /next/i });

		expect(button).toBeDisabled();
	});
});

async function fillStep1(date, time, occasion, guestNumber, note) {
	const user = userEvent.setup();
	const dayjs = require("dayjs");

	if (date) {
		mockedDate = dayjs(date);
		await user.click(screen.getByRole("button", { name: /select date/i }));
	} else {
		mockedDate = null;
		await user.click(screen.getByRole("button", { name: /select date/i }));
	}

	await act(async () => {});

	if (time != null) {
		await user.click(screen.getByRole("combobox", { name: /time/i }));
		await user.click(await screen.findByRole("option", { name: time }));
	}
	await act(async () => {});

	if (occasion != null) {
		await user.click(screen.getByRole("combobox", { name: /occasion/i }));
		await user.click(await screen.findByRole("option", { name: occasion }));
	}

	const guestsInput = screen.getByLabelText(/no. of guests/i);

	await user.clear(guestsInput);
	if (guestNumber != null) {
		await user.type(guestsInput, String(guestNumber));
	}

	if (note?.length) {
		await user.type(screen.getByLabelText(/note/i), note);
	}
}
