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

interface TableColumn {
  header: string;
  accessor: string;
}

interface ResponsiveTableProps {
  data: any[];
  columns: TableColumn[];
  className?: string;
}

const Table: React.FC<ResponsiveTableProps> = ({ data, columns, className }) => {
  const [toggle, setToggle] = useState<number[]>([]);

  const handleAddtoWishList = (id: number) => {
    if (toggle.includes(id)) {
      setToggle(toggle.filter((el) => el !== id));
    } else {
      setToggle([...toggle, id]);
    }
  };

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
                  ) : column.accessor === "img" ? (
                    <img width={50} src={item[column.accessor]} alt="Image" />
                  ) : column.accessor === "options" ? (
                    <div className="flexy">
                      <AiOutlineLink size="21px" />
                      <IoPencil size="21px" />
                      <MdDeleteOutline size="21px" />
                    </div>
                  ) : column.accessor === "stock" ? (
                    toggle.includes(index) ? (
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
