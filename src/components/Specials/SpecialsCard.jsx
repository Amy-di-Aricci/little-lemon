import { ChevronRight } from "@mui/icons-material";
import { Card, Stack, Link } from "@mui/material";

function SpecialsCard({ image, title, description }) {
	return (
		<>
			<Card className="specials-card">
				<Stack
					direction={{ md: "column", xs: "row" }}
					sx={{
						height: "100%",
					}}
				>
					<img src={image} alt={title}></img>
					<Stack
						className="specials-card-content"
						direction="column"
						spacing={2}
					>
						<h1 className="card-title">{title}</h1>

						<p>{description}</p>

						<Link className="specials-card-actions" onClick={() => {}}>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent={{
									md: "left",
									xs: "right",
								}}
							>
								<p>Order for delivery</p>
								<ChevronRight />
							</Stack>
						</Link>
					</Stack>
				</Stack>
			</Card>
		</>
	);
}

export default SpecialsCard;
