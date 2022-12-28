import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import bgImg from '../images/loginpath.png';
import emailImg from '../images/email.png';
import padlockImg from '../images/padlock.png';
import axios from 'axios';
import spinner from '../images/Spinner-1s-200px.gif';
import openEyeImg from "../images/eyeOpen.png";
import closeEyeImg  from "../images/eyeClose.png";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setPasswordId } from '../context/features/url/passwordIDSlice';
import { setPwdEyeOpenState } from '../context/features/url/passwordInfoStates/pwdEyeOpenSlice';
import { setPwdEyeCloseState } from '../context/features/url/passwordInfoStates/pwdEyeCloseSlice';

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
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 100px;
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

const VisibilityContainer = styled.div`
    // outline: 2px solid blue;
    width: 11%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    

`

const ForgotPasswordContainer = styled.div`
  // outline: 2px solid red;
  width: 95%;
  height: 45px;
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
  align-items: center;
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





function Login() {
  const pwdEyeCloseState = useSelector((state) => state.pwdEyeClose.value);
    const pwdEyeOpenState = useSelector((state) => state.pwdEyeOpen.value);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loader, setLoader] = useState('hidden');
  const [passwordStatus,setPasswordStatus] = useState('password');
  const dispatch = useDispatch();

  const handleClick = async () => {
        if(pwdEyeCloseState === "visible"){
            dispatch(setPwdEyeCloseState("hidden"));
            dispatch(setPwdEyeOpenState("visible"));
            setPasswordStatus("text");
        }else{
            dispatch(setPwdEyeCloseState("visible"));
            dispatch(setPwdEyeOpenState("hidden"));
            setPasswordStatus("password");
        }

    
    async function revealPassword(){
        // const response = await axios.post(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/decrypt-password`);
        // console.log("clicked");
    }
    revealPassword();
    
}


  const submitLogin = () => {
    setLoader("visible");
    async function authUser() {
      try {
        const response = await axios.post("https://passerver.onrender.com/api/user/signin", {
          email: email,
          password: password,
        });
        setLoader("hidden");
        window.location = `/user/${response.data.result._id}/home`
        
        
        // console.log(response.data.result._id);
        // setAllAccounts(response.data);
      } catch (error) {
        console.error(error);
        alert ("You dont have have account.");
        console.log(error);
      }
    }
    authUser();
  }
  return (
      <Wrapper>
      <TextContainer>Hello, Sign In</TextContainer>
      <LoginContainer>
        <LoginContent>
          <PersonalInfo>
            <EmailContainer>
              <IconBox><img src={emailImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type='text' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} style={{ width: "87%" }}/>
            </EmailContainer>
            <PasswordContainer>
            <IconBox><img src={padlockImg} alt="email icon" style={{ width: "80%" }} /></IconBox>
              <InputContainer type={passwordStatus} placeholder='Password'
              onChange={(e) => { setPassword(e.target.value) }}
              style={{ width: "70%" }}
              />
              <VisibilityContainer >
                    <img src={openEyeImg} alt="" srcset="" style={{width: "70%", visibility: pwdEyeOpenState}} onClick={handleClick}  />
                    <img src={closeEyeImg} alt="" srcset="" style={{width: "80%", position: "absolute", top: "5px", visibility: pwdEyeCloseState}} onClick={handleClick} />
              </VisibilityContainer>
            </PasswordContainer>
            <ForgotPasswordContainer>
              Forgot Password?
            </ForgotPasswordContainer>
          </PersonalInfo>
          <SubmitSection>
            <LoginButton onClick={submitLogin}>Sign In</LoginButton>
            <InfoSection>Don't have an account? <span style={{marginLeft: "10px", textDecoration: "none"}}> <Link to="/register" style={{textDecoration: "none"}}>Sign Up</Link></span></InfoSection>
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

export default Login