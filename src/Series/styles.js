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

  img {
    margin-left: 4%;
    margin-top: 3%;
    width: 34%;
  }
`;

export const Header = styled.h1`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0)
  );
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
  font-size: 1.2rem;
`;

export const Others = styled.h1``;

export const Search = styled.div`
  margin-left: 71%;
  width: 15%;
  margin-top: -5.5%;
`;

export const Text = styled.div`
  margin-left: 75%;
  margin-top: -2.9%;
  font-size: 14px;
  color: #e5e5e5;
  font-family: Netflix Sans;
  font-weight: lighter;
`;

export const Box = styled.div`
  margin-left: 81%;
  margin-top: -2.8%;
  width: -15%;
`;

export const Bell = styled.div`
  margin-left: 85%;
  margin-top: -4%;
  width: -15%;
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
  
`;

export const Btn2 = styled.button`
  background-color: white;
  width: 18%;
  margin-left: 2%;
  height: 6%;
  border-radius: 6px;
  font-family: Netflix Sans;
`;
