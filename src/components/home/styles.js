import { Section as GlobalSection } from '../../global-styles'
import styled, { keyframes } from 'styled-components'
import backgroundImage from '../../assets/background.jpg'

export const HomeSection = styled(GlobalSection)`
    flex-direction: row;
    padding: 0;
    width: 100%;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -3;
    } 
`

export const Avatar = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const InfosContainer = styled.div`
    color: #fff;
    max-width: 50rem;
    text-transform: uppercase;
    font-size: 2rem;
`

export const Animation = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

export const Btn = styled.button`
    font-size: 1.6rem;
    text-transform: uppercase;
    background-color: rgba(229, 57, 57, 0.5);
    color: #fff;
    padding: 1rem 2rem;
    border: 1px solid #e53939;
    border-radius: 5rem;
    margin-top: 3rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.8s ease-in-out;

    &:hover {
        -webkit-animation: ${Animation} 0.8s ease-in-out infinite both;
        animation: ${Animation} 0.8s ease-in-out infinite both;
        background-color: #e53939;
  }
`

export const Typing = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`

export const BlinkCursor = keyframes`
    from {
        border-right-color: #fff;
    }

    to {
        border-right-color: transparent;
    }
`

export const Span = styled.span`
    font-family: "Roboto Mono", monospace;
    border-right: 2px solid #fff;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    display: block;
    animation: ${BlinkCursor} 500ms steps(40) infinite normal, ${Typing} 4s steps(40) 1s normal both;
`