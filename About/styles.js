import styled from "styled-components";

import fundo from "../../assets/images/space.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #141414;

  h1 {
    color: yellow;
    font-family: Helvetica;
    text-align: center;
    ;
  }
`;
export const Header = styled.h1`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 10px;

  img {
    position: absolute;
    left: 2%;
    top: -6%;
  }
`;
