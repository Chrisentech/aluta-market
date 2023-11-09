// import * as JWT from "jsonwebtoken"
export function debounce(func: Function, delay: number) {
  let timeoutId: number;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
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
  locale: string = 'en-US', // Set your desired locale
  decimalPlaces: number = 2
): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return ''; // Return an empty string or handle it as you see fit
  }

  const formattedValue = value.toLocaleString(locale, {
    style: 'currency',
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

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

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
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/d, ",");
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
  const today = new Date()
  const defaultDate = new Date(today);
  defaultDate.setDate(today.getDate() + dayspan);

  return defaultDate;
}

export function deleteCookie(name: string) {
  document.cookie = name + '=; path=/;';
} 

export const setCookie = (name: string, value: string, days: number) => {
  days === 0 ?  
    document.cookie = `${name}=${value}; path=/`: //creates a session cookie
    document.cookie = `${name}=${value}; expires=${calcExpiryDate(days).toUTCString()}; path=/`;
};

export const getCookie = (name: string) => {
  const cookieArray = document.cookie.split('; ');
  for (const cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

export const setRedirectPath = (path: string) => {
  sessionStorage.setItem('redirectPath', path);
};

// export const isTokenExpired = (token:string) => {
//   try {
//     const decodedToken = JWT(token);
//     const currentTime = Date.now() / 1000; // Convert to seconds
//     return decodedToken.exp < currentTime;
//   } catch (error) {
//     // Handle decoding errors (e.g., invalid token format)
//     return true;
//   }
// };

export const parseJSONString = (str:string) =>{
  return JSON.parse(str)
}

export const StringifyJSON = (js:any)=>{
  return JSON.stringify(js)
}
