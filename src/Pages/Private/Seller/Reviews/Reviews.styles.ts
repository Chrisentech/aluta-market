import styled from "styled-components";

export const Wrapper = styled.div`
	box-sizing: border-box;
	//   height: 200px;
	width: 100%;
	padding: 20px;
	margin-top: 10px;
	overflow-x: hidden;
	h2 {
		color: var(--dark, #1c1c1c);
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H3 */
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px; /* 133.333% */
		letter-spacing: -0.2px;
	}
	.grid {
		.card {
			background: #f7fafc;
			box-shadow: none;
			border-radius: 8px;
			padding: 15px 20px;
		}
	}
	.grid_container {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		gap: 16px; /* Adjust the gap as needed */
		.good {
			background: #00b517;
			margin-bottom: 10px;
		}
		.fair {
			margin-bottom: 10px;
			background: rgba(255, 144, 23, 1);
		}
		.bad {
			margin-bottom: 10px;
			background: #fa3434;
		}
		div {
			padding: 10px 20px;
			height: 200px;
			border-radius: 5px;
		}
	}
	.header {
		border-bottom: 1px solid rgba(239, 242, 244, 1);
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		padding-bottom: 10px;
		.flex {
			display: flex;
			gap: 10px;
		}
	}
`;

export const Top = styled.div`
	box-sizing: border-box;
	height: 95px;
	padding: 20px 40px;
	border-bottom: 1px solid #eff2f4;
	margin-bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: inter;
	.filters {
		display: flex;
		flex-direction: row;
		height: 48px;
		gap: 15px;
		select {
			box-sizing: border-box;
			height: 100%;
			width: 133px;
			padding: 10px;
			border-radius: 6px;
			outline: none;
			background: #ffffff;
			border: 1px solid #dee2e7;
			font-size: 16px;
			font-weight: 400;
			color: #8b96a5;
		}
	}
`;

export const SearchTab = styled.div`
	box-sizing: border-box;
	// width: 450px;
	height: 48px;
	padding: 8px;
	align-items: center;
	display: flex;
	border: 1px solid #dee2e7;
	border-radius: 6px;
	overflow: hidden;
	.search-input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 16px;
		&::placeholder {
			color: #8b96a5;
		}
	}
	.icon {
		color: #8b96a5;
		font-size: 22px;
		border: none;
		padding: 8px;
	}
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: space-between;
	button {
		margin-top: 10px;
	}

	// background: #F7FAFC;
	padding: 0px;
	margin: 0px;

	.left {
		display: flex;
		align-items: center;
		// justify-content: center;
		flex-direction: row;
		gap: 15px;
		width: 60%;
	}
	.images {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		background: #fff;

		img {
			width: 65px;
			height: 65px;
		}
	}
	.buttons {
		text-align: end;
		span {
			margin-right: 10px;
		}
	}
`;
