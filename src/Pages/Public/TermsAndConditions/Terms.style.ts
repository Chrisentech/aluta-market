import styled from "styled-components";

export const Page = styled.div`
	min-height: 50vh;
	width: 100%;
	margin: 30px auto;
	background: #f7fafc;
	margin-top: 40px;

	p {
		font-size: 16px;
		font-family: inter;
		font-weight: 400;
	}
`;

export const Wrapper = styled.div`
	width: 1180px;
	margin: 90px auto;
	font-family: inter;
	@media (max-width: 1200px) {
		width: 90%;
	}

	h1 {
		color: #1c1c1c !important;
		font-size: 32px;
		font-weight: 600;
		letter-spacing: -0.2px;
		@media (max-width: 780px) {
			font-size: 24px;
		}
	}
	.must-not,
	.return-policy {
		li {
			margin-bottom: 10px;
		}
	}
	.return-policy {
		li {
			display: inline-block;
		}
	}
`;

export const TitleBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
`;

export const Icon = styled.div`
	border-radius: 50%;
	width: 68px;
	height: 67px;
	background: linear-gradient(180deg, #ff7612 0%, #ff001f 100%);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MainBlock = styled.section`
	margin-top: 70px;
	color: #000;
	text-align: justify;

	font-size: 20px;
	font-weight: 400;

	h2 {
		font-size: 32px;
		font-weight: 600;
		letter-spacing: -0.2px;
		@media (max-width: 780px) {
			font-size: 24px;
		}
	}

	h3 {
		font-size: 27px;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: -0.2px;
		@media (max-width: 780px) {
			font-size: 18px;
		}
	}

	h4 {
		display: inline-block;
		font-weight: 600;
	}
	section {
		// margin: 65px auto;
	}

	p {
		margin: 30px auto;
	}

	em {
		font-style: normal;
		font-weight: 700;
	}

	ul {
		list-style-type: disc !important;
	}

	ol {
		list-style: decimal !important;
	}

	.link {
		color: #0d6efd;
		font-size: 20px;
		font-weight: 700;
		text-decoration-line: underline;
		transition: 0.4s ease;

		&:hover {
			color: #ff7612;
		}
	}
	.commissions,
	.commissions-footer {
		margin-top: 65px;
	}
`;

export const UList = styled.ul<{ disc?: boolean }>`    
    list-style-type: none;
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;

        &::before {
            content: "";
            height: 6px;
            width: 6px;
            color: #000;
            background: #000;
            border-radius: 50%;
            display: inline-block;
            margin-left: 15px;
        }
`;
