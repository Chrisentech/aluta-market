// import React, { useEffect } from "react";
// import useProducts from "../Features/products/productActions";

// interface Driver {
// 	// ... your Driver interface definition
// }

// interface Products {
// 	// ... your Products interface definition
// }

// export const GenerateMockProduct: React.FC = () => {
// 	const { getProducts } = useProducts();

// 	useEffect(() => {
// 		// Fetch products when the component mounts
// 		getProducts();
// 	}, [getProducts]);

// 	const cities: string[] = [
// 		"Ibadan, Oyo",
// 		"Lagos, Lagos",
// 		"Abuja, FCT",
// 		"Kano, Kano",
// 		"Port Harcourt, Rivers",
// 	];
// 	const statuses: string[] = ["Approved", "Pending"];
// 	const stat: string[] = ["online", "offline"];

// 	// List of common Nigerian names
// 	const names: string[] = [
// 		"Chinedu",
// 		"Obinna",
// 		"Ngozi",
// 		"Amina",
// 		"Fatima",
// 		"Adebayo",
// 		"Chiamaka",
// 		"Emeka",
// 		"Blessing",
// 		"Oluwaseun",
// 	];

// 	const dataArray = [];

// 	for (let i = 1; i <= 30; i++) {
// 		const firstName: string = names[Math.floor(Math.random() * names.length)];
// 		const lastName: string = names[Math.floor(Math.random() * names.length)];
// 		const randomCity: string =
// 			cities[Math.floor(Math.random() * cities.length)];
// 		const randomStatus: string =
// 			statuses[Math.floor(Math.random() * statuses.length)];
// 		const randomStat: string = stat[Math.floor(Math.random() * stat.length)];

// 		const dataObject: Driver = {
// 			id: String(Math.floor(Math.random() * 10000000000)), // Random ID
// 			riderName: `${firstName} ${lastName}`,
// 			email: `${firstName.toLowerCase()}${lastName.toLowerCase()}@email.com`, // Generate email based on name
// 			contactNumber: "234" + Math.floor(Math.random() * 10000000000), // Random 10-digit number
// 			city: randomCity,
// 			stat: randomStat,
// 			status: randomStatus,
// 			createdAt: new Date(),
// 			updatedAt: new Date(),
// 		};

// 		dataArray.push(dataObject);
// 	}

// 	return <div></div>
// };

