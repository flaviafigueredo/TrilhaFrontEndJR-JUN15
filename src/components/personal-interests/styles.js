import styled from "styled-components"

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
    padding: 5rem 0;
`

export const H1 = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;
`

export const ColorHighlight = styled.span`
    color: #e53939;
`

export const Description = styled.div`    
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: column;    
    font-size: 2rem;
    line-height: 4rem;
    text-align: justify;

    gap: 2rem;
`

export const Image = styled.img`
    float: right;
    margin-left: 1.5rem;
    width: 30rem;
    height: 100%;

    border-radius: 1rem;
`

export const Anchor = styled.a`
    color: #e53939;
    transition: .5s ease-in-out;

    &:hover {
        font-weight: 700;
    }
`