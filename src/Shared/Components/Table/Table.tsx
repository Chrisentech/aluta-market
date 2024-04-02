import React, { useState } from "react";
import {
	TableWrapper,
	TableContainer,
	TableRow,
	TableCell,
} from "./table.styles";
import { AiOutlineLink } from "react-icons/ai";
import { IoPencil } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { numberWithCommas } from "../../Utils/helperFunctions";
import { useDispatch } from "react-redux";
import { showModal } from "../../../Features/modal/modalSlice";
import useProducts from "../../../Features/products/productActions";

interface TableColumn {
	header: string;
	accessor: string;
}

interface ResponsiveTableProps {
	data: any[];
	columns: TableColumn[];
	className?: string;
}

const Table: React.FC<ResponsiveTableProps> = ({
	data,
	columns,
	className,
}) => {
	const [toggle, setToggle] = useState<number[]>([]);
	const { product } = useProducts();
	const handleAddtoWishList = (id: number) => {
		if (toggle.includes(id)) {
			setToggle(toggle.filter((el) => el !== id));
		} else {
			setToggle([...toggle, id]);
		}
	};

	const dispatch = useDispatch();
	return (
		<TableContainer className={className}>
			<TableWrapper>
				<thead>
					<TableRow isHeader>
						{columns?.map((column) => (
							<TableCell key={column.accessor}>{column.header}</TableCell>
						))}
					</TableRow>
				</thead>
				<tbody>
					{data?.map((item, index) => (
						<TableRow key={index}>
							{columns.map((column) => (
								<TableCell
									key={column.accessor}
									className={item[column.accessor]}
								>
									{column.accessor === "order" ? (
										<></>
									) : column.accessor === "id" ? (
										<p>{index + 1}</p>
									) : column.accessor === "price" ? (
										<p>NGN {numberWithCommas(item?.price)}</p>
									) : column.accessor === "img" ? (
										<img width={50} src={item?.thumbnail} alt="Image" />
									) : column.accessor === "options" ? (
										<div className="flexy">
											<AiOutlineLink size="21px" />
											<IoPencil size="21px" />
											<MdDeleteOutline
												size="21px"
												onClick={() => {
													dispatch(showModal("deleteProduct"));
													localStorage.setItem("productId", item?.id);
												}}
											/>
										</div>
									) : column.accessor === "stock" ? (
										item?.status ? (
											<MdToggleOn
												size="55px"
												color="rgb(255 21 18 / 91%)"
												onClick={() => handleAddtoWishList(index)}
											/>
										) : (
											<MdToggleOff
												size="55px"
												color="#8b96a5"
												onClick={() => handleAddtoWishList(index)}
											/>
										)
									) : (
										item[column.accessor]
									)}
								</TableCell>
							))}
						</TableRow>
					))}
				</tbody>
			</TableWrapper>
		</TableContainer>
	);
};

export default Table;
