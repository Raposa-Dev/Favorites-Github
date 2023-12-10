import styled from 'styled-components';

export const Content = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: silver;
`;

export const SearchDiv = styled.div`
    width: 90%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

export const Image = styled.img`
    width:150px;
    padding: 15px;
`;

export const ContentsContainer = styled.div`
    display: grid;
    justify-items: center;
    overflow: auto;
`;