import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterContainer, FooterText, SocialLink, Socials } from './styles'

export const Footer = () => {
    return (
        <FooterContainer>
            <Socials>
                <SocialLink href="https://flaviafigueredo.github.io/portfolio/" target='_blank'>
                    <FontAwesomeIcon icon={faGlobe} />
                </SocialLink>

                <SocialLink href="https://www.linkedin.com/in/flaviafigueredo/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </SocialLink>

                <SocialLink href="https://github.com/flaviafigueredo" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </SocialLink>

                <SocialLink href="https://www.instagram.com/flaviafigueredo/" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialLink>
            </Socials>

            <FooterText>
                Desenvolvido com ❤️ por Flávia Figueredo.
            </FooterText>
        </FooterContainer>
    )
}