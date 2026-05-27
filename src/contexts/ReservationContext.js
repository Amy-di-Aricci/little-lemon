import dayjs from "dayjs";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

export function ReservationContextProvider({ children }) {
	const [formData, setFormData] = useState({
		date: dayjs().startOf("day"),
		time: "",
		occasion: "",
		guestNumber: 1,
		note: "",
		name: "",
		email: "",
		phoneNumber: "",
	});

	function updateFormData(data) {
		setFormData((prev) => ({ ...prev, ...data }));
	}
	return (
		<ReservationContext.Provider value={{ formData, updateFormData }}>
			{children}
		</ReservationContext.Provider>
	);
}

export function useReservationContext() {
	return useContext(ReservationContext);
}
