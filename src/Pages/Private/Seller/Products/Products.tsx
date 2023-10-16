import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./products.styles";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Card, Dropdown, Table } from "../../../../Shared/Components";
const categoryOptions = ["category", "Food", "Books", "Perfumes & Deodorant"];
const options = ["Last added"];
import { cloth, phone, wallet, watch } from "../../../../assets";
import { ROUTE } from "../../../../Shared/Constants";
const data = [
  {
    id: 1,
    img: cloth,
    item: "Hoodie",
    category: "Cloth",
    price: "N3000",
    quantity: "10",
    options: "10",
    stock: "18 Aug 2023",
  },
  {
    id: 2,
    img: phone,
    item: "Iphone 13 pro",
    category: "Mobile Phone & PC",
    price: "N7000",
    options: "10",
    stock: "12 Aug 2023",
    quantity: "5",
  },
  {
    id: 3,
    options: "10",
    img: wallet,
    item: "Mini Wallet",
    category: "Accessories",
    stock: "16 Aug 2023",
    price: "N2000",
    quantity: "1",
  },
  {
    id: 4,
    img: watch,
    options: "10",
    item: "Rolex watch",
    category: "Accessories",
    stock: "19 Aug 2023",
    price: "N4000",
    quantity: "10",
  },
  {
    id: 5,
    img: phone,
    options: "10",
    item: "Iphone 12",
    category: "Mobile Phone & PC",
    stock: "20 Aug 2023",
    price: "N6000",
    quantity: "5",
  },
  {
    id: 6,
    img: cloth,
    item: "Hoodie",
    category: "Cloth",
    options: "10",
    stock: "22 Aug 2023",
    price: "N3500",
    quantity: "10",
  },
  {
    id: 7,
    img: watch,
    options: "10",
    item: "Nike Watch",
    category: "Accessories",
    stock: "25 Aug 2023",
    price: "N5000",
    quantity: "5",
  },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "", accessor: "img" },
  { header: "Item", accessor: "item" },
  { header: "Category", accessor: "category" },
  { header: "Qnt", accessor: "quantity" },
  { header: "Price", accessor: "price" },
  { header: "Options", accessor: "options" },
  { header: "in-stock", accessor: "stock" },
];
const Screen: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <Wrapper>
      <div className="flex">
        <h2>Products</h2>
        <NavLink to={ROUTE.SELLER_NEWPRODUCT}>
          <button>
            <AiOutlinePlus /> Create new
          </button>
        </NavLink>
      </div>
      <Card width="100%" height="500px" borderRadius="20px" onHover={false}>
        <div className="flex">
          <AiOutlineSearch color="#8b96a5" className="diff" />
          <input type="search" placeholder="Search Products or services" />
          <div className="dropdown">
            <Dropdown
              options={categoryOptions}
              selectedOption={selectedOption}
              padding={"10"}
              handleOptionClick={handleOptionClick}
              offset="10px"
            />
            <Dropdown
              options={options}
              padding={"10"}
              // dropDown_one={false}
              selectedOption={options[0]}
              offset="12px"
              handleOptionClick={handleOptionClick}
            />
          </div>
        </div>
        <Table data={data} columns={columns} />
      </Card>
    </Wrapper>
  );
};

const Products = () => {
  return <Layout layout={"dashboard"} component={Screen} state={false} />;
};

export default Products;
