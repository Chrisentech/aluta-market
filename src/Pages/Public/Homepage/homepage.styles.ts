import styled from "styled-components";
// import { AppColors } from "../../../Shared/Constants";

export const Home = styled.section`
	min-height: 50vh;
	width: 100%;
	margin: 30px auto;
	margin-top: 83px;
	background: #f7fafc;
`;

export const Hero = styled.section`
	box-sizing: border-box;
	--gray-300: #dee2e7;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-family: Inter;
	font-weight: 400;
	width: 90%;
	margin: 25px auto;
	height: 400px;
	background: #fff;
	border: 1px solid var(--gray-300);
	margin: 30px auto;
	padding: 10px 20px;

	.banner {
		background-size: cover;
		background-position: top center;
		margin: auto;
		div {
			position: relative;
			top: 56px;
			left: 44px;
			p:first-child {
				font-size: 28px;
			}
			p:nth-child(2) {
				font-size: 32px;
				font-weight: 700;
			}
			button {
				margin-top: 17px;
				font-size: 16px;
				font-weight: 500;
			}
		}
	}
	.slider {
		width: 100%;
		// background-color:red
	}
	.categories {
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		font-size: 16px;

		.category {
			border-radius: 6px;
			padding: 10px;
			width: 250px;
			min-height: 20px;
			background: #fff;
			transition: 0.2s ease;
			cursor: pointer !important;

			&:hover {
				background: #ffe5e5;
				transform: translateY(-1px);
			}
		}
	}
	.card-section {
		.card1 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 20px;

			.top {
				display: flex;
				gap: 10px;
				font-size: 16px;
				color: #1c1c1c;
			}
			.bottom {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
		}

		.card2 {
			font-size: 16px;
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
		}

		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		height: 100%;
		gap: 10px;
	}
`;

export const Offers = styled.div`
  font-family: Inter !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
  margin: 25px auto;
  min-height: 240px;
  background: #fff;
  border: 1px solid #dee2e7;

  .info-card {
    width: 281px;
    padding: 20px;
    display: flex
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .top {
      p:first-child {
        color: #1c1c1c;
        font-size: 20px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing -0.2px;
      }
      p:nth-child(2) {
        color: #8b96a5;
        font-size: 16px;
        font-weight: 400;
      }
    }
    .timer {
      margin-top: 20px;
    }
  }
  .product-cards {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    .card {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // // justify-content: space-between;
      // gap: 20px;
      
      border: 1px solid #dee2e7;
      .bottom {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        span {
          font-size: 14px;
          font-weight: 500;
          color: #eb001b;
          background: #ffe3e3;
          border-radius: 29px;
          height: 28px;
          padding: 4px 13px;
          line-height: 28px;
        }
      }
    }
  }
`;

// Service Grid

export const GridContainer = styled.div`
	box-sizing: border-box;
	margin: 20px auto;
	width: 90%;
	margin: 25px auto;
	height: 254px;
	border: solid 1px #dee2e7;
	display: grid;
	grid-template-columns: 288px repeat(4, 4fr);
	grid-template-rows: repeat(2, 127px);
	font-family: inter;

	.first {
		padding: 22px;
		background-position: center center;
		div {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 30%;
			font-size: 20px;
			font-weight: 600;
			line-height: 26px;
			letter-spacing: -0.2px;
			.button {
				margin-top: 10px;
			}
		}
		&:hover {
			background-size: 110% 110%;
		}
	}

	.others {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		&:hover {
			background: #55bdc3;
			transform: translateY(-1px);
		}
	}
`;

interface GridItemProps {
	isLarge?: boolean;
	background?: string;
}

export const GridItem = styled.div<GridItemProps>`
	background: ${({ background }) => (background ? background : "red")};
	grid-row: ${({ isLarge }) => (isLarge ? "1/3" : "")};
	border: solid 1px #dee2e7;
	padding: 15px;
	cursor: pointer;
	transition: 0.5s ease-in;
	transition: background-size 5s ease;
	background-size: cover;

	p {
		// justify-self: flex-start;
		// align-self: flex-start;
		font-size: 16px;
		font-weight: 400;
	}
`;

export const ProductRequestForm = styled.div`
	box-sizing: border-box;
	font-family: inter;
	position: relative;
	width: 90%;
	margin: 25px auto;
	height: 446px;
	margin: 20px auto;
	transition: background-size 5s ease;
	background: url("src/assets/image102.png");
	background-size: cover;
	border-radius: 6px;
	padding: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			95deg,
			#fa3434 7.19%,
			rgba(255, 199, 0, 0.5) 89.49%
		);
		z-index: 1;
	}
	.text {
		position: relative;
		width: 440px;
		height: 346px;
		color: #fff;
		z-index: 2;
		h2 {
			font-size: 32px;
			font-weight: 600;
			letter-spacing: -0.2px;
		}
		p {
			margin-top: 10px;
			font-size: 16px;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: -0.2px;
		}
	}
`;

export const FormContainer = styled.form`
  box-sizing: border-box;
  font-family: inter;
  position: relative;
  width: 491px;
  height: 346px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  z-index: 2;
  border-radius: 6px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 28px;
    margin: none;
  }
  .input1 {
    box-sizing: border-box;
    width: 440px;
    height: 40px;
    color: #1c1c1c;
    border: solid 1px #dee2e7;
    padding-left: 10px;
    border-radius: 6px;
  }
  textarea {
    box-sizing: border-box;
    width: 440px;
    height: 73px;
    border-radius: 10px;
    color: #dee2e7;
    border: solid 1px #dee2e7;
    padding: 10px;
  }
  .quantity {
    display: flex;
    gap: 10px;
    input {
      box-sizing: border-box;
      width: 206;
      height: 40px;
      padding-left: 10px;
      border-radius: 6px;
      color: #1c1c1c;
      border: solid 1px #dee2e7;
    }
    select {
      box-sizing: border-box;
      height: 40px;
      padding-left: 10px;
      border-radius: 6px;
      color: #1c1c1c;
      border: solid 1px #dee2e7;
    }
  }
  button {
    padding: 0 16px;
    height: 40px;
    border-radius: 6px;
    background: linear-gradient(180deg, #FF7612 0%, #FF001F 100%);
    color: #fff;
    border: none;
    width: 200px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      transform: translateY(-1px);
    }
  }
}
`;

export const Services = styled.form`
	box-sizing: border-box;
	width: 90%;
	margin: 25px auto;
	margin: 30px auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.service-card {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 24%;
		height: 200px;
		border: 1px solid #dee2e7;
		border-radius: 6px;
		.card-top {
			position: relative;
			img {
				height: 100%;
			}
			&::before {
				content: "";
				position: absolute;
				height: 100%;
				width: 100%;
				top: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.45);
				z-index: 1;
			}
		}
		.card-bottom {
			height: 200px;
			background: white;
			.divider {
				position: relative;
				top: -35px;
				left: 80%;
			}
			p {
				position: relative;
				top: -40px;
				left: 20px;
				color: #1c1c1c;
				font-family: inter;
				font-size: 16px;
				font-weight: 500;
				line-height: 22px;
			}
		}
	}
`;

export const Divider = styled.div<{ color?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 24px;
	font-weight: 500;
	z-index: 2;
	top: 20px;
	height: 55px;
	width: 55px;
	border-radius: 50%;
	border: 2px solid #fff;
	background: ${({ color }) => (color ? color : "#0D6EFD")};
`;

export const Header1 = styled.h2`
	width: 90%;
	margin: 25px auto;
	margin: 30px auto;
`;
