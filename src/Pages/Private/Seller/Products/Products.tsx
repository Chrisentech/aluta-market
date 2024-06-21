import React, { useEffect, useState } from "react";
import Layout from "../../../../Layouts";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "./products.styles";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import {
	Card,
	DeleteModal,
	Pagination,
	Table,
} from "../../../../Shared/Components";

const categoryOptions = ["category", "Food", "Books", "Perfumes & Deodorant"];
const options = ["Last added"];
import { noCatalog } from "../../../../assets";
import { ROUTE } from "../../../../Shared/Constants";
import Dropdown2 from "../../../../Shared/Components/Dropdown/Dropdown2";
import { selectStore } from "../../../../Features/store/storeSlice";
import { selectMyProducts } from "../../../../Features/products/productSlice";
import { useSelector } from "react-redux";
import useProducts from "../../../../Features/products/productActions";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import { calculateTotalPages } from "../../../../Shared/Utils/helperFunctions";

const columns = [
	{ header: "S/N", accessor: "id" },
	{ header: "", accessor: "img" },
	{ header: "Item", accessor: "name" },
	{ header: "Category", accessor: "category" },
	{ header: "Qnt", accessor: "quantity" },
	{ header: "Price", accessor: "price" },
	{ header: "Options", accessor: "options" },
	{ header: "in-stock", accessor: "stock" },
];
const Screen: React.FC = () => {
	const { getProducts } = useProducts();
	const myProducts = useSelector(selectMyProducts);
	const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);
	const [limit, setLimit] = useState(20);
	const [currentPage, setCurrentPage] = useState(myProducts?.current_page ?? 1);
	const [loading, setLoading] = useState(false);
	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
	};
	const totalPages = myProducts?.total;
	const goToPage = async (pageNumber: any) => {
		setLoading(true);
		setCurrentPage(pageNumber);
		await getProducts({
			store: store.name,
			limit,
			offset: pageNumber, //offset stand for page here
		});
		setLoading(false);
	};

	const fetchData = async (pageNumber: any) => {
		setLoading(true);
		setLimit(pageNumber);
		await getProducts({
			store: store.name,
			limit: pageNumber,
			offset: 0,
		});
		setLoading(false);
	};
	// Example functions to navigate to next and previous pages
	const nextPage = () => {
		if (currentPage < totalPages) {
			goToPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			goToPage(currentPage - 1);
		}
	};

	const nav = useNavigate();
	const store = useSelector(selectStore);
	useEffect(() => {
		// Define a function to fetch products
		const fetchProducts = async () => {
			setLoading(true);
			try {
				// Fetch products only if the store has changed
				if (store) {
					await getProducts({
						store: store.name,
						limit,
						offset: currentPage - 1,
					});
					setLoading(false);
				}
			} catch (error: any) {
				setLoading(false);
				console.error("Error fetching products:", error);
			}
		};

		// Fetch products when the component mounts
		fetchProducts();

		// Cleanup function to abort fetch when component unmounts or when store changes
		return () => {
			// setLimit(0);
			// You can perform cleanup here if needed
		};
	}, []);
	return (
		<Wrapper>
			<div className="flex">
				<h2>Products</h2>
				<NavLink to={ROUTE.SELLER_PRODUCTTYPE}>
					<button className="button">
						<AiOutlinePlus /> Create new
					</button>
				</NavLink>
			</div>
			<Card
				width="100%"
				height="600px"
				borderRadius="20px"
				onHover={false}
				className="product"
			>
				<div className="flex">
					<AiOutlineSearch color="#8b96a5" className="diff" />
					<input type="search" placeholder="Search Products or services" />
					<div className="dropdown">
						<Dropdown2
							options={categoryOptions}
							selectedOption={selectedOption}
							padding={"10"}
							handleOptionEvent={handleOptionClick}
							className="drpdwn"
						/>
						<Dropdown2
							options={options}
							padding={"10"}
							selectedOption={options[0]}
							handleOptionEvent={handleOptionClick}
							className="drpdwn"
						/>
					</div>
				</div>
				{myProducts?.data?.length > 0 ? (
					<>
						<Table data={myProducts?.data} columns={columns} />
						{myProducts?.data?.length > 10 && (
							<Pagination
								totalPages={calculateTotalPages(
									totalPages,
									myProducts?.per_page
								)}
								currentPage={currentPage}
								goToPage={goToPage}
								nextPage={nextPage}
								prevPage={prevPage}
								handlePageSizeChange={fetchData}
								isLoading={loading}
							/>
						)}
					</>
				) : (
					<div
						className="no_product"
						onClick={() => nav(ROUTE.SELLER_PRODUCTTYPE)}
					>
						<img src={noCatalog} alt="" />{" "}
					</div>
				)}
			</Card>
		</Wrapper>
	);
};

const Products = () => {
	const activeModal = useSelector(selectActiveModal);
	return (
		<Layout
			layout={"dashboard"}
			showModal={activeModal}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
			popUpContent={<DeleteModal />}
			modalWidth={500}
		/>
	);
};

export default Products;
