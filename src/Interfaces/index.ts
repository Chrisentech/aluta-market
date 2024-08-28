import { ReactNode } from "react";

export interface APIRequestType {
	url: string;
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
	data?: any;
}

export interface APIResponseType<T> {
	data: T | null;
	error: string | null;
	isLoading: boolean;
}

export interface RegisterFormValues {
	email: string;
	password: string;
	fullname: string;
	phone: string | number;
	campus: string;
	usertype: string;
	description?: string;
	address?: string;
	avatar?: string;
	hasPhysicalAddress?: boolean;
	link?: string;
	storePhone?: string;
	storeName?: string;
	stores?: any;
	active?: boolean;
	paymentDetails?: any;
}

export interface UpdateUserFormValues {
	id: string;
	email?: string;
	password?: string;
	fullname?: string;
	gender?: string;
	dob?: string;
	phone?: string | number;
	campus?: string;
	usertype?: string;
	avatar?: string | ArrayBuffer | null;
	active?: boolean;
}

export interface IUserProps {
	id: number;
	fullname: string;
	email: string;
	campus: string;
	avatar?: string;
	phone?: string;
	usertype?: string;
	gender?: string;
	dob?: string;
	dva?: any;
	// stores?:
	paymnetDetails?: any;
	active?: boolean;
	access_token?: string;
	refresh_token?: string;
	// twofa
	// code
	// codeexpiry
}

export interface IVerifyOTPProps {
	phone: string;
	email: string;
	code: string;
}

export interface ICartProps {
	productId?: string;
	quantity?: number;
	user?: number;
	id?: number;
	type?: "remove" | "add";
	items?: any[];
	total?: number;
	active?: boolean;
	__typename?: string;
}
export interface LoginFormValues {
	email: string;
	password: string;
}

export interface ICardInterface {
	width?: string | number;
	height?: string | number;
	borderRadius?: string | number;
	hasBoxShadow?: boolean;
	background?: string;
	color?: string;
	className?: string;
	onHover?: boolean;
	onClick?: any;
	allowBorders?: boolean;
	padding?: string | number;
	children: ReactNode;
}

export interface PaginationProps {
	totalPages: number;
	currentPage: number;
	goToPage: (pageNumber: number) => void;
	nextPage: () => void;
	prevPage: () => void;
	handlePageSizeChange: (e: any) => void;
	isLoading?: boolean;
}
export interface TableRowProps {
	isHeader?: boolean;
}

export interface IProductProps {
	name: string;
	price: number;
	slug?: string;
	thumbnail: string;
	discount: number;
	category: any;
	subcategory: any;
	description: string;
	type: string;
	id?: number;
	store?: string;
	status?: boolean;
	image?: string[];
	option?: [];
	variants: [];
	review: [];
}

export interface ModifyCartItemInput {
	productId: string;
	quantity: number;
	user: number;
}

export interface IHandledProductProps {
	productId: number;
	productPrice: number;
	productName: string;
	productQuantity: number;
	productStatus: boolean;
	productThumbnail?: string[];
	userId: number;
}

export interface IProductGridProps {
	column?: number;
	row?: number;
	isMobile?: boolean;
	cardWidth?: number | string;
	cardHeight?: number | string;
	className?: string;
	image?: string[];
	thumbnail?: string;
	alt?: string;
	background?: string;
	children?: ReactNode;
	data?: any;
}
