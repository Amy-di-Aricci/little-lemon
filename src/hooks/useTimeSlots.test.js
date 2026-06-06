import { renderHook, act, waitFor } from "@testing-library/react";
import { useTimeSlots } from "./useTimeSlots";
import dayjs from "dayjs";
describe("useTimeSlots hook tests", () => {
	test("Initializes with an array", () => {
		const { result } = renderHook(() => useTimeSlots());
		const [timeSlots, dispatch] = result.current;
		expect(Array.isArray(timeSlots)).toBe(true);
	});
	test("Returns an array after dispatching new date", () => {
		const { result } = renderHook(() => useTimeSlots());
		const [timeSlots, dispatch] = result.current;
		waitFor(() => {
			dispatch(dayjs("2026-03-13"));
		});

		expect(Array.isArray(timeSlots)).toBe(true);
	});
	test("Returns array of strings in HH:mm format", () => {
		const { result } = renderHook(() => useTimeSlots());
		const [timeSlots, dispatch] = result.current;
		waitFor(() => {
			dispatch(dayjs("2026-03-13"));
		});

		expect(Array.isArray(timeSlots)).toBe(true);
		expect(timeSlots.length).toBeGreaterThanOrEqual(0);

		timeSlots.forEach((slot) => {
			expect(slot).toMatch(/^\d{2}:\d{2}$/);
		});
	});
});
