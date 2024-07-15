import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.header`
    position: relative;
`

export const Menu = styled.ul`
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
    width: 3rem;
    height: 3rem;
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
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    position: relative;
`

export const MenuTopic = styled.span`
    position: absolute;
    right: .5rem;
    padding: 0 3.5rem 0 1rem;
    height: 3rem;
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