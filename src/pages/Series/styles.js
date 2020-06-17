import styled from "styled-components";
import fundo from "../../assets/images/walking.webp";

import { Link } from 'react-router-dom';

import netflixLogo from '../../assets/images/logo.png';


export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  position: absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  left: 0;
  right: 0;
  top: 0;
  img {
    margin-left: 4%;
    margin-top: 3%;
    width: 34%;
  }
`;



export const Header = styled.div`
  display: block;
`;

export const NavContainer = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  padding: 0 4%;
  z-index: 2;
  font-size: 1.2rem;
  -webkit-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  transition: background-color 0.4s;
  @media screen and (min-width: 950px) {
    height: 68px;
  }
  @media screen and (min-width: 1500px) {
    padding: 0 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const NavLogo = styled.div`
  
  > h1 {
    color: red;
    
  }
  @media screen and (min-width: 1150px) {
    margin-right: 25px;
  }
`;

export const Logo = styled.img.attrs({
  src: netflixLogo,
})`
  height: 68px;
`;

export const NavMain = styled.nav`
  margin-left: -8%;
`;

export const ListItems = styled.tr`
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  
`;

export const Item = styled.td`
  margin-left: 18px;
`;

export const NavRight = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
  ;
`;

export const NavLink = styled(Link)`
  transition: color 0.4s;
  :hover {
    color: #ccc;
  }
  color: #fff;
  text-decoration: none;
  font-family: Netflix Sans;
`;

export const NavElement = styled.div`
  @media screen and (min-width: 1330px) {
    margin-right: 20px;
  }
  margin-right: 15px;
  > span {
    color: #fff;
  }
  div{
    width: 10vh;
  }
`;

export const Text1 = styled.h1`
  font-family: Netflix Sans;
  color: white;
  margin-top: 1.7%;
  color: #fff;
  line-height: normal;
  width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-left: 4%;
  font-size: 1.6vw;
  font-weight: 700;
`;

export const Text2 = styled.h1`
  font-family: Netflix Sans;
  color: white;
  margin-top: 2%;
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-left: 4%;
`;

export const Btn = styled.button`
  background-color: white;
  width: 90px;
  margin-left: 4%;
  height: 6%;
  border-radius: 6px;
  font-family: Netflix Sans;
  margin-top: 3%;
  
  
`;

export const Btn2 = styled.button`
  background-color: white;
  width: 18%;
  margin-left: 2%;
  height: 6%;
  border-radius: 6px;
  font-family: Netflix Sans;
`;

export const Dropbtn = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  
  :hover .dropdown-content {
  display: block;
  }

  :hover .dropbtn {
    background-color: #3e8e41;
  }
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a:hover {background-color: #f1f1f1}
`;
