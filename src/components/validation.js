import React from "react";

const validation = (props) => {
  let validtionMessage = "text long enough"
  if(props.inputLength <= 5){
    validtionMessage = "text too short!"
  }
  return (
    <div>
      <p>{validtionMessage}</p>
    </div>
  )
};

export default validation