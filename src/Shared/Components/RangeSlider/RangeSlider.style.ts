import styled from "styled-components";

export const Wrapper = styled.div`
    .multi-range-slider {
        border: none;
        box-shadow: none;
        .bar-left, .bar-right  {
            box-shadow: none;
            background-color: #AFD0FF;
            height: 4px;
            padding: 0;
        }
        .bar-inner {
            box-shadow: none;
            background-color: #0D6EFD;
            border: none;
            height: 4px;
        }
        .thumb {
            .caption {
                display: none;
            }
            &::before {
                border: 1px solid #AFD0FF;
                box-shadow: none;
            }
        }
    }
    .apply {
        font-family: inter;
        font-weight: 500;
        margin: 20px auto;
    }
`;

export const InputContainer = styled.div`
    font-family: inter;
    display: flex;
    flex-direction: row;
    gap: 10px;
    label {
        margin-top: 20px;
        width: 110px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        input {
            border: 1px solid #dee2e7;
            height: 20px;
            border-radius: 6px;
            padding: 10px
        }
    }
`;