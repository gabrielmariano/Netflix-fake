import React from "react";

import { AiTwotoneHome } from "react-icons/all";

import { Wrapper, Header, Nav, Item, Others, Search, Text, Box, Bell } from "./styles";

import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png';
import box from '../../assets/images/gift-box.png';
import notification from '../../assets/images/notification.png';

function Main() {
  return (
    <Wrapper>
      <Header><img src={logo}/>x
          <Nav>
            <Item>Início</Item>
            <Item>Séries</Item>
            <Item>Filmes</Item>
            <Item>Mais Recentes</Item>
            <Item>Minha Lista</Item>
          </Nav>

          <Others>
            <Search><img src={search}/></Search>
            <Text><p>INFANTIL</p></Text>
            <Box><img src={box}/></Box>
            <Bell><img src={notification}/></Bell>
          </Others>
    </Header>
    </Wrapper>
  );
}

export default Main;