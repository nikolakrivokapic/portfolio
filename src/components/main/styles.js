import styled from 'styled-components';
import pin from '../../assets/pin.png';
import bg from '../../assets/bg.png';
import toggleProp from '../../util/style-guide';

export const Container = styled.div`
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  background-size: cover;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  > div,
  > img {
    animation: fadein 1.4s;
    &:first-child {
      animation: none;
    }
  }
`;

export const BgImage = styled.div` 
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    width: 100%;
    height 100%;
    font-size: calc(10px + 2vmin);
    color: white;
    transition: transform 0.7s linear;
    transform: ${(props) => {
      if (props.currentPage === 'home') {
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
    }}; 
    
    @media only screen and (max-width: 767px) {
        background: url(${bg}); background-size: cover; transform: none; background-attachment: fixed; position: fixed; width: 100vw; height: 100vh;
        background-position: center center;
    }
    
    img {
        position: absolute;  width: 140%; height: 140%;
        filter: grayscale(0.5);
        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  color: white;
  margin: 0;
  height: 40px;
  margin-top: 31px;
  font-size: 16px;
  transform: none;
  transition: background 0.3s ease;
  &:focus {
    outline: none;
  }
 
  &:hover {
    background: #bac7dd;
  }
`;

export const Icons = styled.div`
  text-align: center;
  background: #000000c4;
`;

export const Icon = styled.img`
  height: 5vmin;
  top: 0;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  &:hover {
    filter: sepia(80%);
  }
`;

export const MenuMobile = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #022e3bc4;
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
    background-color: #022e3b;
    transition: background-color 0.3s ease;
  }
`;

export const Flag = styled.div`
  overflow: visible;
  position: absolute;
  cursor: pointer;
  font-family: 'Amatic SC', cursive;
  font-family: 'Pathway Gothic One', sans-serif;
  text-transform: uppercase;
  font-size: 34px;
  background: #022e3bc4;
  border-radius: 10px;
  padding: 0 10px;
  z-index: 2;
  &:nth-child(1) {
    left: 10%;
    top: 23%;
  }
  &:nth-child(2) {
    left: 27%;
    top: 10%;
  }
  &:nth-child(3) {
    left: 62%;
    top: 10%;
  }
  &:nth-child(4) {
    left: 83%;
    top: 22%;
  }
  &:nth-child(5) {
    left: 85%;
    top: 12%;
  }
  &:hover {
    background: #022e3b;
    transition: background 0.3s ease;
  }
  &::before {
    content: '';
    opacity: ${toggleProp('visible', '1', '0')};
    transition: ${toggleProp('visible', 'opacity 1.5s ease 0.7s', 'opacity 0.3s ease')};
    background: url(${pin});
    top: -55px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;
    position: absolute;
  }
`;

export const Profile = styled.img`
  height: 19vmin;
  filter: sepia(100%);
  cursor: pointer;
  top: 0;
  border-radius: 50%;
  margin-bottom: 15px;
  transform: rotate(-13deg);
  z-index: 2;
  &:hover {
    filter: sepia(10%);
  }
  transition: 0.3s ease-in-out;
  padding: 5px;
  background-color: #4984af8c;
  margin: 10px 0 10px 0;
`;

export const Error = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 30px;
`;

export const Badge = styled.div`
  display: flex;
  opacity: 0.7;
  justify-content: center;
  margin-top: 15px;
  background: rgb(48, 51, 54);
  a {
    pointer-events: none;
  }
  div {
    box-shadow: none !important;
  }
  .LI-more-info {
    display: none; 
  }
  .LI-view-profile {
    cursor: pointer;
    pointer-events: all !important;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(48, 51, 54, 0.6);
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const HeaderSmallText = styled.div`
  font-size: 15px;
`;

export const HeaderSmallerText = styled.div`
  font-size: 12px;
`;

export const Li = styled.li`
  background: ${(props) => props.active ? '#022e3b' : 'transparent'};
`;
