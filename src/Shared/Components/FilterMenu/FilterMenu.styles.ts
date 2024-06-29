import styled from "styled-components";
import { check } from "../../../assets";

export const FilterContainer = styled.div`
	cursor: pointer;
	width: 230px;
`;

export const DropdownContainer = styled.div`
	border-top: 1px solid #dee2e7;
	font-family: inter;
	padding: 10px 0 20px 0;
	.heading {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		margin-bottom: 10px;
		span:first-child {
			font-weight: 600;
			display: flex;
		}
	}
`;

export const OptionsContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
  width: 100%;
  .list {
    display: flex;
    flex-direction: column;
    .option {
      position: relative;
      padding: 10px 0;
      display: flex;
      align-items: center;
      input[type="checkbox"] {
        appearance: none;
      }
      .custom {
        box-sizing: border-box;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border: 3px solid #BDBDBD;
        border-radius: 4px;
        margin-right: 10px;
      }

      input {
        &:checked {
          ~ .custom {
            background: url(${check});
            border: none;
          }
        }
      } 
    }
  }
  .see-all {
    color: #0D6EFD;
    cursor: pointer;
    display: inline-block;
    margin: 10px 0;
    &:hover {
      color: #FA3434;
    }
  }
}
`;
