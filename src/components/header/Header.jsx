import { faRocket, faHeart, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Menu, ListItem, StyledNavLink, MenuTopic, Icon } from './styles'

export const Header = () => {
    return (
        <Container>
            <nav>
                <Menu>
                    <ListItem className="selected">
                        <StyledNavLink to="/">
                            <MenuTopic>Home</MenuTopic>
                            <Icon icon={faHome} />
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to="/sobre">
                            <MenuTopic>Sobre</MenuTopic>
                            <Icon icon={faUser} />
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to="/motivacoes">
                            <MenuTopic>Motivações</MenuTopic>
                            <Icon icon={faRocket} />
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to="/gostos-pessoais">
                            <MenuTopic>Gostos pessoais</MenuTopic>
                            <Icon icon={faHeart} />
                        </StyledNavLink>
                    </ListItem>
                </Menu>
            </nav>
        </Container>
    )
}