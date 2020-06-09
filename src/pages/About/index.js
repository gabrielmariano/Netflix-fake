import React from "react";
import { Wrapper, Header, Users, Names, Button, Add, User1, User2, User3, User4, UserAdd } from "./styles";
import logo from '../../assets/images/logo.png';
import addicon from '../../assets/images/addicon.png';

// import { Container } from './styles';

function About() {
  return (
    <Wrapper>

        <Header>
              <img src={logo}/>
        </Header>
        
            <h1>Quem está assistindo?</h1>
        
        <Users>
            <User1></User1>
            <User2></User2>
            <User3></User3>
            <User4></User4>
            <UserAdd></UserAdd>
        </Users>

        <Names>
            <article class="item">Captain</article>
            <article class="item">Iron Man</article>
            <article class="item">Spider-Man</article>
            <article class="item">Thor</article>
            <Add>Adicionar Perfil</Add>
        </Names>

          <Button>
              <span>GERENCIAR PERFIS</span>
          </Button>



    </Wrapper>
  );
}

export default About;