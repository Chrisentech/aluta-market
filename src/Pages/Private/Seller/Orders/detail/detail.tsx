import React from "react";
import {  useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { Card, Table } from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import { selectActiveModal } from "../../../../../Features/modal/modalSlice";
import { calendar, cloth, phone, watch } from "../../../../../assets";
import { CustomerDetails, OrderStatus, Wrapper, ModalWrapper } from "./detail.styles";
import { BsCheckCircle } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const data = [
  {
    img: cloth,
    item: "Hoodie",
    category: "Cloth",
    price: "N3000",
    quantity: "10",
    options: "10",
    stock: "18 Aug 2023",
  },
  {
    img: phone,
    item: "Iphone 13 pro",
    category: "Mobile Phone & PC",
    price: "N7000",
    options: "10",
    stock: "12 Aug 2023",
    quantity: "5",
  },
  {
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
  { header: "", accessor: "img" },
  { header: "Product", accessor: "item" },
  { header: "Quantity", accessor: "quantity" },
  { header: "Price", accessor: "price" },
  { header: "Total", accessor: "price" },
];

const Screen: React.FC = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  
  return (
    <Wrapper>
      <div className="flex">
        <h2>Order {id}</h2>
      </div>
      <Card
        className="main"
        width="100%"
      >
        <div className="head">
          <h3>Order details for {id}</h3>
        </div>
        <OrderStatus>
          <div className="info">
            <div className="title"><img src={calendar} />Date</div>
            <div className="detail">4:34PM  Wed 13 Aug, 2023</div>
          </div>
          <div className="info">
            <div className="title"><BsCheckCircle size={22} color="#292D32"/> Status</div>
            <div className="status">Processing</div>
          </div>
        </OrderStatus>
        <div className="table-wrapper">
          <Table data={data} columns={columns} />
          <div className="total">
            <p className="label">Total</p>
            <p className="value">9500</p>
          </div>
        </div>
        <CustomerDetails>
          <h3>Customer Details</h3>
          <div className="bottom">
            <div className="contact">
              <div className="initial">A</div>
              <div>
                <p className="name">Arike Laureen</p>
                <p className="number">08021123443</p>
              </div>
            </div>
            <div className="location">
              <IoLocationOutline size={34}/>
              <p className="address">Scarlet Hostel, adjacent Yemco saloon, Education, Fuoye, Oye</p>
            </div>
          </div>
        </CustomerDetails>
        
      </Card>
        
    </Wrapper>
  );
};

const Modal: React.FC<{ confirmed?: boolean }> = () => {
  return (
    <ModalWrapper>
      <div className="top">
      </div>
    </ModalWrapper>
  )
}

const OrderDetail = () => {
  const activeModal = useSelector(selectActiveModal);
  // const dispatch = useDispatch();

  // dispatch(showModal('confirmOrder'))

  return (
      <Layout 
          layout={"dashboard"} 
          component={Screen} 
          state={false} 
          showModal={activeModal}
          popUpContent={<Modal confirmed/>}
          navMode="noSearch"
      />
  )
};

export default OrderDetail;
