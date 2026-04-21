import "./PhotoStack.css";
function PhotoStack({ imgFront, imgBack, altTextFront, altTextBack }) {
	return (
		<div className="img-stack">
			<img className="img-front" src={imgFront} alt={altTextFront} />
			<img className="img-back" src={imgBack} alt={altTextBack} />
		</div>
	);
}

export default PhotoStack;
