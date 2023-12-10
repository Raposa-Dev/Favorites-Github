import { ContentButton ,StyleButton } from "./style"
export default function ButtonComponent( { onClick } ) {
    return(
        <ContentButton>
            <StyleButton onClick={ onClick }>
                Enviar
            </StyleButton>
        </ContentButton>
    )
}