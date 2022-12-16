import React from 'react';
import addImg from '../images/add.png';

function AddPassword() {
  return (
    <div style={{
    // outline: "2px solid red", 
    width: "17%",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "4px 4px #d5d5d5"
    
  }}><img src={addImg} alt="" srcset="" style={{
    width: "100%"
  }}/></div>
  )
}

export default AddPassword