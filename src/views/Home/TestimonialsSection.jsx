import { Stack } from "@mui/material";
import Testimonials from "components/Testimonials/Testimonials";
function TestimonialsSection() {
	return (
		<section>
			<Stack className="container" direction="column" spacing={6}>
				<h1 className="section-heading">Testimonials</h1>
				<Testimonials />
			</Stack>
		</section>
	);
}

export default TestimonialsSection;
