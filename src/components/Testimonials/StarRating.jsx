import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const { Stack } = require("@mui/material");

function StarRating({ rating }) {
	return (
		<Stack
			direction={"row"}
			sx={{
				marginInline: "auto",
			}}
		>
			{Array.from({ length: rating }).map((it, index) => (
				<StarIcon color="secondary" key={index} />
			))}
			{Array.from({ length: 5 - rating }).map((it, index) => (
				<StarOutlineIcon color="secondary" key={index} />
			))}
		</Stack>
	);
}

export default StarRating;
