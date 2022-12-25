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
import spinner from '../images/Spinner-1s-200px.gif';
import { useState } from 'react';
import Password from '../features/Password';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDeleteState } from '../context/features/url/deleteSlice';
import { setLoaderState } from '../context/features/url/loaderSlice';




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


function HomePage() {
  const deleteState = useSelector((state) => state.delete.value);
  const loaderState = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();
  const { userid } = useParams();
  const [loader, setLoader] = useState('hidden');
  const [deleteAlert, setDeleteAlert] = useState('visible');
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

  // delete function
  const handleClick = () => {
    dispatch(setLoaderState("visible"));
    dispatch(setDeleteState("hidden"));
    async function deletePassword() {
      try {
        // const response = await axios.get(`https://passerver.onrender.com/api/user/accounts/${userid}/all`);
        // console.log(response);
        // setAllAccounts(response.data);
        
        
      } catch (error) {
        console.error(error);
      }
    }

  }

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
              <img src={spinner} alt="" style={{width: "25%"}} />
            </LoadingContent>
        </LoadingModal>
    </Wrapper>
  )
}

export default HomePage