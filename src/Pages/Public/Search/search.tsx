import React, { useEffect, useState } from "react";
import Layout from "../../../Layouts";
import {
	Container,
	FilterTag,
	Filters,
	MainView,
	Page,
	SelectIcon,
	Selector,
	Sidebar,
	Wrapper,
} from "./search.styles";
import { Breadcrumb, FilterMenu, View } from "../../../Shared/Components";
import { BiSolidGridAlt } from "react-icons/bi";
import { PiListFill } from "react-icons/pi";
import { HiXMark } from "react-icons/hi2";
import { searchedProducts } from "../../../Features/products/productSlice";
import { useSelector } from "react-redux";
import useProducts from "../../../Features/products/productActions";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../Shared/Constants";
import { getTextFromSlug } from "../../../Shared/Utils/helperFunctions";
// import useProducts from '../../../Features/products/productActions';

const Screen: React.FC = () => {
	const products = useSelector(searchedProducts);
	const [mode, setMode] = useState<string>("grid");
	const params = new URLSearchParams(location.search);
	const searchQuery = params.get("query");
	const [query, setQuery] = useState<string>(searchQuery || "");
	const nav = useNavigate();
	const { getSearchProducts } = useProducts();
	const [filters, setFilters] = useState<{ [key: string]: string[] }>({});
	// const { products } = useProducts();
	useEffect(() => {
		if (searchQuery) {
			setQuery(searchQuery);
			handleSearch(searchQuery);
		}
	}, [query]);

	const handleSearch = async (query: string) => {
		await getSearchProducts(query);
		nav({ pathname: ROUTE.SEARCH, search: `?query=${query}` });
		console.log("clicked");
	};

	const handleOptionChange = (key: string, value: string) => {
		if (filters[key]) {
			if (filters[key].includes(value)) {
				setFilters((prevState) => {
					const updatedValues = prevState[key].filter(
						(option) => option !== value
					);
					return {
						...prevState,
						[key]: updatedValues,
					};
				});
			} else {
				setFilters((prevState) => ({
					...prevState,
					[key]: [...prevState[key], value],
				}));
			}
		} else {
			setFilters({
				[key]: [value],
			});
		}
	};

	const hasFilter = Object.values(filters).some((value) => value.length > 0);

	const clearFilters = () => setFilters({});

	const handleGrid = () => {
		setMode("grid");
	};
	const handleList = () => {
		setMode("list");
	};

	const breadcrumbs = [
		// should get links and labels dynamically
		{ label: "Home", link: "/" },
		{ label: "Mobile Accessory" },
	];

	return (
		<Page>
			<Container>
				<Breadcrumb items={breadcrumbs} />
				<Wrapper>
					<Sidebar>
						<FilterMenu
							onOptionChange={handleOptionChange}
							filters={filters}
						></FilterMenu>
					</Sidebar>
					<MainView>
						<Selector>
							<p>
								{products?.length} items in {getTextFromSlug(query)}
							</p>
							<div className="buttons">
								<select name="Features" className="dropdown">
									<option value="features">Features</option>
									<option value="metallic">Metallic</option>
									<option value="plastic">Plastic</option>
								</select>
								<div className="icons">
									<SelectIcon onClick={handleGrid} active={mode === "grid"}>
										<BiSolidGridAlt size="24px" />
									</SelectIcon>
									<SelectIcon onClick={handleList} active={mode === "list"}>
										<PiListFill size="24px" />
									</SelectIcon>
								</div>
							</div>
						</Selector>
						{hasFilter && (
							<Filters>
								{Object.entries(filters).map(([key, array]) =>
									array.map((filter) => (
										<FilterTag>
											{filter}
											<HiXMark
												size="20px"
												onClick={() => handleOptionChange(key, filter)}
											>
												x
											</HiXMark>
										</FilterTag>
									))
								)}
								<span className="clear" onClick={() => clearFilters()}>
									Clear all filter
								</span>
							</Filters>
						)}

						<View
							className="view"
							mode={mode}
							gridItems={products || []}
							listItems={products || []}
							itempergrid={3}
							type="productGrid"
							gap="20px"
						/>
					</MainView>
				</Wrapper>
			</Container>
		</Page>
	);
};

const SearchPage = () => {
	const products = useSelector(searchedProducts);

	return <Layout layout={"full"} component={Screen} isLoading={!products} />;
};

export default SearchPage;
