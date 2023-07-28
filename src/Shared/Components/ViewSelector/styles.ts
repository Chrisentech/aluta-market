import styled from "styled-components";
import { AppColors } from "../../Constants";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const ListWrapper = styled.div<{ gap?: string | undefined }>`
  width: 100%;
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "5px")};
  flex-direction: column;
`;
export const ProductCard = styled.div<{ view?: string }>`
  gap: 40px;
  display: flex;
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
`;


export const ProductDetails = styled.div<{ view?: string }>`
  flex: 0.8;
  bacground: red;
  height: 60px;

  h1 {
    color: ${({ view }) => (view === "grid" ? "#606060" : "#1c1c1c")};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    width: ${({ view }) => (view === "grid" ? "80%" : "inherit")};
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
  width: 100%;
  padding: ${({ type }) => (type === "productGrid" ? "20px 0" : "20px")};
  margin: auto;
  display: grid;
  gap: ${({ gap }) => (gap ? gap : "10px")};
  grid-template-columns: ${({ itempergrid }) =>
    itempergrid ? `repeat(${itempergrid},1fr)` : "repeat(3,1fr)"};
`;
