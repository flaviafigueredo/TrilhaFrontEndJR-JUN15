import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpeg'
import { HomeSection, Avatar, InfosContainer, Btn, Span } from "./styles"
import '../../global-styles'
import '../../transitions.css'

export const Home = () => {
    return (
        <>
            <HomeSection>
                <Avatar src={avatar} alt="avatar image" />

                <InfosContainer>
                    <h1>Olá, eu sou a Flávia Figueredo, <Span>desenvolvedora frontend jr.</Span></h1>

                    <Link to="/sobre">
                        <Btn>Mais sobre mim</Btn>
                    </Link>
                </InfosContainer>
            </HomeSection>
        </>
    )
}