import HeaderSection from "./HeaderSection";
import Main from "components/Main";
import SpecialsSection from "./SpecialsSection";

function Home() {
	return (
		<>
			<HeaderSection />
			<Main>
				<SpecialsSection />
			</Main>
		</>
	);
}

export default Home;
