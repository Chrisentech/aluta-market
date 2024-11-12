// import React from "react";
// import {
// 	Page,
// 	Text,
// 	View,
// 	Document,
// 	StyleSheet,
// 	PDFDownloadLink,
// } from "@react-pdf/renderer";
// import styled from "styled-components";

// // Define styles for your PDF
// const styles = StyleSheet.create({
// 	page: {
// 		padding: 20,
// 		fontFamily: "Helvetica",
// 	},
// 	header: {
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		marginBottom: 20,
// 	},
// 	logo: {
// 		width: 100,
// 		height: "auto",
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 	},
// 	section: {
// 		margin: 10,
// 		padding: 10,
// 		flexGrow: 1,
// 	},
// 	footer: {
// 		position: "absolute",
// 		bottom: 30,
// 		left: 20,
// 		right: 20,
// 		textAlign: "center",
// 		fontSize: 12,
// 		color: "#888",
// 	},
// 	button: {
// 		marginTop: 20,
// 		padding: 10,
// 		backgroundColor: "#FF7612",
// 		color: "#FFFFFF",
// 		textAlign: "center",
// 		borderRadius: 5,
// 		cursor: "pointer",
// 	},
// });

// // Create the PDF document
// const InvoiceDocument = () => (
// 	<Document>
// 		<Page style={styles.page}>
// 			<View style={styles.header}>
// 				<img src="/path/to/logo.png" style={styles.logo} />{" "}
// 				{/* Replace with your logo path */}
// 				<Text style={styles.title}>Invoice</Text>
// 			</View>
// 			<View style={styles.section}>
// 				<Text>Date: {new Date().toLocaleDateString()}</Text>
// 				<Text>Amount: $100</Text>
// 				<Text>Customer: John Doe</Text>
// 				{/* Add more invoice details here */}
// 			</View>
// 			<Text style={styles.footer}>e-invoice by Alutamarket</Text>
// 		</Page>
// 	</Document>
// );

// // Styled component for the button
// const StyledButton = styled.div`
// 	margin-top: 12px;
// 	padding: 10px;
// 	background-color: #ff7612;
// 	color: white;
// 	text-align: center;
// 	border-radius: 5px;
// 	cursor: pointer;
// `;

// // Main Invoice component
// const Invoice: React.FC = () => {
// 	return (
// 		<div>
// 			<h1>Your Invoice</h1>
// 			<PDFDownloadLink
// 				document={<InvoiceDocument />}
// 				fileName="invoice.pdf"
// 				style={{ textDecoration: "none" }}
// 			>
// 				{({ loading }) => (
// 					<StyledButton>
// 						{loading ? "Preparing document..." : "Download Invoice"}
// 					</StyledButton>
// 				)}
// 			</PDFDownloadLink>
// 		</div>
// 	);
// };

// export default Invoice;
