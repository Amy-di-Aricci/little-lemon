import SpecialsCard from "./SpecialsCard";
import greekSaladImg from "assets/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg";
import bruschettaImg from "assets/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg";
import grilledFishImg from "assets/871655af5e4849aa43a6d293284825002e7aeb50.jpg";
import { Grid } from "@mui/material";
import "./Specials.css";

const cardItems = [
	{
		image: greekSaladImg,
		title: "Greek salad",
		description:
			"A traditional greek salad made of sliced cucumbers, tomatoes, green bell pepper, red onion, olives and feta cheese.",
	},
	{
		image: bruschettaImg,
		title: "Bruschetta",
		description:
			"Classic grilled ciabatta, rubbed with raw garlic, drizzled with olive oil and topped with fresh tomatoes.",
	},
	{
		image: grilledFishImg,
		title: "Grilled fish",
		description:
			"Whole fish, charred to perfection, seasoned with lemon, olive oil and herbs.",
	},
];

function SpecialsCarousel() {
	return (
		<>
			<Grid container alignItems={"stretch"} spacing={2}>
				{cardItems.map(({ image, title, description }) => (
					<Grid
						key={title}
						size={{
							xs: 12,
							md: 4,
						}}
					>
						<SpecialsCard
							image={image}
							title={title}
							description={description}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default SpecialsCarousel;
