import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../images/logo.png'
import Email from './Email';
import Ewallet from './Ewallet';
import Fav from './Fav';
import Logout from './Logout';
import Social from './Social';

const Wrapper = styled.div`
  height: 100vh;


`
const LogoContainer = styled.div`
  // outline: 2px solid green;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuContainer = styled.div`
  // outline: 2px solid red;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`

const FavoriteContainer = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const EmailContainer = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const EwalletContainer = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SocialMediaContainer = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 17%;
  display: flex;
 justify-content: center;
  align-items: center;
`
const LogoutContainer = styled.div`
  // outline: 2px solid red;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`


function SideBar() {
  return (
    <Wrapper>
      <LogoContainer><img src={logo} alt="" srcset="" style={{
        width: "70%"
      }}/></LogoContainer>
      <MenuContainer>
        <FavoriteContainer><Fav /></FavoriteContainer>
        <SocialMediaContainer> <Social /> </SocialMediaContainer>
        <EmailContainer> <Email /> </EmailContainer>
        <EwalletContainer> <Ewallet />  </EwalletContainer>
        
      </MenuContainer>
      <LogoutContainer>
      <Link to="/login" style={{width: "100%", textDecoration: "none"}}>
        <Logout />
      </Link>
        
      </LogoutContainer>
    </Wrapper>
  )
}

export default SideBar
