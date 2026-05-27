import Header from "components/Header/Header";
import background from "assets/juliana-morales-ramirez-S_QSAXoUec8-unsplash.jpg";
import { Stack } from "@mui/material";

function HeaderSection() {
	return (
		<Header
			image={background}
			height={256}
			imagePosition="50% 80%"
			imageBrightness={0.75}
			imageOpacity={0.33}
		>
			<Stack className="container" direction={"row"}>
				<h1 className="white headline no-margin">Reserve a table</h1>
			</Stack>
		</Header>
	);
}

export default HeaderSection;
