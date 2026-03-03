import { useState } from "react";
import {
	Link,
	Stack,
	IconButton,
	Drawer,
	List,
	ListItem,
	Box,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "assets/logo_default.png";
import "index.css";
import "./Nav.css";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Menu", href: "/#menu" },
	{ label: "Reservations", href: "/reservations" },
	{ label: "Order online", href: "/order" },
	{ label: "Login", href: "/login" },
];

function Nav() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<nav>
			<Stack
				className="nav-bar container"
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<img height="64" src={logo} alt="Little Lemon logo" />
				{
					/*Horizontal menu for desktop*/
					isDesktop ? (
						<Stack className="links-list" direction="row" spacing={2}>
							{navLinks.map(({ label, href }) => (
								<Link key={label} href={href}>
									{label}
								</Link>
							))}
						</Stack>
					) : (
						/*Hamburger menu for tablet and mobile viewports*/
						<>
							<IconButton
								size="large"
								onClick={() => setDrawerOpen(true)}
								aria-label="Open navigation menu"
							>
								<MenuIcon color="primary" fontSize="medium" />
							</IconButton>

							<Drawer
								anchor="right"
								open={drawerOpen}
								onClose={() => setDrawerOpen(false)}
							>
								<Box sx={{ width: 320 }}>
									<nav>
										<Box
											sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
										>
											<IconButton
												onClick={() => setDrawerOpen(false)}
												aria-label="Close navigation menu"
											>
												<CloseIcon />
											</IconButton>
										</Box>
										<List className="links-list">
											{navLinks.map(({ label, href }) => (
												<ListItem key={label} disablePadding>
													<Link key={label} href={href}>
														{label}
													</Link>
												</ListItem>
											))}
										</List>
									</nav>
								</Box>
							</Drawer>
						</>
					)
				}
			</Stack>
		</nav>
	);
}

export default Nav;
