import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "views/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router";
import Reservations from "views/Reservations/Reservations";
import NotFound from "views/404/NotFound";
import ReservationSuccess from "views/Reservations/ReservationSuccess";
import StepperSection from "views/Reservations/StepperSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />}></Route>
					<Route path="reservations" element={<Reservations />}>
						<Route index element={<StepperSection />} />
						<Route path="success" element={<ReservationSuccess />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
