import React, { useState, ReactNode } from "react";
import {
	PiCaretDownBold,
	PiCaretUpDownBold,
	PiCaretUpBold,
} from "react-icons/pi";
import {
	DropdownWrapper,
	DropdownSelected,
	DropdownOptions,
	DropdownOption,
	PiCaretIcon,
} from "./dropdown.styles.ts";
import { useSelector } from "react-redux";
import { selectStore } from "../../../Features/store/storeSlice.ts";

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
	margin?: string;
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
	selectedOption,
	handleOptionClick,
	background,
	state,
	padding,
	width,
	offset,
	margin,
	type,
	disabled,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const store = useSelector(selectStore);
	return (
		<DropdownWrapper
			disabled={disabled}
			background={background}
			padding={padding}
			offset={offset}
			margin={margin}
			type={type}
			onClick={() => setIsOpen(state ? !state : !isOpen && !disabled)}
			onMouseOver={() => setIsOpen(state ? state : true && !disabled)}
			onMouseOut={() => setIsOpen(state ? !state : !isOpen && !disabled)}
			width={width}
			className={className}
		>
			<DropdownSelected padding={padding} onChange={() => alert("hi")}>
				{(state ? state : isOpen) ? (
					<PiCaretUpBold as={PiCaretIcon} />
				) : (
					<PiCaretDownBold as={PiCaretIcon} />
				)}
				{type === "dropdown_one" && store?.name ? (
					<>
						<span className="avatar">A</span>{" "}
						<span className="store-title">{store?.name} Collection </span>
					</>
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
					{options.map((option: any) => (
						<DropdownOption
							key={option}
							onClick={() => handleOptionClick(option)}
							type={type}
						>
							{option}
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
};
export default Dropdown;

{
	/* <div onm>

</div> */
}
