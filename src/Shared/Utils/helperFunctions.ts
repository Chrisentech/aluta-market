import { jwtDecode } from "jwt-decode";
type Timer = ReturnType<typeof setTimeout>;

export function debounce<T extends (...args: any[]) => void>(
	func: T,
	delay: number
) {
	let timeoutId: Timer;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

export const getFormattedDate = (date: Date): string => {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

export function isEmpty(value: any): boolean {
	if (Array.isArray(value)) {
		return value.length === 0;
	}

	if (typeof value === "object" && value !== null) {
		return Object.keys(value).length === 0;
	}

	return !value;
}

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

export const formatCurrency = (
	value: number | undefined,
	symbol: string = "₦",
	currency: string = "NGN",
	locale: string = "en-US", // Set your desired locale
	decimalPlaces: number = 2
): string => {
	if (typeof value !== "number" || isNaN(value)) {
		return ""; // Return an empty string or handle it as you see fit
	}

	const formattedValue = value.toLocaleString(locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	});

	return `${symbol}${formattedValue.slice(3)}`;
};

export const calculateDiscount = (
	originalPrice: number,
	discountPercentage: number
): number => {
	const discountAmount = (originalPrice * discountPercentage) / 100;
	return originalPrice - discountAmount;
};

export function generateSlug(name: string): string {
	// Convert to lowercase
	name = name.toLowerCase();

	// Replace spaces with hyphens
	name = name.replace(/ /g, "-");

	// Remove special characters using regex
	name = name.replace(/[^a-z0-9-]/g, "");

	return name;
}

export function getTextFromSlug(slug: string): string {
	// Replace hyphens with spaces
	let text = slug.replace(/-/g, " ");

	// Capitalize the first letter of each word
	text = text.replace(/\b\w/g, (char) => char.toUpperCase());

	return text;
}

//To be refactored
export const calculateTotalPrice = (items: any[]): number => {
	return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

//To be refactored
export const sortProductsByPrice = (
	products: any[],
	ascending: boolean = true
): any[] => {
	return products.sort((a, b) =>
		ascending ? a.price - b.price : b.price - a.price
	);
};

export const filterProductsByCategory = (
	products: any[],
	category: string
): any[] => {
	return products.filter((product) => product.category === category);
};

//to be refactored
export const getAverageRating = (reviews: any[]): number => {
	if (reviews.length === 0) return 0;
	const totalRating = reviews.reduce(
		(total, review) => total + review.rating,
		0
	);
	return totalRating / reviews.length;
};

//to  be refactored
export const formatAddress = (address: any): string => {
	return `${address.street}\n${address.city}, ${address.state} ${address.zipCode}`;
};

export const calculateShippingCost = (
	totalWeight: number,
	shippingRate: number
): number => {
	return totalWeight * shippingRate;
};

export const generateOrderNumber = (): string => {
	const timestamp = Date.now().toString();
	const randomDigits = Math.floor(Math.random() * 1000)
		.toString()
		.padStart(3, "0");
	return `Am${timestamp}${randomDigits}`;
};

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength - 3) + "...";
};

export function numberWithCommas(x: number | string): string {
	if (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	return "";
}

export function formatMessageTimestamp(timestamp: number): string {
	if (!timestamp) return "";
	const date = new Date(timestamp);
	return date.toLocaleTimeString().slice(0, 5);
}

export function create_UUID(): string {
	let dt = new Date().getTime();
	const uuid = "am-x2xx-xxxx-4xxx-yxxx".replace(/[xy]/g, (c) => {
		const r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
}

export function calcExpiryDate(dayspan: number): Date {
	const today = new Date();
	const defaultDate = new Date(today);
	defaultDate.setDate(today.getDate() + dayspan);

	return defaultDate;
}

export function deleteCookie(name: string) {
	document.cookie = name + "=; path=/;";
}

export const setCookie = (name: string, value: string, days: number) => {
	days === 0
		? (document.cookie = `${name}=${value}; path=/`) //creates a session cookie
		: (document.cookie = `${name}=${value}; expires=${calcExpiryDate(
				days
		  ).toUTCString()}; path=/`);
};

export const getCookie = (name: string) => {
	const cookieArray = document.cookie.split("; ");
	for (const cookie of cookieArray) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return cookieValue;
		}
	}
	return null;
};

export const setRedirectPath = (path: string) => {
	sessionStorage.setItem("redirectPath", path);
};

export const isTokenExpired = (token: string) => {
	try {
		const decodedToken: any = jwtDecode(token);
		const currentTime = Date.now() / 1000; // Convert to seconds
		return decodedToken?.exp < currentTime;
	} catch (error) {
		// Handle decoding errors (e.g., invalid token format)
		return true;
	}
};

export const parseJSONString = (str: string) => {
	return JSON.parse(str);
};

export const StringifyJSON = (js: any) => {
	return JSON.stringify(js);
};

export const MaskNumber = (phoneNumber: string): string => {
	// Check if the phone number is valid
	if (!phoneNumber) {
		return "Invalid phone number";
	}

	// Replace digits with asterisks except the first 4 and the last 2 digits
	const maskedNumber = phoneNumber.replace(/(\d{4})\d+(\d{2})/, "$1****$2");

	return maskedNumber;
};

export const isValidPassword = (password: string): boolean => {
	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])/;
	return passwordPattern.test(password);
};

export const getCapitalizedFirstLetter = (str: string): string => {
	return str?.charAt(0).toUpperCase();
};
export const filterNum = (number: number | string): number | string => {
	const numberStr = number?.toString();
	console.log(numberStr);
	if (!numberStr) {
		// If the number is empty, return it as is
		return number;
	}

	if (numberStr?.includes("234") || numberStr?.startsWith("0")) {
		// If the number contains '234' or starts with '0', remove them
		const filteredNumber = numberStr?.replace("234", "").replace(/^0+/, "");
		return "+234" + parseInt(filteredNumber, 10);
	}

	return "+234" + number;
};

export const calculateTotalPages = (
	totalDataLength: number,
	perPage: number
): number => {
	return Math.ceil(totalDataLength / perPage);
};

/**
 * Calculate the average rating from an array of ratings.
 * @param ratings - Array of rating values.
 * @returns The average rating value, clamped between 0.0 and 5.0.
 */
export const calculateRating = (ratings: number[]): number => {
	if (!ratings || ratings.length === 0) {
		return 0.0;
	}

	const total = ratings.reduce((acc, rating) => {
		if (rating < 0 || rating > 10) {
			throw new Error(
				"Invalid rating value, ratings should be between 0.0 and 5.0"
			);
		}
		return acc + rating;
	}, 0);

	const average = total / ratings.length;

	// Clamp the average to be within the range 0.0 to 5.0
	return Math.min(Math.max(average, 0.0), 5.0);
};

export default calculateRating;

export const IsInHandledProduct = (
	productName: string,
	items: any[]
): boolean => {
	return items?.some((product) => product.productName === productName);
};

export const GetOrdersByStatus = (
	status: string,
	orders: { status: string }[]
) => {
	return orders?.filter((order) => order.status === status);
};

export const generateUniqueId = (): string => {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let uniqueId = "";
	for (let i = 0; i < 8; i++) {
		uniqueId += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return uniqueId;
};

export const IsInCart = (prdId?: string, items?: any[]): boolean => {
	if (!prdId || !items) return false;
	return items?.some((item) => item.product.id == prdId);
};
