import styled from "styled-components";
import { AppColors } from "../../Constants";
import { NavLink } from "react-router-dom";

export const Container = styled.div<{ background?: string }>``;

export const ListWrapper = styled.div<{
	gap?: string | undefined;
	type?: string | undefined;
}>`
	width: 100%;
	display: flex;
	gap: ${({ gap }) => (gap ? gap : "5px")};
	flex-direction: column;
	.card {
		min-height: 139px;
	}
`;

export const ProductCard = styled.div<{
	view?: string;
	background?: string;
	type?: string;
}>`
	gap: ${({ type }) => (type === "type1" ? "40px" : "")};
	display: flex;
	flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
	background: ${({ background }) => (background ? background : "5px")};
	.list {
		height: 100px;
	}
	@media (max-width: 900px) {
		flex-direction: ${({ view }) => (view === "grid" ? "column" : "column")};
		.list {
			justify-content: unset !important;
		}
	}
	.detail {
		flex: 0.2;
		text-align: end;
		color: #fa3434;
		font-weight: 700;
		@media (max-width: 900px) {
			font-size: small;
		}
		@media (max-width: 600px) {
			text-align: start;
			margin-top: 10px;
			padding: 0 10px;
		}
	}
	.image {
		height: 120px;
		padding: 20px;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.grid_img {
		img {
			height: 150px;
		}
	}
`;

export const ProductDetails = styled.div<{ view?: string; type?: string }>`
	flex: 0.8;
	background: #fff;
	height: 60px;
	padding: ${({ type }) => (type === "type1" ? "" : "0 10px")};
	@media (max-width: 900px) {
		height: unset;
	}
	.time {
		color: #505050;
	}
	h1 {
		color: ${({ view }) => (view === "grid" ? "#606060" : "#1c1c1c")};
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		width: ${({ view }) => (view === "grid" ? "" : "inherit")};
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 22px;
		// margin:0
	}
	.flex {
		display: flex;
		justify-content: space-between;
	}
	.price {
		display: flex;
		gap: 5px;
		margin: 8px 0;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: ${({ view }) => (view === "grid" ? "18px" : "20px")};
		font-style: normal;
		font-weight: 600;
		line-height: 28px; /* 140% */
		letter-spacing: -0.2px;
		@media (max-width: 900px) {
			font-size: 16px;
		}
		span:nth-child(2) {
			text-decoration: line-through;
			color: #8b96a5;
			font-size: 16px;
		}
	}
`;
export const ProductFlex = styled.div`
	display: flex;
	//   gap: 20px;
	align-items: center;
	span {
		font-feature-settings: "clig" off, "liga" off;
		/* Text-base */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: ${AppColors.brandGray};
	}
	.rating {
		color: ${AppColors.brandYellow};
		margin: 0 15px;
	}
`;

export const ProductDescr = styled.p`
	color: ${AppColors.brandGray};
	font-feature-settings: "clig" off, "liga" off;
	/* Text-info */
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 150% */
	letter-spacing: -0.2px;
	margin: 8px 0;
`;

export const ViewButton = styled(NavLink)`
	color: #0d6efd;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

export const WishCard = styled.div`
	padding: 10px;
	height: 20px;
	width: 20px;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
	cursor: pointer;
	position: absolute;
	right: 20px;
`;

export const GridWrapper = styled.div<{
	gap: string | undefined;
	itempergrid: number;
	type?: string;
}>`
	box-sizing: border-box;
	width: 100%;
	display: grid;
	margin: auto;
	gap: ${({ gap }) => (gap ? gap : "10px")};
	grid-template-columns: ${({ itempergrid }) =>
		itempergrid ? `repeat(${itempergrid},1fr)` : "repeat(3,1fr)"};
`;

export const StatusBadge = styled.div<{ status: string }>`
	width: 100px;
	text-align: center;
	padding: 3px 12px;
	border-radius: 29px;
	margin: 10px 0;
	background: ${({ status }) =>
		status === "pending"
			? "#ff76121a"
			: status === "processing"
			? "#FF001F1A"
			: "#00B5171A"};
	color: ${({ status }) =>
		status === "pending"
			? "#ff7612"
			: status === "processing"
			? "#FF001F"
			: "#00B517"};
`;
