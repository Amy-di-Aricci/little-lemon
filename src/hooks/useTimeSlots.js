import dayjs from "dayjs";
import { useReducer } from "react";
import { fetchAPI } from "api.js";

const initializeTimes = () => {
	try {
		return fetchAPI(dayjs().startOf("day").toDate());
	} catch (e) {
		return [];
	}
};

const updateTimes = (state, selectedDate) => {
	if (!selectedDate) return state;
	try {
		return fetchAPI(selectedDate.toDate());
	} catch (e) {
		return [];
	}
};

export const useTimeSlots = () => {
	const [timeSlots, dispatch] = useReducer(updateTimes, [], initializeTimes);

	return [timeSlots, dispatch];
};
