import styled from 'styled-components'

export const H2 = styled.h2`
    font-size: 3rem;
    text-transform: uppercase;

    @media (max-width: 320px) {
        font-size: 2rem;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    width: 100%;
`

export const IconContainer = styled.div`
    display: flex;
    gap: 3rem;
    font-size: 5rem;

    @media (max-width: 414px) {
        font-size: 4rem;
        gap: 2rem;
    }

    @media (max-width: 320px) {
        flex-wrap: wrap;
        max-width: 15rem;
        justify-content: center;
        align-items: center;
    }
`

export const Education = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
`

export const ListItem = styled.li`
    font-family: 'Roboto Mono', monospace;
    border-left: 1px solid #fff;
    padding-left: 2rem;
    margin-left: 2rem;
`

export const Year = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Icon = styled.span`
    background-color: #e53939;
    font-size: 1.6rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    position: absolute;
    left: -4rem;
    top: 0;
`

export const Paragraph = styled.p`
    margin: 0 2rem 2rem;
    padding: .7rem 1.4rem;
    font-size: 1.2rem;
    color: #CFCFCF;
    text-transform: uppercase;
    background-color: rgba(37, 37, 37, 0.44);
    border-radius: 2rem;
    font-weight: 700;
`

export const H3 = styled.h3`
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-left: 2rem;

    @media (max-width: 320px) {
        font-size: 1.6rem;
    }
`

export const Span = styled.span`
    color: #CFCFCF;
    opacity: .8;
    font-size: 1.5rem;
`