import { useState } from 'react'
import { faRocket, faHeart, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { slide as Menu } from 'react-burger-menu'
import { Container, MenuList, ListItem, StyledNavLink, MenuTopic, Icon, BurgerMenuStyles } from './styles'

export const Header = () => {
    const [selectedItem, setSelectedItem] = useState('/')

    const handleMenuClick = (path) => {
        setSelectedItem(path)
    }

    return (
        <Container>
            <nav>
                <div className="desktop-menu">
                    <MenuList>
                        <ListItem className={selectedItem === '/' ? 'selected' : ''}>
                            <StyledNavLink to="/" onClick={() => handleMenuClick('/')}>
                                <MenuTopic>Home</MenuTopic>
                                <Icon icon={faHome} />
                            </StyledNavLink>
                        </ListItem>
                        <ListItem className={selectedItem === '/sobre' ? 'selected' : ''}>
                            <StyledNavLink to="/sobre" onClick={() => handleMenuClick('/sobre')}>
                                <MenuTopic>Sobre</MenuTopic>
                                <Icon icon={faUser} />
                            </StyledNavLink>
                        </ListItem>
                        <ListItem className={selectedItem === '/motivacoes' ? 'selected' : ''}>
                            <StyledNavLink to="/motivacoes" onClick={() => handleMenuClick('/motivacoes')}>
                                <MenuTopic>Motivações</MenuTopic>
                                <Icon icon={faRocket} />
                            </StyledNavLink>
                        </ListItem>
                        <ListItem className={selectedItem === '/gostos-pessoais' ? 'selected' : ''}>
                            <StyledNavLink to="/gostos-pessoais" onClick={() => handleMenuClick('/gostos-pessoais')}>
                                <MenuTopic>Gostos pessoais</MenuTopic>
                                <Icon icon={faHeart} />
                            </StyledNavLink>
                        </ListItem>
                    </MenuList>
                </div>

                <div className="mobile-menu">
                    <Menu right styles={BurgerMenuStyles}>
                        <StyledNavLink to="/" onClick={() => handleMenuClick('/')}>
                            Home
                        </StyledNavLink>
                        <StyledNavLink to="/sobre" onClick={() => handleMenuClick('/sobre')}>
                            Sobre
                        </StyledNavLink>
                        <StyledNavLink to="/motivacoes" onClick={() => handleMenuClick('/motivacoes')}>
                            Motivações
                        </StyledNavLink>
                        <StyledNavLink to="/gostos-pessoais" onClick={() => handleMenuClick('/gostos-pessoais')}>
                            Gostos pessoais
                        </StyledNavLink>
                    </Menu>
                </div>
            </nav>
        </Container>
    )
}