import React from "react";
import "./person.css";
const Person = (props)=>{
  return(
    <div className="person">
      <p onClick={props.Click}>i'm {props.name} and i am {props.age} years old.</p>
      <input onChange={props.Change.bind(this,props.id)} value={props.name} />
      {console.log(props.id)}
    </div>
  )
}
export default Person