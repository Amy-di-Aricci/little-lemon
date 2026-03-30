import { Grid } from "@mui/material";
function TrippletContainer({ children }) {
	return (
		<Grid container alignItems={"stretch"} spacing={2}>
			{children.map((child, index) => (
				<Grid
					key={index}
					size={{
						xs: 12,
						md: 4,
					}}
				>
					{child}
				</Grid>
			))}
		</Grid>
	);
}
export default TrippletContainer;
