import styled from 'styled-components';

export const Container = styled.div` 
    position: fixed;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    background: transparent;
    transform: translateX(-50%) translateY(-50%);
`;

export const Animation = styled.div` 
    position: absolute;
    left: -100%;
    top: -100%;
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
