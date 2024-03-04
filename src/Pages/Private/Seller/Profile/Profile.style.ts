import styled from "styled-components";

export const Wrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
margin-top:30px;
    h1 {
        Copy
        color: #1C1C1C;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.2px;
    }
    h3 {
        color: #1C1C1C;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @media(max-width:1240px){
margin-top:92px
}
    }

    .password-panel {
        margin-top: 45px;

        .change-password {
            border-top: 1px solid #EFF2F4;
            border-bottom: 1px solid #EFF2F4;
            margin-top: 10px;
            padding: 25px 0;
            cursor: pointer;
        }
    }
`;

export const Body = styled.section`
    box-sizing: border-box;
    margin-top: 30px;
    width: 100%;
    background: #FFF;
    border-radius: 6px; 
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    gap: 300px;

    .top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        height: 506px;
@media(max-width:1346px){
gap:20px;
@media(max-width:1346px){
display: inline-block;
}
}
        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .form {
                margin: 20px 0;
                display: flex;
                flex-direction: column;
                gap: 25px;
            }

            .gender-birthday {   
                margin-top: 50px;
                display: flex;
                flex-direction: row;
                gap: 50px;
                width: auto;
                justify-content: space-between;

                label {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    margin: 20px 0;

                    div {
                        width: 100%;
                        input[type="date"] {
                            font-family: inter;
                            font-size: 12px;
                            color: #BDC4CD;

                            &::-webkit-calendar-picker-indicator {
                                width: 24px;
                                height: 24px;
                                opacity: 0.2;
                                }
                            }
                        }
                    }

                    input, select {
                        box-sizing: border-box;
                        width: 100%;
                        // height: 50px;
                        padding: 20px;
                        margin-top: 4px;
                        border: 1px solid #ccc;
                        border-radius: 10px;
                        border: none;
                        outline: none;
                        background: #F7FAFC;
                    }
                }                
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .deactivate {
                display: flex;
                flex-direction: column;
                color: #505050;

                .top-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 5px;

                    .deactivate-button {
                        font-size: 14px;
                        font-weight: 600;
                    }

                    .top-text {
                        font-family: inter;
                        font-weight: 700;
                        font-size: 14px;
                    }
                }

                p {
                    font-family: inter;
                    font-weight: 500;
                    font-size: 12px;
                }
            }
        }
    }
    .foot {
        width: 100%;
        padding-bottom: 40px;
        position: relative;

        .buttons {
            display: flex;
            flex-direction: row;
            gap: 10px;
            position: absolute;
            right: 0px;
            @media(max-width:1346px){
bottom:-100px
}
        }
    }
`;

export const InputField = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	padding: 20px;
	margin-top: 4px;
	border: 1px solid #ccc;
	border-radius: 10px;
	border: none;
	outline: none;
	background: #f7fafc;
`;

export const ProfileImage = styled.div`
	position: relative;
	border: solid 5px #fff;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	background: #eff2f4;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 1346px) {
		width: 100px;
		height: 100px;
		@media (max-width: 1240px) {
			position: absolute;
			top: 184px;
			margin-bottom: 40px;
		}
	}
`;

export const AddImage = styled.span`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: #f7fafc;
	transition: 0.3s ease-in-out;

	&:hover {
		background: #fff;
	}
`;
