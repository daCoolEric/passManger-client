import React from 'react'

function NavBar() {
  return (
    <div
    style={{
      //  outline: "2px solid blue",
      width: "60%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"}}
    
    >
      <div
        style={{
          // outline: "2px solid blue",
         width: "50%",
         display: "flex",
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
        fontSize: "20px"
        }}
      >All</div>
      <div
      style={{
        // outline: "2px solid blue",
       width: "50%",
       display: "flex",
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
      fontSize: "20px"
      }}
      
      >Recent</div>
    </div>
  )
}

export default NavBar