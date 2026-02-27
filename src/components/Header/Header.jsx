import "./Header.css";

function Header({
	image,
	imageOpacity = 0.33,
	imagePosition = "center",
	imageBrightness = 1,
	backgroundColor = "#333333",
	height = 424,
	children,
}) {
	const headerStyle = {
		"--bg-image": `url(${image})`,
		"--bg-opacity": imageOpacity,
		"--bg-position": imagePosition,
		"--bg-brightness": imageBrightness,
		minHeight: height,
		backgroundColor,
	};

	return (
		<header className="header" style={headerStyle}>
			<div className="container header-content">{children}</div>
		</header>
	);
}

export default Header;
