import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
    color: 'white',
    cursor: 'pointer'
  }
  return (
    <div style={style} onClick={props.CharHandler}>
      {props.character}
    </div>
  )
};

export default char