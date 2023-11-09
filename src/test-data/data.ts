import {
    accomodationImg,
	airtimeImg,
	bagImg,
	careerImg,
	clothImg,
	color1,
	color2,
	cosmeticImg,
	cyberImg,
	electronicsImg,
	entertainmentImg,
	foodImg,
	healthImg,
	stationeryImg,
	tutoringImg,
	utensilImg,
    writingImg,
} from "../assets";
import { image1, image2, image3, image4, image5 } from "./product-info img";

export const categories = [
	{
		title: "Stationaries and Textbooks",
		image: stationeryImg,
	},
	{
		title: "Gadgets and Electronics",
		image: electronicsImg,
	},
	{
		title: "Cloth and Accessories",
		image: clothImg,
	},
	{
		title: "Footwears and Bags",
		image: bagImg,
	},
	{
		title: "Food and Beverages",
		image: foodImg,
	},
	{
		title: "Household Utensils",
		image: utensilImg,
	},
	{
		title: "Cosmetics and Toiletries",
		image: cosmeticImg,
	},
	{
		title: "Health and Medical Supplies",
		image: healthImg,
	},
];

export const services = [
	{
		title: "Accomodation and Home Services ",
		image: accomodationImg,
	},
	{
		title: "Tutoring Services",
		image: tutoringImg,
	},
	{
		title: "Writing Assistance",
		image: writingImg,
	},
	{
		title: "Airtime and Data Recharge",
		image: airtimeImg,
	},
	{
		title: "Career Development Programs",
		image: careerImg,
	},
	{
		title: "Events Organizing",
		image: null,
	},
	{
		title: "Cyber Cafe Operations",
		image: cyberImg,
	},
	{
		title: "Entertainment and Advertising",
		image: entertainmentImg,
	},
];

export const ProductImages = [image1, image2, image3, image4, image5, color2];

export const colorData = [
	{ name: "Red", imageUrl: color1 },
	{ name: "Blue", imageUrl: color2 },
];
