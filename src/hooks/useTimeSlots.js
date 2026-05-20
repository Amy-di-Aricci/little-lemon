import dayjs from "dayjs";
import { useMemo } from "react";
const generateTimeSlots = (selectedDate) => {
	const slots = [];

	const interval = 30;

	const isToday = selectedDate?.isSame(dayjs(), "day");

	let current = dayjs().hour(10).minute(0).second(0);
	const end = dayjs().hour(22).minute(0).second(0);

	if (isToday) {
		const now = dayjs();

		const roundedMinutes = Math.ceil(now.minute() / interval) * interval;

		const roundedNow = now.minute(0).second(0).add(roundedMinutes, "minute");

		if (roundedNow.isAfter(current)) {
			current = roundedNow;
		}
	}

	while (current.isBefore(end)) {
		slots.push(current.format("HH:mm"));
		current = current.add(interval, "minute");
	}

	return slots;
};

export const useTimeSlots = (date) => {
	const timeSlots = useMemo(() => {
		if (!date) return [];
		return generateTimeSlots(date);
	}, [date]);

	return timeSlots;
};
