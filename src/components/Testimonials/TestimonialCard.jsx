import StarRating from "./StarRating";
import "./Testimonials.css";
const { Stack, Avatar, Card } = require("@mui/material");

function TestimonialCard({ image, name, description, rating }) {
	return (
		<Card
			sx={{
				height: "100%",
			}}
		>
			<Stack gap={2} padding={3}>
				<Stack direction={"row"} alignContent="center" gap={2}>
					<Avatar
						sx={{
							width: 80,
							height: 80,
						}}
						alt={name}
						src={image}
					/>
					<Stack>
						<h1 className="testimonial-card-title">{name}</h1>
						<StarRating rating={rating} />
					</Stack>
				</Stack>
				<p>{description}</p>
			</Stack>
		</Card>
	);
}
export default TestimonialCard;
