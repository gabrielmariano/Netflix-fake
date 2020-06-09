import React from "react";

import { AiTwotoneHome } from "react-icons/all";

import { Wrapper, Header, Nav, Item } from "./styles";

import logo from '../../assets/images/logo.png';

function Main() {
  return (
    <Wrapper>
      <Header><img src={logo}/></Header>
          <Nav>
            <Item>Início</Item>
            <Item>Séries</Item>
            <Item>Filmes</Item>
            <Item>Mais Recentes</Item>
            <Item>Minha Lista</Item>
          </Nav>
    </Wrapper>
  );
}

export default Main;
