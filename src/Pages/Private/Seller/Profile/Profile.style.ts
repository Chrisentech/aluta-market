import styled from 'styled-components';

export const Wrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
`;

export const Body = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background: #FFF;
    border-radius: 6px;
    padding: 40px 80px;
    display: flex;
    flex-direction: column;

    .top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        height: 506px;

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .gender-birthday {   
                margin-top: 50px;
                display: flex;
                flex-direction: row;
                gap: 50px;
                width: auto;
                justify-content: space-between;

                label {
                    display: flex;
                    flex-direction: column;

                    input, select {
                        box-sizing: border-box;
                        width: 100%;
                        height: 50px;
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

                .top-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }
        }
    }
    .foot {
        display: flex;
        justify-content: space-between;
        height: 120px;
        .buttons {
            display: flex;
            flex-direction: row;
            gap: 10px;
            position: absolute;
            right: 120px;
            bottom: 100px;
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
    background: #F7FAFC;
`;

export const ProfileImage = styled.div`
    position: relative;
    border: solid 5px #fff;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #EFF2F4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    background: #F7FAFC;
    transition: 0.3s ease-in-out;

    &:hover {
        background: #FFF;
    }
`;