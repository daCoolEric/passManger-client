import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../features/NavBar';
import SideBar from '../features/SideBar';
import AddPassword from '../features/AddPassword';
import styled from 'styled-components';
import bgImg from '../images/bg.png';
import { useEffect } from 'react';
import axios from 'axios';
import alertIcon from '../images/alert-icon-1562.png';
import emailLogo from "../images/emaill.png";
import ewalletLogo from "../images/ewallet.png";
import socialMediaLogo from "../images/socialmedia.png";
import spinner from '../images/Spinner-1s-200px.gif';
import editImg from "../images/edit.png";
import editImgDisabled from "../images/edit-disabled.png";
import deleteImg from "../images/delete.png";
import { useState } from 'react';
import Password from '../features/Password';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from "react-draggable";
import { setDeleteState } from '../context/features/url/deleteSlice';
import { setLoaderState } from '../context/features/url/loaderSlice';
import { setUserNameState } from '../context/features/url/passwordInfoStates/userNameSlice';
import { setPasswordState } from '../context/features/url/passwordInfoStates/passwordSlice';
import { setPasswordId } from '../context/features/url/passwordIDSlice';
import { setAccountNameState } from '../context/features/url/passwordInfoStates/accountNameSlice';






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
//  outline: 2px solid red;
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

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

const Content = styled.div`
  // outline: 2px solid red;
  width: 100%;
  height: 30vh;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`


const DeleteContent = styled.div`
  // outline: 2px solid red;
  width: 90%;
  height: 50vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const AlertMessage = styled.div`
  // outline: 2px solid red;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  color: #353535;
  
`
const ButtonContainer = styled.div`
  // outline: 2px solid red;
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const Button = styled.div`
  // outline: 2px solid red;
  width: 46%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
`

