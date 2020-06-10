import styled from "styled-components";
import fundo from "../../assets/images/walking.webp";
import { FaEdge } from "react-icons/fa";

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
    
    background-image: linear-gradient(to bottom,rgba(0,0,0,.8) 10%,rgba(0,0,0,0));
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
  margin-top: -3%;
  
    

`;

export const Item = styled.h1`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 9px;
  font-weight: normal;
  margin-top: -5%;
`;

export const Others = styled.h1`
`;


export const Search = styled.div`
    margin-left: 71%;
    width: 15%;
    margin-top: -5.5%;
`;

export const Text = styled.div`
     margin-left: 75%;
     margin-top: -2.8%;
     font-size: 14px;
     color: #e5e5e5;
     font-family: Netflix Sans;
    font-weight: lighter;
    
`;


export const Box = styled.div`
     margin-left: 81%;
     margin-top: -3.5%;
     width: 15%;
`;

export const Bell = styled.div`
     margin-left: 85%;
     margin-top: -4.6%;
     width: 15%;
     
    
    
`;
