import React from "react";

const UserInput = (props)=>{
  const inputstyle = {
    border: '2px solid red'
  }

  return(
    <div>
      <input 
      type="text"
      style={inputstyle}
      value={props.userNameinit}
      onChange={props.Changed}
      />
    </div>
  )
}

export default UserInput