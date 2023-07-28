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
  category: string;
  storeUrl?: string;
  storeDescription?: string;
  storeAddress?: string;
  havePhysicalAddress?: string;
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
  option: [];
}
