import { ContentStyle, DivContainer, ImageAvatar, ButtonsLinks } from "./style";
export default function ContentInput({repos, onDelete}) {
    if (repos.length === 0) {
        return (
            <ContentStyle>
                <hr />
                <DivContainer>
                    <p>Nenhum repositório para aprensentar.</p>
                </DivContainer>
                <hr />
            </ContentStyle>
        );
    };

    return(
        <ContentStyle>
            <hr />
            <DivContainer>
                <ImageAvatar src={repos.avatar_url}/>
                <p>Nome:<strong> {repos.name}</strong></p>
                <p>Nome de usuario: {repos.login}</p>
                <p>Repositorios publicos: {repos.public_repos}</p>
                <ButtonsLinks>
                    <a target="blank" href={repos.html_url}>Ver repositorios</a>
                    <button onClick={onDelete}>Excluir</button>
                </ButtonsLinks>
                
            </DivContainer>
            <hr />
        </ContentStyle>
    );
};