import HeaderSection from "./HeaderSection";
import Main from "components/Main";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSection";

function Home() {
	return (
		<>
			<HeaderSection />
			<Main>
				<SpecialsSection />
				<TestimonialsSection />
			</Main>
		</>
	);
}

export default Home;
