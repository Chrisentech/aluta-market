import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import { loginLogo, phone } from "../../../assets";

// Invoice container and styled components
const InvoiceContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	// margin-top: 120px;
	padding: 20px;
	font-family: "Arial", sans-serif;
	height: calc(100vh - 40px);
	// display: flex;
	// flex-direction: column;
	position: relative;
`;

const InvoiceHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ddd;
	align-items: start;
	padding-bottom: 5px;
	margin-bottom: 20px;
`;

const Reciever = styled.div`
	margin: 20px 0 20px auto;
	float: inline-end;
	text-align: right;
	p {
	}
`;
const CompanyInfo = styled.div`
	font-size: 16px;
	font-weight: bold;
	h1 {
		font-sie: 24px;
	}
	h3 {
		font-size: 18px;
		// margin-bottom: 50px;
	}
`;

const InvoiceDetails = styled.div`
	text-align: right;
	font-size: 14px;
`;
const Section = styled.div`
	background: #fa343438 !important;
	border-radius: 5px;
	padding: 10px 20px;
	min-height: 40px;
	width: calc(100% - 40px);
	margin-top: 130px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	p,
	h3 {
		display: flex;
		gap: 20px;
		margin: 10px 0;
	}
	.diff {
		h3,
		p {
			margin: 2px 0;
		}
	}
`;
const InvoiceItems = styled.table`
	width: 100%;
	margin-bottom: 20px;
	border-collapse: collapse;
	border-spacing: 0;
	table,
	th,
	td {
		border: none;
	}
	thead tr {
	}
`;

const TableHeader = styled.th`
	padding: 12px 8px;
	text-align: left;
	// background-color: #f4f4f4;
	background: #fa343438 !important;
	border: 1px solid #ddd;
`;

const TableCell = styled.td`
	padding: 12px 8px;
	text-align: left;
	border-bottom: 1px solid #ddd !important;
`;

const TotalRow = styled.tr`
	font-weight: bold;
	// background-color: #f4f4f4;
	td {
		width: 100%;
		border: none !important;
	}
`;

const CallToActionButton = styled.button`
	background-color: #fa3434;
	color: white;
	font-size: 16px;
	padding: 10px 20px;
	margin-top: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #45a049;
	}
`;

const PrintButton = styled.button`
	background-color: #fa3434;
	color: white;
	font-size: 16px;
	// padding: 10px ;
	// margin-top: 20px;
	width: 100%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	td {
		width: 100%;
	}
`;

const Footer = styled.footer`
	border-top: 1px solid #ddd;
	display: flex;
	margin-top: auto;
	font-size: 16px;
	position: absolute;
	bottom: 20px;
	width: calc(100% - 40px);
`;

