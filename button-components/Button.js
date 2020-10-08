import React from 'react'
import 'style.css'

function Button(props) {
    console.log(props.button.name)
    return (
    <div>
        <p>{props.button.elementExample}</p>
        <button className={props.button.name} style={props.button.style}>{props.button.textContent}</button>
    </div>
    )
   
}

export default Button