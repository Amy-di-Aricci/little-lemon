import ashleyImg from "assets/uifaces-human-avatar-female.jpg";
import tylerImg from "assets/uifaces-human-avatar-male.jpg";
import michaelImg from "assets/uifaces-popular-avatar.jpg";
import TrippletContainer from "components/Tripplet/TrippletContainer";
import TestimonialCard from "./TestimonialCard";

const cardItems = [
	{
		image: ashleyImg,
		name: "Ashley",
		description:
			"Tasty food, relaxed atmosphere and reasonable pricing. Totally recommended!",
		rating: 5,
	},
	{
		image: tylerImg,
		name: "Tyler",
		description:
			"Every dish we ordered was bursting with flavor, and the presentation was just as impressive. The staff was friendly, attentive, and made sure we had everything we needed.",
		rating: 5,
	},
	{
		image: michaelImg,
		name: "Michael",
		description:
			"Whether you're out for a romantic date or a casual dinner with friends, the ambiance here is unmatched. No wonder it's among the best-reviewed restaurants near me!",
		rating: 5,
	},
];

function Testimonials() {
	return (
		<TrippletContainer>
			{cardItems.map(({ image, name, description, rating }) => (
				<TestimonialCard
					image={image}
					name={name}
					description={description}
					rating={rating}
				/>
			))}
		</TrippletContainer>
	);
}
export default Testimonials;
