import styled from "styled-components";

export const Wrapper = styled.div`
	background: white;
	width: 85%;
	min-height: 72vh;
	margin: 40px auto;
	// padding: 20px;
	top: 0px;
	overflow: hidden;
	border-radius: 4px;
	display: flex;
`;

export const Sidebar = styled.div`
	height: 100%;
	background: #fff;
	flex: 0.25;
	h2 {
		font-size: 20px;
		font-weight: 600;
		line-height: 25px;
		padding: 15px 20px;
		border-bottom: 3px solid #ccc;
		border-right: 3px solid #ccc;
	}
	.no_chat_list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80%;
		cursor: not-allowed;
		width: 100%;
	}

	.list_container {
		padding: 15px 20px;
		height: 596px;
		overflow-y: auto;
		.child {
			display: flex;
			// justify-content: space-between;
			// gap: 5px;
			position: relative;
			padding: 10px;
			cursor: pointer;
			margin-top: 10px;
			padding-bottom: 16px;
			transition: 0.3s ease all;
			border-radius: 5px;
			&:hover {
				background: linear-gradient(to right, #ff761285 100%, #ff00d452 100%);
				transform: translateY(-3px);
			}
			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				// margin-right: 10px;
				background: #dbdbdb;
				// flex: 0.2;
				object-fit: cover;
				margin-right: 15px;
			}
			.header {
				align-items: center;
				justify-content: space-between;
				width: 100%;
				flex: 0.8;
				// margin: 0 10px;
				h1 {
					color: #333333;
					font-size: 16px;
					font-weight: 600;
					margin-bottom: 5px;
				}
				span {
					p {
						font-size: 12px;
						// color: #808080;
					}
				}
			}
			.indicator {
				position: absolute;
				top: 36px;
				left: 43px;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				z-index: 1;
			}
		}
		.left {
			font-size: 12px;
			color: #808080;
			position: absolute;
			right: 10px;
			.badge {
				background: linear-gradient(to right, #ff7612 0%, #ff001f 100%);
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				width: 20px;
				height: 20px;
				float: inline-end;
			}
			p {
				margin-bottom: 10px;
			}
		}
	}
	.text-container {
		width: 200px; /* Set your desired width */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		@media (min-width: 768px) {
			width: 220px;
		}
	}
`;

export const Main = styled.div`
	flex: 0.75;
		height: 100%;
	background: #eff2f4;
	.no_message {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 90%;
		width: 100%;
		cursor: not-allowed;
	}
`;

export const MessageHeader = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	border-bottom: 1px solid #dbdbdb;
	padding-bottom: 6px;
	background: #fff;
	padding-top: 10px;
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin: 0px 10px 0px 30px;
		background: #dbdbdb;
		flex: none;
		object-fit: cover;
	}
	h1 {
		color: #333333;
		font-size: 16px;
		font-weight: 600;
	}
`;

export const MessageBody = styled.div`
	position: relative;
	height: 100%;
	// background: red;
	.option {
		align-items: center;
		display: flex;
		margin: 30px auto 35px auto;
		gap: 20px;
		p {
			color: var(--gray-500, #8b96a5);
			text-align: center;
			font-family: Inter;
			font-size: 12px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px; /* 200% */
			letter-spacing: -0.24px;
		}
		.line {
			width: 35%;
			height: 2px;
			background: #e0e5f2;
		}
	}
	form {
		position: absolute;
        bottom:0px;
		// left: 20px;
        padding:10px 20px;
		width: calc(100% - 40px);
		z-index: 1000;
        background:#888888b0;
		@media (max-width: 768px) {
			left:0;
			}
		img {
			cursor : pointer;
            bottom: 13px;
            right: 76px;
            top:24px;
			@media (max-width: 600px) {
		right:13px
	}
   
}
	 .picture{
        right:160px;
		position: absolute;    
        top:20px;
    }
		.send{
        right:50px;
		position: absolute;    
        top:20px;
    }
	}
		input {
			width: 81%;
			margin: auto !important;
			padding: 19px 12px;
			border: 1px solid #dbdbdb;
			outline: none;
			border-radius: 50px;
			@media (max-width: 768px) {
				width:100%
			}
		}
		.content{
			height :480px;
			overflow-y: scroll;
			padding-bottom: 120px;
	overflow-y: scroll;
	scrollbar-width: none;
	transition: 0.3s ease all;
	p {
				font-size: 12px;
				color: #808080;
			}
			img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 10px;
		background: #dbdbdb;
				margin-top:12px;
		flex: none;
	}
			div{
				max-width:300px;
			border-radius:5px ;
				min-height:10px;
				padding:8px 12px;
                &::first-child{
				margin-top:12px;
                }
				@media (max-width: 768px) {
				padding:12px 5px;
			}
			}
		}
		.self{
			margin-left:auto;
			background: #ff001f;
			margin-right:20px;
            color:#fff;
			p{
				float:inline-end
			}
		}
		.other{
			margin-right:auto;	
           color: #002;
			background:#fff;
		}
	}
`;
