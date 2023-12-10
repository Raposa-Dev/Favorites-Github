import styled from "styled-components";

export const ContentButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & button:hover {
        background-color: #0EA300;
    }
`;

export const StyleButton = styled.button`
    width: 50%;
    height: 35px;
    margin: auto;
    color: white;
    background-color: #048306;
    border-radius: 6px;
    transition: 1s;
`;