import styled from "styled-components";

export const Bootloader = styled.div`
    width: 10rem;
    height: 1rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 10rem;
        background-color: white;
        border-radius: 3px;
        transform: translateX(-10rem);
        animation: moveright 750ms linear infinite forwards;
    }
    @keyframes moveright {
        0% {
            transform: translateX(-10rem);
        }
        50% {
            transform: translateX(0rem);
        }
        100% {
            transform: translateX(10rem);
        }
    }
`