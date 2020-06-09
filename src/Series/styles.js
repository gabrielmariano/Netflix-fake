import styled from "styled-components";
import fundo from "../../assets/images/walking.webp";

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
`;

export const Header = styled.h1`
    img {
    width: 10%;
    margin-top: -2%;
    margin-left: 4%;
  }
`;

export const Nav = styled.h1`
  font-family: Netflix Sans;
  font-weight: lighter;
  font-size: 8px;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  color: #e5e5e5;
  -webkit-box-align: center;
  margin-left: 16%;

`;

export const Item = styled.h1`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 9px;
  font-weight: normal;
  margin-top: -9%;
`;
