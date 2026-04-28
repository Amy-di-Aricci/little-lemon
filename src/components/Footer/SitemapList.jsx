import { navLinks } from "globals/navConfig";
import { Stack, Link } from "@mui/material";

function SitemapList() {
	return (
		<Stack className="sitemap-list" gap={2}>
			{navLinks.map(({ label, href }) => (
				<Link key={label} href={href}>
					{label}
				</Link>
			))}
		</Stack>
	);
}

export default SitemapList;
