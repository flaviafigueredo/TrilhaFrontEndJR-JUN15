import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
    position: relative;

    .mobile-menu {
        display: none;
    }

    @media (max-width: 600px) {
        .desktop-menu {
            display: none;
        }

        .mobile-menu {
            display: block;
        }
    }
`

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: fixed;
    right: 1rem;
    top: 0;
    bottom: 0;
    z-index: 111;
`

export const ListItem = styled.li`
    width: 5rem;
    height: 5rem;
    background-color: #e53939;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;    
    cursor: pointer;    
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 0.5s ease-in-out;

    &:hover, &.selected {
        border: 2px solid #000;
        background-color: #e53939;
    }

    &:hover span {
        opacity: 1;
        border: 2px solid #000;
        background-color: #e53939;
    }
`

export const StyledNavLink = styled(NavLink)`
    color: #fff;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    position: relative;
`

export const MenuTopic = styled.span`
    position: absolute;
    right: .5rem;
    padding: 0 5rem 0 2rem;
    height: 5rem;
    width: max-content;
    display: flex;
    align-items: center;
    opacity: 0;
    z-index: -1;
    border: 2px solid transparent;
    background-color: transparent;
    border-radius: 5rem;
    transition: opacity 0.5s ease-in-out, background-color 0.5s ease-in-out, border 0.5s ease-in-out;
`

export const Icon = styled(FontAwesomeIcon)`
    padding: 1rem;
`

export const BurgerMenuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '20px',
        right: '20px',
        top: '25px'
    },

    bmBurgerBars: {
        background: '#e53939'
    },

    bmCrossButton: {
        height: '40px',
        width: '40px'
    },

    bmCross: {
        background: '#e53939',
        height: '20px'
    },

    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: '80%'
    },

    bmMenu: {
        background: '#000',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },

    bmMorphShape: {
        fill: '#000'
    },

    bmItemList: {
        color: '#000',
        padding: '0.8em'
    },

    bmItem: {
        display: 'block',
        color: '#fff',
        padding: '1rem 0'
    },

    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}