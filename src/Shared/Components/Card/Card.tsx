import React from "react";
import { ICardInterface } from "../../../Interfaces";
import { Container } from "./card.styles";

const Card: React.FC<ICardInterface> = ({
	width,
	height,
	borderRadius,
	hasBoxShadow,
	background,
	onHover,
	className,
	padding,
	allowBorders,
	color,
	children,
	onClick,
}) => {
	return (
		<Container
			width={typeof width === "number" ? width + "px" : width}
			color={color}
			height={typeof height === "number" ? height + "px" : height}
			borderRadius={
				typeof borderRadius === "number" ? borderRadius + "px" : borderRadius
			}
			hasBoxShadow={hasBoxShadow}
			allowBorders={allowBorders}
			background={background}
			className={className}
			onHover={onHover}
			onClick={onClick}
			padding={typeof padding === "number" ? padding + "px" : padding}
		>
			{children}
		</Container>
	);
};

Card.defaultProps = {
	width: 300,
	height: 100,
	borderRadius: 4,
	background: "white",
	onHover: true,
	className: "card",
};

export default Card;
