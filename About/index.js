import React from "react";
import { Wrapper, Header } from "./styles";
import logo from '../../assets/images/logo.png';

// import { Container } from './styles';

function About() {
  return (
    <Wrapper>

      <Header>
            <img src={logo}/>
      </Header>
      
      <h1>Quem está assistindo?</h1>
    
    </Wrapper>
  );
}

export default About;
