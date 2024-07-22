import { Card, Table } from "../../../../../Shared/Components";
import { AiOutlineLink } from "react-icons/ai";
import { UploadIcon } from "../../../../../assets";
import { useNavigate } from "react-router-dom";
const InvoiceTab: React.FC = () => {
	const nav = useNavigate();
	const columns = [
		{ header: "Invoice ID", accessor: "invoice_id" },
		{ header: "Customer", accessor: "customer" },
		{ header: "Amount", accessor: "amount" },

		{
			header: "Options",
			accessor: () => {
				return (
					<div style={{ display: "flex", gap: 4 }}>
						{/* <DepositIcon /> */}
						<AiOutlineLink size="21px" color="#8B96A5" />
						<UploadIcon />
					</div>
				);
			},
		},
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
							Paid
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
							Failed
						</div>
					);
				}
			},
		},
	];
	const data = [
		{
			invoice_id: "AM-24EDX6",
			amount: "N12,000",
			customer: "Fola Peters",
			approved: true,
		},
		{
			invoice_id: "AM-24DWX4",
			amount: "N2,000",
			customer: "Jerome Kings",
			canceled: true,
		},
		{
			invoice_id: "AM-WFDWV4",
			amount: "N4,000",
			customer: "Aluko Johana",
			pending: true,
		},
	];
	return (
		<Card
			width="unset"
			padding="40px 80px"
			height="500px"
			borderRadius="20px"
			onHover={false}
			className="card3"
		>
			<div className="flex">
				<h2>All Invoices</h2>
				<div>
					<input type="search" placeholder="Search Invoices" />
					<button
						className="button"
						onClick={() => nav("/seller/payment/invoice/generate")}
					>
						Generate Invoice
					</button>
				</div>
			</div>

			<Table data={data} columns={columns} />
		</Card>
	);
};

export default InvoiceTab;
