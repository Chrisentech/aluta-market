import styled from "styled-components";

interface TableRowProps {
  isHeader?: boolean;
}

export const TableContainer = styled.div`
  overflow-x: auto;
  .Pending {
    // background: #f37f004d;
    // padding: 5px !important;
    border-radius: 20px;
    // width: 100px;
    color: #f37f00;
  }
  .Delivered {
    // background: #00B5174d;
    // padding: 5px !important;
    border-radius: 20px;
    // width: 100px;
    color: #00b517;
  }
  .Cancelled {
    // background: #FA34344d;
    // padding: 5px !important;
    border-radius: 20px;
    // width: 100px;
    color: #fa3434;
  }
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr<TableRowProps>`
  ${(props) =>
    props.isHeader
      ? `
  color: var(--gray-500, #8B96A5);
font-feature-settings: 'clig' off, 'liga' off;
/* text-btn/btn-normal */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform:uppercase
  `
      : `
      color: var(--gray-600, #505050);
font-feature-settings: 'clig' off, 'liga' off;
/* text-btn/btn-normal */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
      `};
`;

export const TableCell = styled.td`
  padding: 20px 10px;
  border-bottom: 1px solid #dee2e7;
  &:last-child {
    text-align: center;
  }
  .flexy {
    display: flex;
    gap: 10px;

    svg {
      color: #8b96a5;
      text-align: center;
      &:hover {
        color: rgb(255 21 18 / 91%);
      }
    }
  }
`;
