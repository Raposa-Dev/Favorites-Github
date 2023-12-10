import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    height: 70px;
    background-color: black;
    display:flex;
    align-items: center;
    color: white;

    & nav {
        width:200px;
        height:90%;
        display: flex;
        width: 300px;
        justify-content: space-between;
        margin-right: 20px;
    }

    & a {
        width: 100px;
        height: 60px;
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        text-decoration: none;
        transition:1s;
    }
    & a:hover {
        background-color: #000F00;
    }

    & h2 {
        margin-left: 20px;
    }
`;
    