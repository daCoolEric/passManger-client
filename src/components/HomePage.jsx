import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../features/NavBar';
import SideBar from '../features/SideBar';
import AddPassword from '../features/AddPassword';
import styled from 'styled-components';
import bgImg from '../images/bg.png';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Password from '../features/Password';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPassword } from '../context/features/url/passwordSlice';



const Wrapper = styled.div`
  outline: 2px solid blue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url(${bgImg});
  background-size: 100% 100vh;
  overflow: hidden;
`
const SideBarContainer = styled.div`
  // outline: 2px solid red;
  width: 15%;
  height: 100%;
  background: none;



`
const NavBarContainer = styled.div`
  // outline: 2px solid red;
  height: 7%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  
  
`
const MainBarContainer = styled.div`
  // outline: 2px solid blue;
  width: 85%;
  
  background-color: #fff;

`
const MainContainer = styled.div`
  // outline: 2px solid red;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

`

function HomePage() {
  const { userid } = useParams();
  useEffect(() => {
    async function getAccounts() {
      try {
        const response = await axios.get(`https://passerver.onrender.com/api/user/accounts/${userid}/all`);
        console.log(response);
        setAllAccounts(response.data);
        
        
      } catch (error) {
        console.error(error);
      }
    }
    // async function revealPassword(){
    //   // const response = await axios.post(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/decrypt-password`);
    //   console.log("clicked");
    // }
    // revealPassword();
    getAccounts();
  }, [userid])

  const [allAccounts, setAllAccounts] = useState([]);
  // console.log(allAccounts);
  return (
    <Wrapper>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <MainBarContainer>
          <NavBarContainer>
            <NavBar />
          </NavBarContainer>
          <MainContainer>
            {allAccounts.map(account => {
              return (
                <Password 
                key = {account._id} 
                accountName = {account.accountName}
                userName = {account.userName}
                password = {account.password || account.passcode }
                /> 
              )
            })}
            
           <Link to={`/user/${userid}/add-password`} style={{ textDecoration: "none"}}>
            <AddPassword />
           </Link> 
          </MainContainer>
        </MainBarContainer>
    </Wrapper>
  )
}

export default HomePage