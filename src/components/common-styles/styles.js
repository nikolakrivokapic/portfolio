import styled from 'styled-components';
import toggleProp from '../../util/style-guide';

export const Container = styled.div`
  overflow: hidden;
  opacity: ${toggleProp('visible', '1', '0')};
  width: ${toggleProp('visible', 'auto', '0')};
  height: ${toggleProp('visible', 'auto', '0')};
  transition: ${toggleProp('visible', 'opacity 1.5s ease 0s', 'opacity 1.5s ease 0s')};
  div {
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

export const TextArea = styled.div`
  &:nth-child(1) {
    margin-bottom: 25px;
  }
  &:nth-child(2) {
    margin-bottom: 25px;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: center;
  margin: 0 auto;
  width: ${props => (props.small ? '30%' : '60%')};
  max-width: 700px;
  display: flex;
  justify-content: center;
  background: #e1e4e1;
  border-radius: 10px;
  position: relative;
  @media only screen and (max-width: 767px) {
    width: 85%;
  }
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
    background: #e1e4e1;
    left: 50%;
    bottom: -18px;
    transform: rotate(44deg) translateX(-50%);
  }
`;
