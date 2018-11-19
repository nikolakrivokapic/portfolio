import styled from 'styled-components';
import talasi from '../../assets/talasi.png';

export const TextArea = styled.div` 
    background: url(${talasi});
    background-size: cover;
    filter: brightness(.8);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    text-align: center;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    position: relative; 
    width: 47%;
    max-width: 350px;
    padding: 32px;
    font-size: 20px;
    @media only screen and (max-width: 767px) { font-size: 16px; }
    &::before {
        content: '';
        background-color: #5385bb;
        opacity: 0.5;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 10px;
    }
`;

export const Inputs = styled.div` 
    position: relative;
    margin: 0 10px;
`;


export const Input = styled.input`
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    color: white;
    display: block;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 16px;
    outline: none !important;
    opacity: .6;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
`;


export const InputWrapper = styled.div`
    margin-top: 15px;
`;

export const Button = styled.button`
    margin: 25px 0 0 0;
    background: #022e3bc4;
    border-radius: 10px;
    width: 30%;
    transform: none;
    padding: 7px;
    border: none;
    color: white;
    font-size: 20px;
    @media only screen and (max-width: 767px) { font-size: 16px; }
    font-family: 'Pathway Gothic One', sans-serif;
    height: 40px;
    cursor: pointer;
    &:hover { background: #022E3B; }
    transition: background 0.3s ease;
`;






