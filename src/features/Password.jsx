import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import editImg from "../images/edit.png";
import deleteImg from "../images/delete.png";
import openEyeImg from "../images/eyeOpen.png";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPassword } from '../context/features/url/passwordSlice';


const Wrapper = styled.div`
    // outline: 2px solid blue;
    width: 95%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 17px;
    background-color: #EEEEEE;
    border-radius: 8px;
    

`
const LogoContainer = styled.div`
    // outline: 2px solid red;
    width: 13%;
    height: 80%;
    display: flex;
    flex-direction: column;
    

`
const Logo = styled.div`
    // outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`
const Fav = styled.div`
    // outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`

const InfoContainer = styled.div`
    // outline: 2px solid yellow;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;

`
const AccountNameContainer = styled.div`
    // outline: 2px solid pink;
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;

`
const AccountName = styled.div`
    // outline: 2px solid pink;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: #000

`
const UserNameContainer = styled.div`
    // outline: 2px solid pink;
    width: 100%;
    
    

`
const AccountDetailsContainer = styled.div`
    // outline: 2px solid blue;
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

`

const PasswordContainer = styled.div`
    // outline: 2px solid blue;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
const VisibilityContainer = styled.div`
    // outline: 2px solid blue;
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
const ActionContainer = styled.div`
    // outline: 2px solid blue;
    width: 10%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

`
const EditContainer = styled.div`
    //  outline: 2px solid red;
    width: 80%;
    height: 40%;
    display: flex;

`
const DeleteContainer = styled.div`
    //  outline: 2px solid red;
    width: 80%;
    height: 40%;
    display: flex;

`


function Password({userName, accountName, password}) {
    const { userid } = useParams();
    const handleClick = () => {
        async function revealPassword(){
            // const response = await axios.post(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/decrypt-password`);
            console.log("clicked");
        }
        revealPassword();
        
    }
    
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>Logo</Logo>
            <Fav>Fav Status</Fav>
        </LogoContainer>
        <InfoContainer>
            <AccountNameContainer>
                <AccountName>
                    {accountName}
                </AccountName>
                <UserNameContainer>
                    {userName}
                </UserNameContainer>
            </AccountNameContainer>
            <AccountDetailsContainer>
                <PasswordContainer>
                    {password}
                </PasswordContainer>
                <VisibilityContainer onClick={handleClick}><img src={openEyeImg} alt="" srcset="" style={{width: "100%"}} /></VisibilityContainer>
            </AccountDetailsContainer>
        </InfoContainer>
        <ActionContainer>
            <EditContainer><img src={editImg} alt="" srcset="" style={{width: "100%"}}/></EditContainer>
            <DeleteContainer><img src={deleteImg} alt="" srcset="" style={{width: "100%"}}/></DeleteContainer>  
        </ActionContainer>
    </Wrapper>

    
  )
}

export default Password