import {
	accomodationImg,
	airtimeImg,
	bagImg,
	careerImg,
	cloth,
	clothImg,
	color1,
	color2,
	cosmeticImg,
	cyberImg,
	electronicsImg,
	entertainmentImg,
	foodImg,
	healthImg,
	phone,
	stationeryImg,
	tutoringImg,
	utensilImg,
	wallet,
	watch,
	eventImg,
	writingImg,
} from "../assets";
import { image1, image2, image3, image4, image5 } from "./product-info img";

export const categories = [
	{
		title: "Stationaries and Textbooks ",
		image: stationeryImg,
	},
	{
		title: "Gadgets and Electronics ",
		image: electronicsImg,
	},
	{
		title: "Fashion and Accessories ",
		image: clothImg,
	},
	{
		title: "Footwears and Bags ",
		image: bagImg,
	},
	{
		title: "Food and Beverages ",
		image: foodImg,
	},
	{
		title: "Household Utensils ",
		image: utensilImg,
	},
	{
		title: "Cosmetics and Toiletries ",
		image: cosmeticImg,
	},
	{
		title: "Digital Products ",
		image: healthImg,
	},
];

export const services = [
	{
		title: "Accomodation and Home Services ",
		image: accomodationImg,
	},
	{
		title: "Tutoring Services ",
		image: tutoringImg,
	},
	{
		title: "Writing Assistance ",
		image: writingImg,
	},
	{
		title: "Airtime and Data Recharge ",
		image: airtimeImg,
	},
	{
		title: "Career Development Programs ",
		image: careerImg,
	},
	{
		title: "Events Organizing ",
		image: eventImg,
	},
	{
		title: "Cyber Cafe Operations ",
		image: cyberImg,
	},
	{
		title: "Entertainment and Advertising ",
		image: entertainmentImg,
	},
];

export const ProductImages = [image1, image2, image3, image4, image5, color2];

export const colorData = [
	{ name: "Red", imageUrl: color1 },
	{ name: "Blue", imageUrl: color2 },
];

export const CartProduct = [
	{
		id: 1,
		img: cloth,
		item: "Hoodie",
		category: "Cloth",
		price: "3000",
		quantity: "10",
		options: "10",
		stock: "18 Aug 2023",
	},
	{
		id: 2,
		img: phone,
		item: "Iphone 13 pro",
		category: "Mobile Phone & PC",
		price: "7000",
		options: "10",
		stock: "12 Aug 2023",
		quantity: "5",
	},
	{
		id: 3,
		options: "10",
		img: wallet,
		item: "Mini Wallet",
		category: "Accessories",
		stock: "16 Aug 2023",
		price: "2000",
		quantity: "1",
	},
	{
		id: 4,
		img: watch,
		options: "10",
		item: "Rolex watch",
		category: "Accessories",
		stock: "19 Aug 2023",
		price: "4000",
		quantity: "10",
	},
];

// const productData = [
//   {
//     id: 1,
//     img: cloth,
//     item: "Hoodie",
//     category: "Cloth",
//     price: "N3000",
//     quantity: "10",
//     options: "10",
//     stock: "18 Aug 2023",
//   },
//   {
//     id: 2,
//     img: phone,
//     item: "Iphone 13 pro",
//     category: "Mobile Phone & PC",
//     price: "N7000",
//     options: "10",
//     stock: "12 Aug 2023",
//     quantity: "5",
//   },
//   {
//     id: 3,
//     options: "10",
//     img: wallet,
//     item: "Mini Wallet",
//     category: "Accessories",
//     stock: "16 Aug 2023",
//     price: "N2000",
//     quantity: "1",
//   },
//   {
//     id: 4,
//     img: watch,
//     options: "10",
//     item: "Rolex watch",
//     category: "Accessories",
//     stock: "19 Aug 2023",
//     price: "N4000",
//     quantity: "10",
//   },
//   {
//     id: 5,
//     img: phone,
//     options: "10",
//     item: "Iphone 12",
//     category: "Mobile Phone & PC",
//     stock: "20 Aug 2023",
//     price: "N6000",
//     quantity: "5",
//   },
//   {
//     id: 6,
//     img: cloth,
//     item: "Hoodie",
//     category: "Cloth",
//     options: "10",
//     stock: "22 Aug 2023",
//     price: "N3500",
//     quantity: "10",
//   },
//   {
//     id: 7,
//     img: watch,
//     options: "10",
//     item: "Nike Watch",
//     category: "Accessories",
//     stock: "25 Aug 2023",
//     price: "N5000",
//     quantity: "5",
//   },
// ];
