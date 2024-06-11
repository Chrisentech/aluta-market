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
import { MdDeleteOutline } from "react-icons/md";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { numberWithCommas } from "../../Utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../Features/modal/modalSlice";
import useProducts from "../../../Features/products/productActions";
import { AppColors } from "../../Constants";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import useStore from "../../../Features/store/storeAction";
import { fetchMe } from "../../../Features/user/userSlice";

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
	const [toggling, setToggling] = useState<number[]>([]);
	const { updateProduct } = useProducts();
	const { getMyStores, mystore } = useStore();
	const me = useSelector(fetchMe);
	const handleToggleStatus = async (id: number) => {
		try {
			// Check if id+1 already exists in the array
			const nextIdExists = toggling.includes(id + 1);

			// Update the toggling state based on whether id+1 exists or not
			setToggling((prevState) =>
				nextIdExists
					? prevState.filter((el) => el !== id + 1)
					: [...prevState, id + 1]
			);

			// Update the toggle state based on whether id already exists or not
			if (data[id].status === true && data[id]?.quantity > 0) {
				// alert("yes");
				await updateProduct({
					id: data[id]?.id,
					status: false,
					store: mystore?.name,
				});

				dispatch(alertSuccess("Product Succesfully updated!!"));
				setToggle(toggle.filter((el) => el !== id));
			} else {
				// alert("no");
				await updateProduct({
					id: data[id]?.id,
					store: mystore?.name,
					status: true,
				});
				dispatch(alertSuccess("Product Succesfully updated!!"));
				setToggle([...toggle, id]);
			}
		} catch (error) {
			// Handle error
			console.error("Error toggling status:", error);
			dispatch(alertError(`Error toggling status:${error}`));
		} finally {
			// Remove id from toggling and toggle after the request is done or if an error occurs
			setToggling((prevState) => prevState.filter((el) => el !== id + 1));
			setToggle((prevState) => prevState.filter((el) => el !== id));
			getMyStores({ user: me?.id, limit: 100, offset: 0 });
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
										<>
											{!!toggling.includes(index + 1) ? (
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
