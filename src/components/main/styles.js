import styled from 'styled-components';
import pin from '../../assets/pin.png';
import toggleProp from '../../util/style-guide';

export const Container = styled.div` 
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    background-size: cover;
    padding-top: 20px;
`;

export const BgImage = styled.div` 
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height 100%;
    font-size: calc(10px + 2vmin);
    color: white;
    transition: transform 0.7s linear;
    transform: ${
        (props) => {
            if(props.currentPage === 'home') {
                return 'translateY(-40%) translateX(0%)';
            } else if (props.currentPage === 'projects') {
                return 'translateY(-40%) translateX(-10%)';
            } else if (props.currentPage === 'skills') {
                return 'translateY(-40%) translateX(-20%)';
            } else if (props.currentPage === 'blog') {
                return 'translateY(-40%) translateX(-30%)';
            } else if (props.currentPage === 'hire') {
                return 'translateY(-40%) translateX(-40%)';
            }
        }
    }; 
    background-size: cover;
    img {
        position: absolute;  width: 140%; height: 140%;
    }
`;

export const Button = styled.button` 
    width: 200px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 14px;
    transition: background 0.3s ease;
    &:focus { outline: none; }
    &:hover { background: #bac7dd; }
`;

export const Icons = styled.div` 
    text-align: center;
`;

export const Icon = styled.img` 
    height: 5vmin;
    top: 0;
    border-radius: 50%;
    margin: 5px;
`;

export const MenuMobile = styled.div` 
    @media only screen and (min-width: 768px) {
        display: none;
    }

    text-align: center;
    display: flex;
    justify-content: center;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: rgba(99, 52, 52, 0.7);
        border-radius: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        cursor: pointer;
    }

    li a:hover {
        background-color: #111;
        transition: background-color 0.3s ease;
    }
`;

export const MenuDesktop = styled.div` 
    text-align: center;
    display: none;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        display: flex;
    }
`;

export const Flag = styled.div` 
    overflow: visible;
    position: absolute;
    cursor: pointer;
    font-family: 'Gloria Hallelujah', cursive;
    background: rgba(99,52,52,0.7);
    border-radius: 10px;
    padding: 0 10px;
    z-index: 2;
    &:nth-child(1) { left: 10%; top: 23%; }
    &:nth-child(2) { left: 27%; top: 10%; }
    &:nth-child(3) { left: 62%; top: 10%; }
    &:nth-child(4) { left: 73%; top: 10%; }
    &:nth-child(5) { left: 85%; top: 12%; }
    &:hover { background: #022E3B; transition: background 0.3s ease; }
    &::before {
        content: '';
        opacity: ${toggleProp('visible', '1', '0')}; 
        transition: ${toggleProp('visible', 'opacity 1.5s ease 0.7s', 'opacity 0.3s ease')}; 
        background: url(${pin});
        top: -55px;
        left: 50%; transform: translateX(-50%);
        width: 40px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 50px;
        position: absolute;
    }
`;

export const Profile = styled.img` 
    height: 16vmin;
    filter: sepia(100%);
    cursor: pointer;
    top: 0;
    border-radius: 50%;
    margin-bottom: 15px;
    transform: rotate(-13deg);
    z-index: 2;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 29px;
    &:hover { filter: sepia(0);} 
    transition: .3s ease-in-out;
    padding: 5px;
    background-color: #4984af8c;
`;

export const Error = styled.div` 
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 30px;
`;

export const Loader = styled.div` 
    position: absolute;
    display: ${toggleProp('visible', 'block', 'none')}; 
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
