import { Stack } from "@mui/material";
import frontImg from "assets/louis-hansel-v3OlBE6-fhU-unsplash.jpg";
import backImg from "assets/louis-hansel-0sYLBZjgTTw-unsplash.jpg";
import PhotoStack from "components/PhotoStack/PhotoStack";

function AboutSection() {
	return (
		<section>
			<Stack className="container" direction="column" spacing={6}>
				<h1 className="section-heading">About Us</h1>
				<Stack direction="row">
					<PhotoStack
						imgFront={frontImg}
						imgBack={backImg}
						altTextFront="A chef finishing the dish"
						altTextBack="Illustration of the cooking process"
					/>
				</Stack>
			</Stack>
		</section>
	);
}
export default AboutSection;
