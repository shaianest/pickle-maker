import React from "react";
import classes from "./person.module.css";
const Person = (props)=>{
  return(
    <div className={classes.person}>
      <p onClick={props.Click}>i'm {props.name} and i am {props.age} years old.</p>
      <input onChange={props.Change.bind(this,props.id)} value={props.name} />
    </div>
  )
}
export default Person