export const Invoice: React.FC<any> = ({ data }) => {
	const contentRef = useRef<any>(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	return (
		<div>
			<InvoiceContainer>
				{/* Invoice Header Section */}
				<InvoiceHeader>
					<CompanyInfo>
						<div
							style={{
								display: "flex",
								gap: 10,
								marginBottom: 30,
								alignItems: "center",
							}}
						>
							<img src={loginLogo} alt="Logo" style={{ width: 50 }} />
							<h3>Hello</h3>
						</div>
					</CompanyInfo>
					<InvoiceDetails>
						<h1>Invoice</h1>
					</InvoiceDetails>
				</InvoiceHeader>
				<Reciever>
					<p>Reciever:</p>
					<h3>Lorem Arike Laureen</h3>
					<p>aluta@market.com</p>
					<p>0923244442</p>
				</Reciever>
				<Section>
					<div>
						<p>
							<span>Invoice ID: </span>
							<span>AM-2345</span>
						</p>
						<p>
							<span>Due Date:</span>
							<span>11-04-2023</span>
						</p>
						<h3>
							<span>Amount:</span>
							<span>NGN 202,322</span>
						</h3>
					</div>
					<div
						className="diff"
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "end",
						}}
					>
						<h3>Pay Options</h3>
						<p>022233233</p>
						<p>Wema Bank</p>
						<p>Arike collections</p>
						<CallToActionButton
							onClick={() => alert("Thank you for your payment!")}
						>
							Pay Now
						</CallToActionButton>
					</div>
				</Section>
				{/* Invoice Items Section */}
				<InvoiceItems>
					<thead>
						<tr>
							<TableHeader>DESCRIPTION</TableHeader>
							<TableHeader>UNIT PRICE</TableHeader>
							<TableHeader>QTY</TableHeader>
							<TableHeader>TOTAL</TableHeader>
						</tr>
					</thead>
					<tbody>
						<tr>
							<TableCell>Product description here</TableCell>
							<TableCell>2</TableCell>
							<TableCell>$10</TableCell>
							<TableCell>$20</TableCell>
						</tr>
						<tr>
							<TableCell>Another product description</TableCell>
							<TableCell>1</TableCell>
							<TableCell>$15</TableCell>
							<TableCell>$15</TableCell>
						</tr>
					</tbody>
				</InvoiceItems>
				{/* Total Section */}
				<div style={{ width: "200px", marginLeft: "auto" }}>
					<tbody>
						<TotalRow>
							<TableCell colSpan={4}>SUBTOTAL</TableCell>
							<TableCell>$35</TableCell>
						</TotalRow>
					</tbody>

					<PrintButton>
						<tbody>
							<TotalRow>
								<TableCell colSpan={4}>TOTAL</TableCell>
								<TableCell>$35</TableCell>
							</TotalRow>
						</tbody>
					</PrintButton>
				</div>
				{/* Call to Action Buttons */}
				<div>
					<CallToActionButton
						onClick={() => alert("Thank you for your payment!")}
					>
						Pay Now
					</CallToActionButton>
				</div>
				{/* Print / Download Button */}
				<PrintButton onClick={() => reactToPrintFn()}>
					Print / Download Invoice
				</PrintButton>
			</InvoiceContainer>

			{/* The Printable Invoice Section */}
			<div style={{ display: "none" }}>
				<div ref={contentRef}>
					<InvoiceContainer>
						<InvoiceHeader>
							<CompanyInfo>
								<div
									style={{
										display: "flex",
										gap: 10,
										marginBottom: 30,
										alignItems: "center",
									}}
								>
									<img src={phone} alt="Logo" style={{ width: 50 }} />
									<h3>Hello</h3>
									<h3>{data?.storeName}</h3>
								</div>
								<p>{data?.storeLink}</p>
							</CompanyInfo>
							<InvoiceDetails>
								<h1>Invoice</h1>
							</InvoiceDetails>
						</InvoiceHeader>
						<Reciever>
							<p>Reciever:</p>
							<h3>{data?.recieverName}</h3>
							<p>{data?.recieverEmail}</p>
							<p>{data?.recieverPhone}</p>
						</Reciever>
						<Section>
							<div>
								<p>
									<span>Invoice ID: </span>
									<span>{data?.invoiceID}</span>
								</p>
								<p>
									<span>Due Date:</span>
									<span>{data?.dueDate}</span>
								</p>
								<h3>
									<span>Amount:</span>
									<span>NGN {data?.amount}</span>
								</h3>
							</div>
							<div
								className="diff"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "end",
								}}
							>
								<h3>Pay Options</h3>
								<p>{data?.accountNumber}</p>
								<p>{data?.bankName}</p>
								<p>{data?.accountName}</p>
								<CallToActionButton
									onClick={() => alert("Thank you for your payment!")}
								>
									Pay Now
								</CallToActionButton>
							</div>
						</Section>
						{/* Invoice Items Section */}
						<InvoiceItems>
							<thead>
								<tr>
									<TableHeader>DESCRIPTION</TableHeader>
									<TableHeader>UNIT PRICE</TableHeader>
									<TableHeader>QTY</TableHeader>
									<TableHeader>TOTAL</TableHeader>
								</tr>
							</thead>
							<tbody>
								<tr>
									<TableCell>Product description here</TableCell>
									<TableCell>2</TableCell>
									<TableCell>$10</TableCell>
									<TableCell>$20</TableCell>
								</tr>
								<tr>
									<TableCell>Another product description</TableCell>
									<TableCell>1</TableCell>
									<TableCell>$15</TableCell>
									<TableCell>$15</TableCell>
								</tr>
							</tbody>
						</InvoiceItems>

						<div style={{ width: "200px", marginLeft: "auto" }}>
							<tbody>
								<TotalRow>
									<TableCell colSpan={4}>SUBTOTAL</TableCell>
									<TableCell>$35</TableCell>
								</TotalRow>
							</tbody>

							<PrintButton>
								<tbody>
									<TotalRow>
										<TableCell colSpan={4}>TOTAL</TableCell>
										<TableCell>$35</TableCell>
									</TotalRow>
								</tbody>
							</PrintButton>
						</div>

						<Footer>
							e-invoice by{" "}
							<a style={{ color: "#ff001f" }} href="#">
								{" "}
								Alutamarket
							</a>
						</Footer>
					</InvoiceContainer>
				</div>
			</div>
		</div>
	);
};
