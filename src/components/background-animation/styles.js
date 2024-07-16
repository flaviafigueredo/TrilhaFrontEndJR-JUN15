import styled, { keyframes } from 'styled-components'

const WaveAnimation = keyframes`
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
`

export const Wave = styled.div`
    background:  rgba(229, 57, 57, 0.25);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: ${WaveAnimation} 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;

    &:nth-of-type(2) {
        bottom: -1.25em;
        animation: ${WaveAnimation} 18s linear reverse infinite;
        opacity: 0.8;
    }

    &:nth-of-type(3) {
        bottom: -2.5em;
        animation: ${WaveAnimation} 20s -1s reverse infinite;
        opacity: 0.9;
    }
`