import React from 'react';
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import editImg from "../images/edit.png";
import deleteImg from "../images/delete.png";

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteState } from '../context/features/url/deleteSlice';
import { setPasswordId } from '../context/features/url/passwordIDSlice';
import { setAccountNameState } from '../context/features/url/passwordInfoStates/accountNameSlice';
import { setUserNameState } from '../context/features/url/passwordInfoStates/userNameSlice';
import { setPasswordState } from '../context/features/url/passwordInfoStates/passwordSlice';
import { setPwdEyeCloseState } from '../context/features/url/passwordInfoStates/pwdEyeCloseSlice';
import { setPwdEyeOpenState } from '../context/features/url/passwordInfoStates/pwdEyeOpenSlice';
import { useState } from 'react';






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


function Password({id, userName, accountName, password}) {
    const { userid } = useParams();
    
    const dispatch = useDispatch();
    const pwdEyeCloseState = useSelector((state) => state.pwdEyeClose.value);
    const pwdEyeOpenState = useSelector((state) => state.pwdEyeOpen.value);
    const eyeID = useSelector((state) => state.passwordId.value);
    const [eyeId, setEyeId] = useState("");

    const handleClick = async () => {
        dispatch(setPasswordId(id));
        setEyeId(id);
        console.log(setPasswordId(id).payload);
        console.log(eyeId);
            if(pwdEyeCloseState === "visible" && eyeID === eyeId){
                dispatch(setPwdEyeCloseState("hidden"));
                dispatch(setPwdEyeOpenState("visible"));
            }else{
                dispatch(setPwdEyeCloseState("visible"));
                dispatch(setPwdEyeOpenState("hidden"));
            }

        
        async function revealPassword(){
            // const response = await axios.post(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/decrypt-password`);
            // console.log("clicked");
        }
        revealPassword();
        
    }
    const handleDelete = () => {
        dispatch(setDeleteState("visible"));
        dispatch(setPasswordId(id));
       
       
    }

    const handleEdit = () => {
        dispatch(setAccountNameState(accountName));
        dispatch(setUserNameState(userName));
        dispatch(setPasswordState(password));
        dispatch(setPasswordId(id));
       
       
       
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
                    {password?password:"XXXXXX"}
                </PasswordContainer>
                
            </AccountDetailsContainer>
        </InfoContainer>
        <ActionContainer>
            <EditContainer onClick={()=>{handleEdit()}}>
                <Link to={`/user/${userid}/edit-password`} style={{ textDecoration: "none"}}>
                    <img src={editImg} alt="" srcset="" style={{width: "100%"}}/>
                </Link>
            </EditContainer>
         
            <DeleteContainer onClick={handleDelete} ><img src={deleteImg} alt="" srcset="" style={{width: "100%"}}/></DeleteContainer>  
        </ActionContainer>
    </Wrapper>

    
  )
}

export default Password