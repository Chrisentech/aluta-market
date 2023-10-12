import styled from 'styled-components';

export const Page = styled.div`
    min-height: 50vh;
    width: 100%;

    margin: 30px auto;
    background: #f7fafc;
`;

export const Container = styled.div`
    width: 1180px;
    margin: auto;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Sidebar = styled.div`
    
`;

export const MainView = styled.div`
    .view {
        width: 926px;
        margin: 20px 0;
    }
`;

export const Selector = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 926px;
    height: 62px;
    background: #fff;
    border: 1px solid #DEE2E7;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .buttons {
        display: flex;
        flex-direction: row;
        height: 40px;
        .icons {
            display: flex;
            flex-direction: row;
            border-radius: 6px;
            border: solid 1px #DEE2E7;
            overflow: hidden;
        }
    }
    .dropdown {
        width: 172px;
        margin-right: 10px;
        border-radius: 6px;
        border: solid 1px #DEE2E7;
    }

`;

export const Filters = styled.div`
    font-family: inter;
    display: flex; 
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    .clear {
        color: #FA3434;
        cursor: pointer;
    }
`;

export const SelectIcon = styled.button<{active: boolean}>` 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border: none;
    cursor: pointer;
    background: ${({ active }) => active ? "#EFF2F4" : '#fff' };
`;

export const FilterTag = styled.span`
    padding: 6px;
    border: solid 1px #FF7612;
    border-radius: 5px;
    color: #505050;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
`;