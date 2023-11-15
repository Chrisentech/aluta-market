import styled from "styled-components";

export const Wrapper = styled.footer`
	// padding: 40px 80px;

	.logo_content {
		color: #505050;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px; /* 150% */
		letter-spacing: -0.2px;
    margin:20px 0
	}
`;

export const FooterTop = styled.footer`
  padding: 40px 80px;
  display: grid;
  grid-template-columns: 1.5fr repeat(5, 1fr);
  gap: 10px;
`;
export const FooterItems = styled.div`
  padding: 20px;
  font-size: 16px;
  h3 {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
  ul {
    color: #8b96a5;
   
    li {
      margin: 10px 0;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: -0.2px;
      transition: 0.3s ease;
      &:hover {
        color: #000;
      }
    }
  }
`;
export const FooterBrand = styled.div`
  padding: 20px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
  svg {
    transition: 0.3s ease;
    font-size: 32px;
    cursor: pointer;
    &:hover {
      color: #000 !important;
    }
  }
  .flex {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  .brand {
    margin: 20px 0;
  }
`;
export const FooterBottom = styled.div`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f4;
  select {
    border: 0;
    outline: 0;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    cursor: pointer;
    color: #8b96a5;
    padding: 0 20px;
    &:hover {
      color: #ff001f;
    }
    option {
      color: #8b96a5;
    }
  }
`;