import Header from '../../components/Header';
import BanerGitHub from '../../assets/images/github.png';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/Button';
import ContentInput from '../../components/Content';
import { Content, Image, SearchDiv, ContentsContainer } from './style';
import { useState } from "react";
export default function Home(){

    const [user, SetUser] = useState('');
    const [repos, SetRepos] = useState([]);
    async function handlerUser() {
        
        const URL = `https://api.github.com/users/${user}`;
        const userData = await fetch(URL);
        const newUser = await userData.json();
        SetUser(newUser);
        if(newUser){
            SetRepos(newUser); 
        };
    };

    function handleDeleteUser() {
        SetRepos([]);
        SetUser('');
    };

    return (
        <Content>
            <Header/>
            <Image src={BanerGitHub} alt="" />
            <SearchDiv>
                <InputComponent user={user} SetUser={SetUser}/>
                <ButtonComponent onClick={handlerUser} />
            </SearchDiv>
            <ContentsContainer>
                <ContentInput repos={repos} onDelete={handleDeleteUser}/>
            </ContentsContainer>
        </Content>
    );
};