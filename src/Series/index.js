import React from "react";

import {
  Wrapper,
  Header,
  Nav,
  Item,
  Others,
  Search,
  Text,
  Box,
  Bell,
  Text1,
  Text2,
  Btn,
  Btn2,
  

  

} from "./styles";

import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import box from "../../assets/images/gift-box.png";
import notification from "../../assets/images/notification.png";
import walkinglogo from "../../assets/images/walkinglogo.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function Main() {
  return (
    <Wrapper>
      <Header>
        <img src={logo} />
        <Nav>
          <Item>Início</Item>
          <Item>Séries</Item>
          <Item>Filmes</Item>
          <Item>Mais Recentes</Item>
          <Item>Minha Lista</Item>
        </Nav>
        <Others>
          <Search>
            <img src={search} />
          </Search>
          <Text>
            <p>INFANTIL</p>
          </Text>
          <Box>
            <img src={box} />
          </Box>
          <Bell>
            <img src={notification} />
          </Bell>
        </Others>
      </Header>

      <img src={walkinglogo} />
      <Text1>Top 5 séries de hoje</Text1>
      <Text2>
        Na série de terror de maior sucesso na TV, quem restou
        <br />
        na humanidade precisa lutar com zumbis-e entre si.
      </Text2>

            <Btn>Assistir</Btn>
            <Btn2>Mais Informações</Btn2>
        
        
        
      
    </Wrapper>
  );
}

export default Main;
