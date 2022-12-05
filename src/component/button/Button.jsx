import React from "react";
import './Button.style.css'

const Button = (props)=>{
    // const clickButton = ()=>{
    //     alert('Hai Bang')
    // }

    return <button className = 'scndry-btn' onClick={props.count}>{props.nama}</button>
}

export default Button;