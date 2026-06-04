import { Stack, Button } from "@mui/material";
import { Link } from "react-router";

const { default: SpecialsCarousel } = require("components/Specials/Specials");

function SpecialsSection() {
	return (
		<section id="menu">
			<Stack className="container" direction="column" spacing={6}>
				<Stack
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "24px",
					}}
					direction="row"
				>
					<h1 className="section-heading">Specials</h1>
					<Button
						component={Link}
						to="/order"
						color="secondary"
						variant="contained"
						size="medium"
						sx={{
							width: "auto",
						}}
					>
						Online menu
					</Button>
				</Stack>
				<SpecialsCarousel />
			</Stack>
		</section>
	);
}

export default SpecialsSection;
