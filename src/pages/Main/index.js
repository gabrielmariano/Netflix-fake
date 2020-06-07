import React from 'react';

import { AiTwotoneHome } from "react-icons/all";

import { Wrapper, Header, Button, Box, Text, Login, Check, Facebook, Novo, Captcha } from './styles';

import logo from '../../assets/images/logo.png';

function Main() {
  return (
      <Wrapper>
        <Header>
                <img src={logo}/>
        </Header>
        
        <body>
            <Box >
                <Text>Entrar</Text>
                <Login >
                    <input type="text" id="usuario" placeholder="Email ou  número de telefone" />
                    <input type="text" id="senha" placeholder="Senha" />
                    
                    
                        <Button>
                          
                          <span>Entrar</span>
                        </Button>
                    
                      
                    <Check>
                      <p>
                        <input type="checkbox" name="check" value="senha" /> Lembre-se de mim
                        <a href="">Precisa de ajuda?</a>
                      </p>
                    </Check>
                        
                        <Facebook>
                            <a href="">
                                  <p>
                                    <img class="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" height="20px"></img>  
                                    Conectar com Facebook
                                  </p>
                            </a>
                        </Facebook>
                                
                        <Novo>
                            <p>
                                Novo por aqui?
                                <a href=""> Assine agora.</a>
                            </p>
                                    
                       </Novo>

                       <Captcha>
                                <p>Esta página é protegida pelo Google reCAPTCHA </p> 
                                <p>
                                    para garantir que você não é um robô.
                                    <a href=""> Saiba mais.</a>
                                </p>

                       </Captcha>
                            
                            
                        

                </Login>
                </Box>
            
                  
            
        </body>
      </Wrapper>  
  )
}

export default Main;