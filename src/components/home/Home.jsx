import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpeg'
import { Section, Avatar, InfosContainer, Btn, Span } from "./styles"

export const Home = () => {
    return (
        <>
            <Section>
                <Avatar src={avatar} alt="avatar image" />

                <InfosContainer>
                    <h1>Olá, eu sou a Flávia Figueredo, <Span>desenvolvedora frontend jr.</Span></h1>

                    <Link to="/sobre">
                        <Btn>Mais sobre mim</Btn>
                    </Link>
                </InfosContainer>
            </Section>
        </>
    )
}