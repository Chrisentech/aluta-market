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
  phone: string;
  campus: string;
  usertype: string;
  avatar?: string;
  stores?: any;
  active?: boolean;
}

export interface IVerifyOTPProps{
  phone:string
  email:string
  code:string
}

export interface ICartProps {
items:any,
total:number,
user:number,
id?:number,
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
  className?: string;
  onHover?: boolean;
  padding?: string | number;
  children: ReactNode;
}

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  goToPage: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}
export interface TableRowProps {
  isHeader?: boolean;
}

export interface IProductProps {
  name: string;
  price: number;
  slug?: string;
  discount: number;
  category: string;
  subcategory: string;
  description: string;
  id?: string;
  status?: boolean;
  image?: string[];
  option: [];
}

export interface IProductGridProps {
  column?: number;
  row?: number;
  cardWidth?: number | string;
  cardHeight?: number | string;
  className?: string;
  image?: string;
  alt?: string;
  background?: string;
  children?: ReactNode;
}
