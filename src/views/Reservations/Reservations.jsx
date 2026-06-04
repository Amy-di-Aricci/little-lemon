import Main from "components/Main";
import HeaderSection from "./HeaderSection";
import { Outlet } from "react-router";

function Reservations() {
	return (
		<>
			<HeaderSection />
			<Main>
				<Outlet />
			</Main>
		</>
	);
}
export default Reservations;
