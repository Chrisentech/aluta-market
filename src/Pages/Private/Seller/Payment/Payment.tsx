import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { Wrapper } from "./payment.styles";
import AccountTab from "./Tabs/tabone";
import TransactionTab from "./Tabs/tabtwo";
import InvoiceTab from "./Tabs/tabthree";
import { LogoutModal } from "../../../../Shared/Components";
import { useSelector } from "react-redux";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import { selectStores } from "../../../../Features/store/storeSlice";
import WithdrawAccountTab from "./Tabs/tabfour";

const Screen: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<div className="tab_selectors">
				<h2
					style={{
						color: activeTab === 0 ? "#3167EB" : "#909499",
						borderBottom:
							activeTab === 0 ? "2px solid #3167EB" : "2px solid #909499",
					}}
					onClick={() => setActiveTab(0)}
				>
					Account
				</h2>
				<h2
					style={{
						color: activeTab === 1 ? "#3167EB" : "#909499",
						borderBottom:
							activeTab === 1 ? "2px solid #3167EB" : "2px solid #909499",
					}}
					onClick={() => setActiveTab(1)}
				>
					Transactions
				</h2>
				<h2
					style={{
						color: activeTab === 2 ? "#3167EB" : "#909499",
						borderBottom:
							activeTab === 2 ? "2px solid #3167EB" : "2px solid #909499",
					}}
					onClick={() => setActiveTab(2)}
				>
					Invoice
				</h2>
				<h2
					style={{
						color: activeTab === 3 ? "#3167EB" : "#909499",
						borderBottom:
							activeTab === 3 ? "2px solid #3167EB" : "2px solid #909499",
					}}
					onClick={() => setActiveTab(3)}
				>
					Withdrawal Account
				</h2>
			</div>

			{activeTab === 0 ? (
				<AccountTab />
			) : activeTab === 1 ? (
				<TransactionTab />
			) : activeTab === 2 ? (
				<InvoiceTab />
			) : (
				<WithdrawAccountTab />
			)}
		</Wrapper>
	);
};

const Payment = () => {
	const activeModal = useSelector(selectActiveModal);

	const stores = useSelector(selectStores);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={stores.length === 0}
			showModal={activeModal}
			popUpContent={<LogoutModal />}
			navMode="noSearch"
		/>
	);
};

export default Payment;
