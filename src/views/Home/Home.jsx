import HeaderSection from "./HeaderSection";
import Main from "components/Main";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";

function Home() {
	return (
		<>
			<HeaderSection />
			<Main>
				<SpecialsSection />
				<TestimonialsSection />
				<AboutSection />
			</Main>
		</>
	);
}

export default Home;
