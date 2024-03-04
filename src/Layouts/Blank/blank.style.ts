import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.color};
	position: absolute;
	top: 80px;
	width: 100%;
`;
