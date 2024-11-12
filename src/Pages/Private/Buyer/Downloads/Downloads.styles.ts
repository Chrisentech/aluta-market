import styled from "styled-components"


export const Wrapper = styled.div`
margin: 30px 0;
.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    height: 600px; /* Full viewport height */
    text-align: center; /* Center text */
.icon{
width: 100px;
		height: 100px;
		border-radius: 50%;
		background: #d9d9d9;
		display: flex;
		align-items: center;
		justify-content: center;
}
		.info {
			font-size: 12px;
			line-height: 28px;
			margin-bottom:10px;color:#505050
		}
			.header {
			font-size: 24px;
			line-height: 32px;
			color:#505050
		}
	
}
.flex {
		display: flex;
		justify-content: space-between;
		margin: 0px 0 30px 0;
		align-items: center;
		position: relative;

		h2 {
			color: #1c1c1c;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px;
			letter-spacing: -0.2px;
		}
	}

	.main {
		margin-top: 12px;
		min-height: 600px;
		border-radius: 12px;
		background: #fff;
        .grid{
        display:flex;
        padding:10px;
        border-radius:5px;
        border:1px solid gray;
        justify-content: space-between;
        align-items: flex-start;
        height:180px;
        margin-bottom:15px;
        }
        .first {
    display: flex;
    gap: 12px;
    height: 100%; /* Set explicit height here */
    .content{
    // margin-top:12px;
    display:flex;
    flex-direction:column;
    	h2,
        .price {
		display: flex;
		gap: 5px;
		margin-bottom: 8px;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 12px;
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
        h2{
        margin:0}
        }
}




	}
`

export const ImageContainer = styled.div<{ image: string }>`
    width: 200px;
    height: 100%;
    background-image:${({ image }) => (image ? `url(${image})` : "")};
    // background-size: cover; /* Ensures the image covers the container */
    background-position: center; /* Centers the background image */
    background-repeat: no-repeat; /* Prevents repeating the image */
`