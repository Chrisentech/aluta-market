import styled from "styled-components";

// Styling for the toast container
export const ToastContainer = styled.div<{
	type: "error" | "success" | "message";
}>`
	background-color: ${(props) =>
		props.type === "error"
			? "#000"
			: props.type === "success"
			? "#33ff33"
			: "#333"};
	color: #fff;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 8px;
	background: blue;
	z-index: 1000000000000;
	position: fixed; /* or absolute */
	top: 10px; /* Adjust the top and left values as needed */
	left: 50%;
	transform: translateX(-50%);
`;
