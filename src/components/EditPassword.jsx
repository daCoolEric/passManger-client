import React from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import bgImg from '../images/loginpath.png';
import emailImg from '../images/email.png';
import padlockImg from '../images/padlock.png';
import userImg from '../images/user.png';
import spinner from '../images/Spinner-1s-200px.gif';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccountNameState } from '../context/features/url/passwordInfoStates/accountNameSlice';
import { setUserNameState } from '../context/features/url/passwordInfoStates/userNameSlice';
import { setPasswordState } from '../context/features/url/passwordInfoStates/passwordSlice';
import { setConfirmPasswordState } from '../context/features/url/passwordInfoStates/confirmPasswordSlice';


const Wrapper = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: 100% 100vh;

`
const TextContainer = styled.div`
  // outline: 2px solid blue;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: white;
  font-size: 40px;
`

const LoginContainer = styled.div`
  // outline: 2px solid red;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginContent = styled.div`
  // outline: 2px solid red;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PersonalInfo = styled.div`
  // outline: 2px solid blue;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 70px;
`
const EmailContainer = styled.div`
  // outline: 2px solid red;
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #6a3cf7;
`
const IconBox = styled.div`
  // outline: 2px solid red;
  width: 10%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.input`
  // outline: 2px solid red;
  height: 80%;
  width: 87%;
  font-size: 20px;
  color: #6a3cf7;
  border-style: none;
  :focus{
    outline: none;
  }
  
`
const PasswordContainer = styled.div`
  // outline: 2px solid red;
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #6a3cf7;
`

const SubmitSection = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const LoginButton = styled.button`
  // outline: 2px solid red;
  width: 95%;
  height: 50px;
  border-radius: 25px;
  border-style: none;
  background-color: #6a3cf7;
  color: #fff;
  font-size: 27px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoSection = styled.div`
  // outline: 2px solid red;
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingModal = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingContent = styled.div`
  // outline: 2px solid red;
  width: 80%;
  height: 50vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`





function EditPassword() {
  const { userid } = useParams();
  const [loader, setLoader] = useState('hidden');
  const accountName = useSelector((state) => state.accountName.value);
  const userName = useSelector((state) => state.userName.value);
  const password = useSelector((state) => state.password.value);
  const confirmPassword = useSelector((state) => state.confirmPassword.value);
  const passwordId = useSelector((state) => state.passwordId.value);
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    
    if(password !== confirmPassword){
      alert("The two passwords are not the same");
    }
    setLoader("visible");
    async function editPassword() {
      try {
        const response = await axios.patch(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/${passwordId}`, {
          accountName: accountName,  
          userName: userName,
          password: password,
        });
        window.location = `/user/${userid}/home`
        setLoader("hidden");
       
        
        console.log(response);
        // setAllAccounts(response.data);
      } catch (error) {
        console.error(error);
        // alert ("You dont have have account.");
        console.log(error);
      }
    }
    editPassword();
  }
  return (
    <Wrapper>
      <TextContainer>Edit a Password</TextContainer>
      <LoginContainer>
        <LoginContent>
          <PersonalInfo>
            <EmailContainer>
              <IconBox><img src={userImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type='text' placeholder='Account Name'
              onChange={(e) => {dispatch(setAccountNameState(e.target.value))} } value={accountName}
              />
            </EmailContainer>
            <PasswordContainer>
              <IconBox><img src={userImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type='text' placeholder='Username' value={userName}
              onChange={(e) => {dispatch(setUserNameState(e.target.value))} }
              />
            </PasswordContainer>
            <PasswordContainer>
              <IconBox><img src={padlockImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type= 'password' placeholder='Password' value={password}
              onChange={(e) => dispatch(setPasswordState(e.target.value))}
              />
            </PasswordContainer>
            <PasswordContainer>
            <IconBox><img src={padlockImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type='password'   placeholder='Confirm Password'
               onChange={(e) => dispatch(setConfirmPasswordState(e.target.value))} value={confirmPassword}
              />
            </PasswordContainer>
            
            
          </PersonalInfo>
          <SubmitSection>
            <LoginButton onClick={handleSubmit} >Update Password</LoginButton>
            <InfoSection><span style={{marginLeft: "10px", textDecoration: "none"}}> <Link to={`/user/${userid}/home`} style={{textDecoration: "none"}}>Go Back</Link></span></InfoSection>
          </SubmitSection>
        </LoginContent>
        <LoadingModal style={{visibility: loader }}>
            <LoadingContent> 
              <img src={spinner} alt="" style={{width: "25%"}} />
            </LoadingContent>
        </LoadingModal>
      </LoginContainer>

      
      
    </Wrapper>
  )
}

export default EditPassword;