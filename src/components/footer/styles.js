import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const SocialLink = styled.a`
    font-size: 2rem;
    color: #fff;
    background-color: #e53939;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: .6s ease-in-out;

    &:hover {
        background-color: #000;
        color: #e53939;
    }
`

export const FooterText = styled.p`
    font-size: 1.5rem;
    color: #fff;
`