import styled from "styled-components";

export const Wrapper = styled.div`
margin:30px 0;
.product{
			display: flex;
			flex-direction: column;
	.no_product {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 90%;
			width: 100%;
			cursor: pointer;
			flex: 0.8;
			img{
				width:220px;
				   @media (max-width: 790px) {
       				width:67%;

}
			}
		}
       @media (max-width: 790px) {
       margin-top: 10px
}
}
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 0px 0 30px 0;
    align-items:center;
    position: relative;
        @media (max-width: 790px) {
       margin: 0px;
	   
}
    h2 {
      color: var(--dark, #1c1c1c);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.2px;
    }
    .button {
      background: #00b517;
      color: #fff;
      border: 0;
      outline: 0;
      border-radius: 6px;
      padding: 10px;
      cursor: pointer;
    }
    input {
      flex: 0.2;
      padding: 10px 29px;
      border-radius: 6px;
      border: 1px solid #8b96a5;
      outline: 0;
      height: 40px;
    }
    .diff {
      position: absolute;
      // top: 34px;
      left: 10px;
    }
    .dropdown {
        flex: 0.3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 50px
        color: black;
@media (max-width: 1450px) {
        flex: 0.5;
        @media (max-width: 790px) {
        flex: 0.7;
            @media (max-width: 790px) {
        display: none;
}
}
}
        .drpdwn {
          border: solid 1px #DEE2E7;
          border-radius: 6px;
          padding: 10px;
        }
    }
  }
`;

export const Wrapper2 = styled.div`
	margin-top: 30px;
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
	
	.card {
		width: calc(100% - 160px);
		margin: 20px 0;
			display: flex;
			flex-direction: column;
    .flex{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding-bottom:20px;
      margin-bottom:10px;
      border-bottom:2px solid #DEE2E7;
	  
      .title{
        	font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px; /* 133.333% */
		letter-spacing: -0.2px;
    margin-left:10px
      }
	  @media(max-width:760px){
		.fav .title,.tt{
		font-size:12px !important;
		line-height:unset;
		svg{
			width:10px;
			height:10px
		}
	   }
	  }
    }
		@media (max-width: 1080px) {
			margin: 20px auto;
			padding: 30px;
			width: calc(100% - 60px);
			@media(max-width:760px){
				padding:30px 20px
			}
		}
	}
	.badge {
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background: #0d6efd;
		color: #fff;
		margin-bottom: 15px;
	}
	.center {
		margin: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;

		h3 {
			color: #000;
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			/* Title-H2 */
			font-family: Inter;
			font-size: 32px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: -0.2px;	
      @media (max-width: 930px) {
				font-size: 24px;
			}
		}
		p {
			color: #000;
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: 32px; /* 133.333% */
			letter-spacing: -0.2px;
       @media (max-width: 930px) {
				font-size: 18px;
			}
		}
		.p-20 {
			color: var(--dark, #1c1c1c);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin: 30px 0;
			width: 292px;
		}
		.p-21 {
			width: unset;
			color: var(--dark, #1c1c1c);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin: 30px 0;
		}
		.paymentBtn {
			border-radius: 10px;
			background: var(--primary, #0d6efd);
			padding: 15px 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 0;
			outline: 0;
			color: var(--white, #fff);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			svg {
				margin: 0 0px 0 20px;
				font-size: 24px;
			}
		}
	}
	.grid {
		width: 100%;
		margin-bottom: 100px;
    .card{padding:0 !important;width:100%;}
		@media (max-width: 930px) {
			grid-template-columns: unset !important;
      div{
        width: unset;
		}
		div {
			padding: 0;
		}
		.card {
			width: 100%;
			@media (max-width: 930px) {
				grid-template-columns: unset !important;
			}
		}
	}
	form {
		width: 400px;
		margin: 30px 0;
		.classic {
			width: 100%;
			margin: 20px 0;
			cursor: pointer;
		}
	}
`;

export const GridItem = styled.section<{ background: string }>`
	border-radius: 6px;
	background: ${({ background }) => (background ? background + "4d" : "")};
	height: 265px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	width: 100%;
	.badge {
		width: 50px;
		height: 50px;
		background: #fff;
	}

	.title {
		color: #000;
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H4 */
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px; /* 140% */
		letter-spacing: -0.2px;
	}
	.label {
		color: var(--gray-600, #505050);
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		width: 80%;
		margin: 20px auto;
	}
`;
