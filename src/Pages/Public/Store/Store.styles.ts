import styled from 'styled-components';

export const Page = styled.div`
    min-height: 50vh;
    width: 100%;

    margin: 20px auto;
    background: #f7fafc;
`;

export const Container = styled.div`
    width: 1330px;
    margin: auto;
    position: relative;
    .profile-image {
        width: 180px;
        height: 180px;
        border: 4px solid #FFFFFF;
        background: linear-gradient(180deg, #FF7612 0%, #FF001F 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        position: absolute;
        font-size: 116px;
        font-weight: 600px
        letter-spacing: -1.6px;
        transform: translateY(-50%);
        font-family: inter;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;
        .button {
            font-family: inter;
            font-weight: 600;
            font-size: 16px;
            display: flex;
            flex-direction: row;
        }
    }
`;

export const ShopInfo = styled.div`
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    flex-direction: row;
    gap: 160px;
    font-family: inter;
    .title {
        margin-left: 180px;
        h1 {
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.2px;
            color: #000;
        }
        p {
            line-height: 20px;
            letter-spacing: -0.2px;
            color: #505050;
        }
    }
    .contact-info {
        display: flex;
        flex-direction: row;
        gap: 12px;
        div {
            width: 250px;
            h2 {
                color: #1c1c1c;
                font-side: 20px;
                font-weight: 600;
                line-height: 32px;
                letter-spacing: -0.2px;
                margin-bottom: 5px;
            }
            p {
                line-height: 20px;
                letter-spacing: -0.2px;
                color: #505050;
            }
        }
    }
`;

export const BackgroundPhoto = styled.div<{ background: string }>`
    height: 259px;
    width: 100%;
    background: ${({ background }) => background && "url(" + background + ")"};
    background-size: cover;
`;

export const MainSection = styled.div`
    width: 1330px;
    height: 800px;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #EFF2F4;
    margin-top: 10px;
    margin-bottom: 50px;
    overflow-y: hidden;
`;

export const Top = styled.div`
    box-sizing: border-box;
    height: 95px;
    padding: 20px 40px;
    border-bottom: 1px solid #EFF2F4;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: inter;
    .filters {
        display: flex;
        flex-direction: row;
        height: 48px;
        gap: 15px;
        select {
            box-sizing: border-box;
            height: 100%;
            width: 133px;
            padding: 10px;
            border-radius: 6px;
            outline: none;
            background: #FFFFFF;
            border: 1px solid #DEE2E7;
            font-size: 16px;
            font-weight: 400;
            color: #8B96A5;
        }
    }
`;

export const SearchTab = styled.div`
    box-sizing: border-box;
    width: 450px;
    height: 48px;
    padding: 8px;
    align-items: center;
    display: flex;
    border: 1px solid #DEE2E7;
    border-radius: 6px;
    overflow: hidden;
    .search-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        &::placeholder {
            color: #8B96A5;
        }
      }
    .icon {
        color: #8B96A5;
        font-size: 22px;
        border: none;
        padding: 8px;
    }
`;

export const ProductSection = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 20px;
    margin: auto;
    overflow-y: scroll;
    height: 77%;
    width: 95%;

    &::-webkit-scrollbar {
        display: none;
        width: 8px
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: #DEE2E7;
        border-radius: 6px;
      }
    
      &::-webkit-scrollbar-track {
        background-color: #fff;
      }

      &:hover {
        &::-webkit-scrollbar {
          display: block;
        }
      }
}
`;