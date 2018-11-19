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
    padding: 32px;
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
    }
`;

export const Inputs = styled.div` 
    position: relative;
    margin: 0 50px;
`;


export const Input = styled.input`
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    color: white;
    display: block;
    font-size: 16px;
    outline: none !important;
    opacity: .6;
    padding-bottom: 10px;
    width: 100%;
`;


export const InputWrapper = styled.div`
    margin-top: 15px;
`;

export const Button = styled.div`
    margin-top: 25px;
    background: #022e3bc4;
    border-radius: 10px;
    width: 27%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 7px;
    cursor: pointer;
    &:hover { background: #022E3B; }
    transition: background 0.3s ease;
`;






