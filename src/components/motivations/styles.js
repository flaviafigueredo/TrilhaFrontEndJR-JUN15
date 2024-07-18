import styled from 'styled-components'

export const Image = styled.img`
    float: left;
    margin: 0 1.5rem 1rem 0;
    width: 150px;
    height: auto;

    @media (max-width: 240px) {
        width: 100px;
        margin: 0;
    }
`