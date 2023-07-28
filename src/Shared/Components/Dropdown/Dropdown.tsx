import React, { useState } from "react";
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

interface DropdownProps {
  options: any;
  selectedOption: string;
  handleOptionClick: (option: string) => void;
  background?: string;
  dropDown_one?: boolean;
  hasAvatar?: boolean;
  padding?: string;
  offset?: string;
  width?: string;
  state?: boolean;
  margin?: string;
  className?: string;
  disabled?: boolean;
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
  dropDown_one,
  disabled,
  className,
  hasAvatar,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownWrapper
      disabled={disabled}
      background={background}
      padding={padding}
      offset={offset}
      margin={margin}
      onClick={() => setIsOpen(state ? !state : !isOpen && !disabled)}
      onMouseOver={() => setIsOpen(state ? state : true && !disabled)}
      onMouseOut={() => setIsOpen(state ? !state : !isOpen && !disabled)}
      width={width}
      className={className}
    >
      <DropdownSelected onChange={() => alert("hi")}>
        {(state ? state : isOpen) && dropDown_one ? (
          <PiCaretUpBold as={PiCaretIcon} />
        ) : !isOpen && dropDown_one ? (
          <PiCaretDownBold as={PiCaretIcon} />
        ) : (
          <PiCaretUpDownBold />
        )}
        {hasAvatar && <span className="avatar">A</span>}{" "}
        <span>{selectedOption} </span>
      </DropdownSelected>
      {(state ? state : isOpen) && (
        <DropdownOptions
          open={state ? state : isOpen}
          onMouseLeave={() => !state && setIsOpen(false)}
        >
          {options.map((option: any) => (
            <DropdownOption
              key={option}
              onClick={() => handleOptionClick(option)}
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
  dropDown_one: true,
  disabled: false,
};
export default Dropdown;

{
  /* <div onm>

</div> */
}
