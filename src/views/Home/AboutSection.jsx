import { Stack, useMediaQuery, useTheme } from "@mui/material";
import frontImg from "assets/louis-hansel-v3OlBE6-fhU-unsplash.jpg";
import backImg from "assets/louis-hansel-0sYLBZjgTTw-unsplash.jpg";
import PhotoStack from "components/PhotoStack/PhotoStack";

function AboutSection() {
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<section id="about">
			<Stack
				className="container"
				direction={{ md: "row", xs: "column" }}
				spacing={6}
			>
				<Stack direction="column" spacing={6}>
					<h1 className="section-heading">About Us</h1>
					<Stack direction="column" spacing={2}>
						<h1 className="promo-text">
							A Slice of the Mediterranean, Rooted in Tradition.
						</h1>
						<p>
							Welcome to Little Lemon, where the vibrant flavors of the
							Mediterranean meet the warmth of an Italian home. Our story began
							with a simple vision: to create a space where time slows down, and
							every meal feels like a sun-drenched afternoon on the coast.
							Founded by a family with deep Italian roots, Little Lemon is a
							tribute to our heritage—a celebration of simple recipes, loud
							laughter, and the joy of sharing a table with loved ones.
						</p>
						<h1 className="promo-text">Freshness First</h1>
						<p>
							At Little Lemon, we believe that great food starts in the soil and
							the sea. We are obsessed with fresh, seasonal ingredients. From
							hand-picked herbs and cold-pressed olive oil to zest-filled citrus
							and daily-caught seafood, our kitchen honors the natural flavors
							of the Mediterranean. No fuss, no shortcuts—just honest food made
							from scratch.
						</p>
						<h1 className="promo-text">Relaxed & Soulful</h1>
						<p>
							Whether you're here for a breezy lunch or a lingering dinner under
							the glow of our lemon trees, our atmosphere is always relaxed and
							welcoming. We've traded white tablecloths for a laid-back vibe
							that invites you to stay a little longer, sip a little slower, and
							truly savor the moment.
						</p>
						<p>Come for the food, stay for the feeling.</p>
					</Stack>
				</Stack>
				{isMedium ? (
					<PhotoStack
						imgFront={frontImg}
						imgBack={backImg}
						altTextFront="A chef finishing the dish"
						altTextBack="Illustration of the cooking process"
					/>
				) : (
					<></>
				)}
			</Stack>
			{!isMedium ? (
				<img
					className="img-full-width"
					src={frontImg}
					alt="A chef finishing the dish"
				/>
			) : (
				<></>
			)}
		</section>
	);
}
export default AboutSection;
