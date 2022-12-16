import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import bgImg from '../images/bg.png';
import logo from '../images/logo.png'

const Wrapper = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: 100% 100vh;

`
const LogoContainer = styled.div`
  // outline: 2px solid blue;
  height: 33.33vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoContent = styled.div`
  // outline: 2px solid blue;
  width: 75%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const AppName = styled.div`
`
const Password = styled.div`
  font-weight: 700;
  color: white;
  font-size: 40px;
`

const Manager = styled.div`
  color: white;
  font-size: 30px;
  
`

const TextContainer = styled.div`
  // outline: 2px solid red;
  height: 33.33vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Slogan = styled.div`
  color: #7aa1fe;
  font-size: 18.5px;
  
`

const ButtonContainer = styled.div`
  // outline: 2px solid blue;
  height: 33.33vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonContent = styled.div`
  // outline: 2px solid blue;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  width: 95%;
  height: 42%;
  color: white;
  font-size: 23px;
  border-style: none;
  border-radius: 10px;
`

function LandingPage() {
  return (
    <Wrapper>
      <LogoContainer>
        <LogoContent>
          <img src={logo} alt="a password logo" style={{ width: "90px"}} />
          <AppName>
            <Password>
            Password 
            </Password>
            <Manager style={{ fontSize: "30px" }}>
             Manager
            </Manager> 
          </AppName>
        </LogoContent>
       </LogoContainer>
      <TextContainer>
        <TextContent>
          <Password style={{ width: "90%" }}>Transparent & </Password>
          <Password>Secure.</Password>
          <Slogan>Only you can see your personal data</Slogan>
        </TextContent>
      </TextContainer>
      <ButtonContainer>
        <ButtonContent>
          <Button style={{ backgroundColor: "#2a6cff" }}><Link to="/register" style={{textDecoration: "none"}}>Create new account </Link></Button>
          <Button style={{ backgroundColor: "#6a3cf7", border: "2px solid white" }}><Link to="/login" style={{textDecoration: "none"}}>Sign In</Link></Button>
        </ButtonContent>
      </ButtonContainer>
    </Wrapper>
  )
}

export default LandingPage