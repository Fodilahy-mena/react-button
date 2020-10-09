import React from 'react'
import Button from './Button'

function App() {
    
    return (
        <div>
            <h1>Buttons</h1>
            <div className="first-components">
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button />",
                    nameClass: 'button',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button &:hover, &:focus/>",
                    nameClass: 'button hover',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button variant='outline'/>",
                    nameClass: 'button outline',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button &:hover, &:focus/>",
                    nameClass: 'button outline outlineHover',
                }}/>

                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button variant='text'/>",
                    nameClass: 'button text',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button &:hover, &:focus/>",
                    nameClass: 'button text textHover',
                }}/>
            </div>
            <div className="second-components">
                <Button 
                    button = {{
                        textContent: "Default", 
                        elementExample: "<Button disableShadow/>",
                        nameClass: 'button disableShadow',
                    }}/>
                    <Button 
                    button = {{
                        textContent: "Default", 
                        elementExample: "<Button disable/>",
                        nameClass: 'button disable',
                    }}/>
                    <Button 
                    button = {{
                        textContent: "Default", 
                        elementExample: "<Button variant='text' disable/>",
                        nameClass: 'button textDisable',
                    }}/>
            </div>
            <div className="third-components">
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button startIcon='Local_grocery_store'/>",
                    nameClass: 'button icon iconStart',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button endIcon='Local_grocery_store'/>",
                    nameClass: 'button icon iconEnd',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button />",
                    nameClass: 'button',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button />",
                    nameClass: 'button',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button />",
                    nameClass: 'button',
                }}/>
            </div>
            
        </div>
        )
}

export default App