import styled from 'styled-components';
import toggleProp from '../../util/style-guide';

export const Container = styled.div` 
    overflow: hidden;
    opacity: ${toggleProp('visible', '1', '0')}; 
    width: ${toggleProp('visible', 'auto', '0')}; 
    min-height: ${toggleProp('visible', '420px', '0')}; 
    height: ${toggleProp('visible', 'auto', '0')}; 
    transition: ${toggleProp('visible', 'opacity 2s ease 0s', 'opacity 2s ease 1.8s')}; 
    div {
        &:last-child { &::after { display: none; }}
    }
`;

export const TextArea = styled.div` 
    &:nth-child(1) { margin-bottom: 25px; }
    
    text-align: center;
        margin: 0 auto;
        width: 60%;
        display: flex;
        background: white;
        border-radius: 10px;
        position: relative; 
    span {
        color: #17313c;
        padding: 15px;
        font-size: 18px;
        line-height: 30px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background: white;
        left: 50%;
        bottom: -18px;
        transform: rotate(44deg) translateX(-50%);
    }
`;