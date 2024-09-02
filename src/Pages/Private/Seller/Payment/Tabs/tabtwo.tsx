import React from "react";
import { Card, Table } from "../../../../../Shared/Components";
import { DepositIcon, WithdrawIcon } from "../../../../../assets";
import { useSelector } from "react-redux";
import { selectStore } from "../../../../../Features/store/storeSlice";

const TransactionTab: React.FC = () => {
	const store = useSelector(selectStore);
	const transactions = store?.transactions?.filter(
		(transaction: any) => transaction.category === "transaction"
	);
	// const data = [
	// 	{
	// 		date: "01:06pm 12.03.23",
	// 		amount: "N12,000",
	// 		deposit: "Deposit from",
	// 		contact: "Ebenezer Adelaja",
	// 		approved: "Approved",
	// 	},
	// 	{
	// 		date: "02:15pm 12.03.23",
	// 		amount: "N5,000",
	// 		withdraw: "Withdraw to",
	// 		user: "Grace Johnson",
	// 		canceled: "Canceled",
	// 	},
	// 	{
	// 		date: "09:45am 13.03.23",
	// 		amount: "N20,000",
	// 		deposit: "Deposit from",
	// 		user: "Michael Opeyemi",
	// 		approved: "approved",
	// 	},
	// 	{
	// 		date: "11:30am 14.03.23",
	// 		amount: "N7,500",
	// 		deposit: "Deposit from",
	// 		user: "Chidi Okeke",
	// 		pending: "Pending",
	// 	},
	// 	{
	// 		date: "03:22pm 15.03.23",
	// 		amount: "N10,000",
	// 		deposit: "Deposit from",
	// 		user: "Amara Chukwu",
	// 		approved: "approved",
	// 	},
	// 	{
	// 		date: "08:05am 16.03.23",
	// 		amount: "N15,000",
	// 		withdraw: "Withdraw to",
	// 		user: "Olumide Balogun",
	// 		approved: "approved",
	// 	},
	// ];

	const columns = [
		{ header: "Date", accessor: "date" },
		{ header: "Amount", accessor: "amount" },
		{
			header: "Type",
			accessor: (row: any) => {
				if (row.deposit) {
					return (
						<div style={{ display: "flex", gap: 4 }}>
							<DepositIcon />
							<span>Deposit From</span>
						</div>
					);
				} else if (row.withdraw) {
					return (
						<div style={{ display: "flex", gap: 4 }}>
							<WithdrawIcon />
							<span>Withdraw to</span>
						</div>
					);
				}
			},
		},
		{ header: "Contact Name", accessor: "user" },
		{
			header: "Status",
			accessor: (row: any) => {
				// row.approved || row.canceled || row.pending
				if (row.approved) {
					return (
						<div
							style={{
								padding: "5px 10px",
								color: "#00B517",
								width: 100,
								margin: "auto",
								background: "#D0FFD6",
								borderRadius: "12px",
							}}
						>
							Approved
						</div>
					);
				} else if (row.pending) {
					return (
						<div
							style={{
								padding: "5px 10px",
								color: "#F37F00",
								width: 100,
								margin: "auto",
								background: "#FFF2D9",
								borderRadius: "12px",
							}}
						>
							Pending
						</div>
					);
				} else if (row.canceled) {
					return (
						<div
							style={{
								padding: "5px 10px",
								color: "#FA3434",
								width: 100,
								margin: "auto",
								background: "#FA343426",
								borderRadius: "12px",
							}}
						>
							Canceled
						</div>
					);
				}
			},
		},
	];
	return (
		<Card
			width="100%"
			padding="40px 80px"
			height="500px"
			borderRadius="20px"
			onHover={false}
			className="card2"
		>
			<div className="flex">
				<h2>All Transactions</h2>
			</div>
			<Table data={transactions} columns={columns} />
		</Card>
	);
};

export default TransactionTab;