const PasswordWrapper = styled.div`
    // outline: 2px solid blue;
    width: 95%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 17px;
    background-color: #EEEEEE;
    border-radius: 8px;
    border: 2px solid #6a3cf7;
    

`
const LogoContainer = styled.div`
    // outline: 2px solid red;
    width: 13%;
    height: 80%;
    display: flex;
    flex-direction: column;
    

`
const Logo = styled.div`
    //  outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

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
    height: 100%;
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


function HomePage() {
  const deleteState = useSelector((state) => state.delete.value);
  const loaderState = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();
  const { userid } = useParams();
  const [allAccounts, setAllAccounts] = useState([]);
  
 




  const Logos = {
    email: emailLogo,
    "social media": socialMediaLogo,
    ewallet: ewalletLogo
  }



  useEffect(() => {
    async function getAccounts() {
      try {
        const response = await axios.get
        // (`http://localhost:5500/api/user/accounts/${userid}/all`);
        (`https://passerver.onrender.com/api/user/accounts/${userid}/all`);
        console.log(response);
        setAllAccounts(response.data);

       
        
        
      } catch (error) {
        console.error(error);
      }
    }
    getAccounts();
  }, [userid])

  const passwordId = useSelector((state) => state.passwordId.value);

  // delete function
  const handleClick = () => {
    dispatch(setLoaderState("visible"));
    dispatch(setDeleteState("hidden"));
    // console.log(passwordId);

    async function deletePassword() {
      try {
        console.log(passwordId);
        const response = await axios.delete(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/${passwordId}/delete-email`,{
          id: passwordId,
          userID: userid
        });
        window.location = `/user/${userid}/home`;
        console.log(response);
        setAllAccounts(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    deletePassword();
    
   

  }

  


  async function decryptPassword(encryptedPassword){
    dispatch(setPasswordId(encryptedPassword.id));
    const response = await axios.post(`https://passerver.onrender.com/api/user/accounts/${userid}/emails/decrypt-password`, {
        id: encryptedPassword.id,
        EncryptedData: encryptedPassword.password,
        iv: encryptedPassword.iv,
        sk: encryptedPassword.sk,
    });
    setAllAccounts(
      allAccounts.map((account) => {
        return account._id == encryptedPassword.id
          ? {
              id: account._id,
              accountType: account.accountType,
              accountName: account.accountName,
              userName: account.userName,
              passcode: account.password,
              decryptedPassword: response.data.data,
              iv: account.iv,
              sk: account.sk,
            }
          : account;
      })
    )
    
   
    console.log(response);
    // dispatch(setDecryptedPass(response.data.data));
}
decryptPassword();

const handleDelete = (id) => {
  dispatch(setDeleteState("visible"));
  dispatch(setPasswordId(id));
 

 
}



const handleEdit = (accountName, password, userName) => {
  dispatch(setAccountNameState(accountName));
  dispatch(setUserNameState(userName));
  dispatch(setPasswordState(password));
  // dispatch(setPasswordId(id));
  console.log(passwordId);

 
 
 
}

  
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
            {allAccounts.map((account, key) => {
              return (
                <PasswordWrapper 
                id= {account._id}
                >
                  <LogoContainer key={account._id + "logocont"}>
                      <Logo key={account._id + "logo"}>
                        <img src={Logos[account.accountType]} alt="" srcset="" style={{width: "80%", filter: "grayscale:(100%)"}}/>
                      </Logo>
                      <Fav key={account._id + "favcont"}></Fav>
                  </LogoContainer>
                  <InfoContainer key={account._id + + "infocont"}>
                      <AccountNameContainer key={account._id + "accountnamecont"}>
                          <AccountName key={account._id + "accountname"}>
                              {account.accountName}
                          </AccountName>
                          <UserNameContainer key={account._id + "usernamecont"}>
                              {account.userName}
                          </UserNameContainer>
                      </AccountNameContainer>
                      <AccountDetailsContainer onClick={account.decryptedPassword === "XXXXXXXX" ? () => {
                                decryptPassword({
                                    id: account._id,
                                    password: account.passcode,
                                    iv: account.iv,
                                    sk: account.sk,
                                });
                              }: null }  key={account._id + "accountdetailscont"}>
                          <PasswordContainer key={account._id + "passwordcont"}>
                              
                              {account.decryptedPassword}
                              
                          </PasswordContainer>
                          
                      </AccountDetailsContainer>
                  </InfoContainer>
                  <ActionContainer key={account._id + "actioncont"}>
                      <EditContainer onClick={()=>{
                        handleEdit(account.accountName, account.decryptedPassword, account.userName);
         
                       
                      
                    }} 
                      
                      key={account._id + "editcont"}>
                        {account.decryptedPassword === "XXXXXXXX" ? <Link to={`/user/${userid}/home`} style={{ textDecoration: "none"}} key={account._id + "linkcont"}>
                            <img src={editImgDisabled} alt="" srcset="" style={{width: "100%"}} key={account._id + "img"}/>
                          </Link>: 
                          <Link to={`/user/${userid}/edit-password/${passwordId}`} style={{ textDecoration: "none"}} key={account._id + "linkcont"}>
                            <img src={editImg} alt="" srcset="" style={{width: "100%"}} key={account._id + "img"}/>
                          </Link>
                        }   
                      </EditContainer>
                  
                      <DeleteContainer onClick={()=>{handleDelete(account._id)} } key={account._id + "deletecont"}><img src={deleteImg} alt="" srcset="" style={{width: "100%"}} key={account._id + "delete"} /></DeleteContainer>  
                  </ActionContainer>
                </PasswordWrapper>
                )
            })
           
            }
            
           <Link to={`/user/${userid}/add-password`} style={{ textDecoration: "none"}}>
            
             <AddPassword />
            
            
           </Link> 
          </MainContainer>
        </MainBarContainer>
        <LoadingModal style={{visibility: deleteState }}>
            <DeleteContent> 
              <img src={alertIcon} alt="" style={{width: "30%",  marginBottom: "-10px"}} />
              <AlertMessage>
                Are you sure you want to delete?
              </AlertMessage>
              <ButtonContainer>
                <Button style={{backgroundColor: "#FF3131"}}
                onClick={handleClick}
                >
                  Yes
                </Button>
                <Button
                style= {{backgroundColor: "#19BA4A"}}
                onClick={() => dispatch(setDeleteState("hidden"))}
                >
                  No
                </Button>
              </ButtonContainer>
              
            </DeleteContent>
        </LoadingModal>
        <LoadingModal style={{visibility: loaderState }}>
            <LoadingContent>
              <Content>
                <div style={{ fontSize: "25px", fontWeight: "600"}}>Please Wait</div> 
                <img src={spinner} alt="" style={{width: "25%"}} />
              </Content>
              
              
            </LoadingContent>
        </LoadingModal>
    </Wrapper>
  )
}

export default HomePage