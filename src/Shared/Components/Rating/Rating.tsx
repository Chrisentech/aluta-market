import { BsStarFill, BsStarHalf } from "react-icons/bs";
import React from "react";

const Rating: React.FC<{ numberOfRates: number; starColor?: string }> = ({
	numberOfRates,
	starColor,
}) => {
	// Function to calculate the number of filled stars and half-filled stars
	const getStars = (num: number): [number, number] => {
		const filledStars = Math.floor(num / 2);
		const halfStar = num % 2 ? 1 : 0;
		return [filledStars, halfStar];
	};

	// Get the number of filled stars and half-filled stars
	const [filledStars, halfStar] = getStars(numberOfRates);

	return (
		<>
			{Array(5)
				.fill(null)
				.map((_, i: number) => {
					// Determine the star icon based on the index and the rating
					let starIcon;
					if (i < filledStars) {
						starIcon = (
							<BsStarFill key={i} color={starColor ? starColor : "#FF9017"} />
						);
					} else if (i === filledStars && halfStar) {
						starIcon = (
							<BsStarHalf key={i} color={starColor ? starColor : "#FF9017"} />
						);
					} else {
						starIcon = <BsStarFill key={i} color="#D4CDC5" />;
					}
					return starIcon;
				})}
		</>
	);
};

export default Rating;
