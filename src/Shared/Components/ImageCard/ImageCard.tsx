import React from "react";
import { Card } from "./imagecard.styles";

const ImageCard: React.FC<{
	view?: string;
	width?: string;
	height?: string;
	padding?: string;
	src: string;
	imageHeight?: string;
	className?: string;
}> = ({ width, view, height, padding, src, imageHeight, className }) => {
	return (
		<Card
			width={width}
			height={height}
			padding={padding}
			view={view}
			className={className}
		>
			<img src={src} alt="" width={200} height={imageHeight} />
		</Card>
	);
};

export default ImageCard;
