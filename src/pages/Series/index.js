import React from "react";
import { FaSearch, AiOutlineGift, GoBell } from 'react-icons/all';



import {
  Wrapper,
  Header,
  NavContainer,
  NavLogo,
  Logo,
  NavMain,
  ListItems,
  Item,
  NavRight,
  NavLink,
  NavElement,
  Text1,
  Text2,
  Btn,
  Btn2,
  Dropdown,
  Dropbtn,
  Content,
  

  

} from "./styles";


import walkinglogo from "../../assets/images/walkinglogo.webp";






function Main() {
  return (
    <Wrapper>
      <Header>
      <NavContainer>
        <NavLogo>
        <Logo />
        </NavLogo>
        <NavMain>
          <ListItems>
            <Item>
              <span>
                <NavLink to="/serie"> Inicio </NavLink>
              </span>
            </Item>
            <Item>
              <span>
                <NavLink to="/serie"> Séries </NavLink>
              </span>
            </Item>
            <Item>
              <span>
                <NavLink to="/serie"> Filmes </NavLink>
              </span>
            </Item>
            <Item>
              <span>
                <NavLink to="/serie"> Mais Recentes </NavLink>
              </span>
            </Item>
            <Item>
              <span>
                <NavLink to="/serie"> Minha Lista </NavLink>
              </span>
            </Item>
          </ListItems>
        </NavMain>
        <NavRight>
          <NavElement>
            <span>
              <FaSearch size="18" color="#fff" />
            </span>
          </NavElement>
          <NavElement>
            <span>INFANTIL</span>
          </NavElement>
          <NavElement>
            <span>
              <AiOutlineGift size="18" color="#fff" />
            </span>
          </NavElement>
          <NavElement>
            <span>
              <GoBell size="18" color="#fff" />
            </span>
          </NavElement>
          <NavElement>
            <div>
              <img
                src="https://occ-0-804-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdV73aGll9X5TMw9EIq-tUn0Fcz8g5jXPCpuLSXvuWP-xIzsGdqwRdsSEQBxHhofCBQQtPZDmdkWpP2j1nV7mv8.png?r=478"
                alt="logo"
              />
            </div>
          </NavElement>
          <NavElement>
            <Dropdown>
              <Dropbtn>Dropdown</Dropbtn>
                <Content>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </Content>
            </Dropdown>
          </NavElement>
        </NavRight>
      </NavContainer>
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