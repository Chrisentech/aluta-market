import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: ${(props) => props.color};
	width: 100%;
	position: absolute;
	top: 80px;
	@media (max-width: 780px) {
		position: unset;
	}
`;
