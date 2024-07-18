import styled from 'styled-components'

export const Image = styled.img`
    float: right;
    margin-left: 1.5rem;
    width: 30rem;
    height: 100%;
    border-radius: 1rem;

    @media (max-width: 414px) {
        float: none;
        order: 1;
        margin: 1rem 0 0;
        width: 100%;
    }
`

export const Anchor = styled.a`
    color: #e53939;
    transition: .5s ease-in-out;

    &:hover {
        font-weight: 700;
    }
`

export const P = styled.p`
    @media (max-width: 414px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`