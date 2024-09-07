import React, { useState, ReactNode, useEffect } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import {
	DropdownWrapper,
	DropdownSelected,
	DropdownOptions,
	DropdownOption,
} from "./dropdown.styles.ts";
import { useDispatch, useSelector } from "react-redux";
import {
	actions,
	selectStore,
	selectStores,
} from "../../../Features/store/storeSlice.ts";
import { getCapitalizedFirstLetter } from "../../Utils/helperFunctions.ts";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../Constants/index.ts";
import {
	setLoading,
	setNotLoading,
} from "../../../Features/loading/loadingSlice.ts";

interface DropdownProps {
	options: any;
	selectedOption: string;
	handleOptionClick: (option: string) => void;
	background?: string;
	type?: "dropdown_one" | "sidebar_menu";
	padding?: string;
	offset?: string;
	width?: string;
	state?: boolean;
	allowHover?: boolean;
	margin?: string;
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
	background,
	state,
	padding,
	width,
	offset,
	margin,
	type,
	disabled,
	className,
	allowHover,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	let stores = useSelector(selectStores);
	let store = useSelector(selectStore);
	const [selectedStores, setSelectedStores] = useState(store || stores[1]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	stores =
		stores?.length < 3 ? [{ name: "+ Create a new Store" }, ...stores] : stores;
	const handleOptionClick = (option: any) => {
		if (option?.name === "+ Create a new Store") {
			navigate(ROUTE.SELLER_CREATESTORE);
		} else {
			dispatch(setLoading());

			dispatch(actions.setStore(option));
			setSelectedStores(option);

			setTimeout(() => {
				dispatch(setNotLoading());
			}, 1500);
		}
	};

	useEffect(() => {
		if (!store) {
			dispatch(actions.setStore(stores[1]));
			setSelectedStores(stores[1]);
		}
	}, [stores]);
	return (
		<DropdownWrapper
			disabled={disabled}
			background={background}
			padding={padding}
			offset={offset}
			margin={margin}
			type={type}
			onClick={() => setIsOpen(state ? !state : !isOpen && !disabled)}
			onMouseOver={() =>
				allowHover ? setIsOpen(state ? state : true && !disabled) : null
			}
			onMouseOut={() =>
				allowHover ? setIsOpen(state ? state : true && !disabled) : null
			}
			width={width}
			className={className}
		>
			<DropdownSelected padding={padding} onChange={() => alert("hi")}>
				{(state ? state : isOpen) ? <PiCaretUpBold /> : <PiCaretDownBold />}
				{type === "dropdown_one" && selectedStores?.name ? (
					<div
						style={{
							display: "flex",
							gap: 10,
							alignItems: "center",
							marginLeft: 20,
						}}
					>
						{!selectedStores?.thumbnail ? (
							<span className="avatar">
								{getCapitalizedFirstLetter(selectedStores?.name)}
							</span>
						) : (
							<img
								src={selectedStores?.thumbnail}
								alt="..."
								width={50}
								style={{ borderRadius: "50%", height: 50 }}
							/>
						)}
						<span className="store-title">{selectedStores?.name} </span>
					</div>
				) : (
					<span className="store-title">{"+ Create a new Store"} </span>
				)}
			</DropdownSelected>
			{(state ? state : isOpen) && (
				<DropdownOptions
					open={state ? state : isOpen}
					onMouseLeave={() => !state && setIsOpen(false)}
					type={type}
				>
					{stores.map((option: any) => (
						<DropdownOption
							key={option}
							onClick={() => handleOptionClick(option)}
							type={type}
						>
							{option?.name}
						</DropdownOption>
					))}
				</DropdownOptions>
			)}
		</DropdownWrapper>
	);
};

Dropdown.defaultProps = {
	type: "sidebar_menu",
	disabled: false,
	allowHover: true,
};
export default Dropdown;

{
	/* <div onm>

</div> */
}
