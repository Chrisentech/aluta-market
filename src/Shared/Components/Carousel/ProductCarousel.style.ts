import styled from "styled-components";

// Color Picker styles

export const ColorListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

export const ColorItem = styled.div<{ isSelected?: boolean }>`
	width: 48px;
	height: 48px;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 6px;
	border: ${({ isSelected }) =>
		isSelected ? "1px solid #505050" : "1px solid #dee2e7"};
	cursor: pointer;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const GrayBox = styled(ColorItem)`
	background-color: #eff2f4;
	border: none;
	cursor: no-drop;
`;

// Carousel Styles

export const CarouselContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	// background: red;
`;

export const SelectedImage = styled.img`
	// width: 380px;
	height: 380px;
	border-radius: 4px;
	border: 1px solid #dee2e7;
`;

export const ImageList = styled.div`
	display: flex;
	justify-content: space-between;
	width: 380px;
	margin-top: 24px;
`;

interface ThumbnailProps {
	isSelected?: boolean;
	size?: number;
}

export const Thumbnail = styled.img<ThumbnailProps>`
	width: ${({ size }) => (size ? size + "px" : "56px")};
	height: ${({ size }) => (size ? size + "px" : "56px")};
	cursor: pointer;
	border-radius: 4px;
	border: 2px solid ${({ isSelected }) => (isSelected ? "#505050" : "#DEE2E7")};

	&:hover {
		border-color: #505050;
	}
`;
