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

export const Image = styled.img`
    float: left;
    margin: 0 1.5rem 1rem 0;
    width: 150px;
    height: auto;
`

export const Description = styled.div`    
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
    line-height: 4rem;
    text-align: justify;
`