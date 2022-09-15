import styled from "styled-components";

export const GradientButton = styled.button`
    padding: 10px 25px;
    font-size: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    border: 0;
    outline: 0;
    border-radius: 7px;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    background: linear-gradient(91.36deg, #E2005F 14.53%, #B500E2 58.42%, #535DE2 92.03%, #00ACE2 131.69%);
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }

`

export const IconButton = styled.button`
    background-color: transparent;
    padding: ${props => props.small ? "0.2rem" : "0.5rem"};
    width: ${props => props.small ? "2.5rem" : "3.5rem"};
    height: ${props => props.small ? "2.5rem" : "3.5rem"};
    border-radius: 50%;
    outline: none;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 10ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    svg {
        height: ${props => props.small ? "1.4rem" : "2rem"};
        width: ${props => props.small ? "1.4rem" : "2rem"};
    }

    &:hover {
        background-color: #3a3a3a57;
        cursor: pointer;
    }
`


export const ShortCut = styled.button`
    width: ${props => props.large ? "90px" : "70px"};
    height: ${props => props.large ? "90px" : "70px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    /* border: 1px solid red; */
    color: white;
    background-color: transparent;
    border: 0;
    outline: 0;

    &:focus-within {
        background: rgba(255, 255, 255, 0.185);
        border-radius: 7px;
    }
    svg {
        height: ${props => props.large ? "2.8rem" : "2.2rem"};
        width:  ${props => props.large ? "2.8rem" : "2.2rem"};
    }
    span {
        font-size: 0.72rem;
        font-family: "Sora", sans-serif;
        font-weight: 500;
        display: block;
        max-width: ${props => props.large ? "80px": "60px"};
        text-overflow: ellipsis;
        overflow: hidden;
    }
`