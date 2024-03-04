import React from "react";
import { GridItem, Wrapper } from "./CreateStore.style";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { TbClockHeart } from "react-icons/tb";
import { Card, View } from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import {
	selectActiveModal,
	showModal,
} from "../../../../../Features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalContent from "./modals";
// import Switch from "react-switch";
import { shopWhite } from "../../../../../assets";

const Screen: React.FC = () => {
	// const [isOn, setIsOn] = useState(false);
	const dispatch = useDispatch();

	// const handleSwitchChange = (checked: any) => {
	// 	setIsOn(checked);
	// };

	return (
		<Wrapper>
			<div className="top">
				<h2>Getting Started</h2>
				{/* <div className="switch-box">
					<span>Switch to buyer</span>
					<label>
						<Switch
							onChange={handleSwitchChange}
							checked={isOn}
							onColor="#86d3ff"
							offColor="#BDBDBD"
							onHandleColor="#2693e6"
							handleDiameter={20}
							uncheckedIcon={false}
							checkedIcon={false}
							boxShadow="0px 1px 1px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
							height={25}
							width={48}
						/>
					</label>
				</div> */}
			</div>
			<Card
				width="100%"
				padding="40px 80px"
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<div className="center">
					<div className="badge">
						<img src={shopWhite} />
					</div>
					<h3>Create a new store</h3>
					<p className="p-20">
						You will get a free bank account, collect payments via multiple
						channels
					</p>
					<button
						className="createBtn"
						style={{ cursor: "pointer" }}
						onClick={() => dispatch(showModal("createStore"))}
					>
						<img src={shopWhite} /> Create a new store
					</button>
				</div>

				<View
					className="grid"
					mode="grid"
					itempergrid={3}
					type=""
					gap="15px"
					gridItems={[
						<GridItem background="#00B517">
							<div className="badge">
								<BsFillCreditCard2BackFill color="#00B517" size="24" />
							</div>
							<h3 className="title">Easy Payment Options</h3>
							<div className="label">
								Give your customers multiple ways to pay you - with transfers,
								cards, ussd & even split payments
							</div>
						</GridItem>,
						<GridItem background="#FF9017">
							<div className="badge">
								<IoWalletOutline color="#FF9017" size="24" />
							</div>
							<h3 className="title">Dedicated Business Account</h3>
							<div className="label">
								You get a dedicated business account number - this helps you
								separate your business finance
							</div>
						</GridItem>,
						<GridItem background="#FA3434">
							<div className="badge">
								<TbClockHeart color="#FA3434" size="24" />
							</div>
							<h3 className="title">72 hours withdrawal</h3>
							<div className="label">
								Funds can only be withdrawn after to your bank account after 72
								hours in case of refund
							</div>
						</GridItem>,
					]}
				/>
			</Card>
		</Wrapper>
	);
};

const CreateStore = () => {
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			showModal={activeModal}
			layout={"dashboard"}
			component={Screen}
			popUpContent={<ModalContent active={activeModal} />}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default CreateStore;
