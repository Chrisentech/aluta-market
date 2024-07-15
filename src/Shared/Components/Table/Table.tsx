import React, { useState } from "react";
import {
	TableWrapper,
	TableContainer,
	TableRow,
	TableCell,
} from "./table.styles";
import { AiOutlineLink } from "react-icons/ai";
import Puff from "react-loading-icons/dist/esm/components/puff";
import { IoPencil } from "react-icons/io5";
import { MdDeleteOutline, MdToggleOff, MdToggleOn } from "react-icons/md";
import { numberWithCommas } from "../../Utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../Features/modal/modalSlice";
import useProducts from "../../../Features/products/productActions";
import { AppColors } from "../../Constants";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import useStore from "../../../Features/store/storeAction";
import { fetchMe } from "../../../Features/user/userSlice";
import { DepositIcon, WithdrawIcon } from "../../../assets";

interface TableColumn {
	header: string;
	accessor: string | ((row: any) => any);
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
	const [toggling, setToggling] = useState<number[]>([]);
	const { updateProduct } = useProducts();
	const { getMyStores, mystore } = useStore();
	const me = useSelector(fetchMe);

	const handleToggleStatus = async (id: number) => {
		try {
			const nextIdExists = toggling.includes(id + 1);
			setToggling((prevState) =>
				nextIdExists
					? prevState.filter((el) => el !== id + 1)
					: [...prevState, id + 1]
			);

			if (data[id].status === true && data[id]?.quantity > 0) {
				await updateProduct({
					id: data[id]?.id,
					status: false,
					store: mystore?.name,
				});
				dispatch(alertSuccess("Product Successfully updated!!"));
				setToggle(toggle.filter((el) => el !== id));
			} else {
				await updateProduct({
					id: data[id]?.id,
					store: mystore?.name,
					status: true,
				});
				dispatch(alertSuccess("Product Successfully updated!!"));
				setToggle([...toggle, id]);
			}
		} catch (error) {
			console.error("Error toggling status:", error);
			dispatch(alertError(`Error toggling status:${error}`));
		} finally {
			setToggling((prevState) => prevState.filter((el) => el !== id + 1));
			setToggle((prevState) => prevState.filter((el) => el !== id));
			getMyStores({ user: me?.id, limit: 100, offset: 0 });
		}
	};

	const dispatch = useDispatch();

	const getValue = (row: any, accessor: string | ((row: any) => any)) => {
		if (typeof accessor === "function") {
			return accessor(row);
		}
		return row[accessor];
	};

	return (
		<TableContainer className={className}>
			<TableWrapper>
				<thead>
					<TableRow isHeader>
						{columns?.map((column) => (
							<TableCell
								key={
									typeof column.accessor === "string"
										? column.accessor
										: column.header
								}
							>
								{column.header}
							</TableCell>
						))}
					</TableRow>
				</thead>
				<tbody>
					{data?.map((item, index) => (
						<TableRow key={index}>
							{columns.map((column) => (
								<TableCell
									key={
										typeof column.accessor === "string"
											? column.accessor
											: column.header
									}
									className={getValue(item, column.accessor)}
								>
									{(() => {
										const value = getValue(item, column.accessor);
										switch (column.accessor) {
											case "order":
												return null;
											case "id":
												return <p>{index + 1}</p>;
											case "price":
												return <p>NGN {numberWithCommas(item?.price)}</p>;
											case "img":
												return (
													<img width={50} src={item?.thumbnail} alt="Image" />
												);
											case "options":
												return (
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
												);
											case "stock":
												return (
													<>
														{toggling.includes(index + 1) ? (
															<Puff
																stroke={AppColors.brandOrange}
																strokeOpacity={0.125}
															/>
														) : item?.status && item?.quantity > 0 ? (
															<MdToggleOn
																size="55px"
																color="rgb(255 21 18 / 91%)"
																onClick={() => handleToggleStatus(index)}
															/>
														) : (
															<MdToggleOff
																size="55px"
																color="#8b96a5"
																onClick={() => handleToggleStatus(index)}
															/>
														)}
													</>
												);

											default:
												return value;
										}
									})()}
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
