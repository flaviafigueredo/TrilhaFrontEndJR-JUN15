import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        background-color: rgba(0,0,0,0.95);
        position: relative;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`

export const Section = styled.section`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    min-height: 100vh;
    max-width: 80rem;
    margin: 0 auto;
    padding-top: 5rem;
    padding-bottom: 20rem;

    @media (max-width: 834px) {
        max-width: 60rem;
    }

    @media (max-width: 600px) {
        max-width: calc(100% - 40px);
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;

    @media (max-width: 414px) {
        text-align: center;
    }

    @media (max-width: 320px) {
        font-size: 3rem;
    }

    @media (max-width: 240px) {
        font-size: 2rem;
    }
`

export const ColorHighlight = styled.span`
    color: #e53939;
`

export const Description = styled.div`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 2rem;
    line-height: 4rem;
    text-align: justify;
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;

    @media (max-width: 320px) {
        font-size: 1.6rem;
    }
`