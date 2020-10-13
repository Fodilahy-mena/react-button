import React from 'react'
import 'style.css'

function Button(props) {
    // function icon() {
    //     if(props.nameClass === 'button icon iconStart') {
    //         return <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>;
    //         // console.log(svg);
    //     }
    // }
    let nameOfClass;

    if(props.variant === 'outline') {
        nameOfClass = 'button outline outlineHover'
    }

    if(props.variant === 'text') {
        nameOfClass = 'button text textHover'
    }

    if(props.hoverDefault === 'hover') {
        nameOfClass = 'button hover'
    }

    if(props.disableShadow) {
        nameOfClass = 'button disableShadow'
    }

    if(props.disable) {
        nameOfClass = 'button disable'
    }

    if(props.variant === "text" && props.disable) {
        nameOfClass = 'button textDisable textHover'
    }

    if(props.startIcon) {
        nameOfClass = 'button icon iconStart'
    }

    if(props.endIcon) {
        nameOfClass = 'button icon iconEnd'
    }

    if(props.size === 'sm') {
        nameOfClass = 'button size sizedSm'
    }

    if(props.size === 'md') {
        nameOfClass = 'button size sizedMd'
    }
    if(props.size === 'lg') {
        nameOfClass = 'button size sizedLg'
    }
    if(props.color === 'default') {
        nameOfClass = 'button default'
    }
    if(props.color === 'primary') {
        nameOfClass = 'button primary'
    }
    if(props.color === 'secondary') {
        nameOfClass = 'button secondary'
    }
    if(props.color === 'danger') {
        nameOfClass = 'button danger'
    }

    if(props.variant === 'outline' && props.disableShadow && props.size === 'lg') {
        nameOfClass = 'button lgOutlineDisaShadow'
    }
    return (
    <div>
        <span>{props.elementExample}</span><br/>
        <button className={nameOfClass}>
        {props.textContent}
        </button>
    </div>
    )
   
}

export default Button