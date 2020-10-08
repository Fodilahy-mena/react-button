import React from 'react'
import Button from './Button'

function App() {
    // const DefaultStyle = {
    //     background: '#E0E0E0',
    //     boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
    //     borderRadius: '6px',
    //     width: '81px',
    //     height: '36px',
    //     border: '0',
    
    // }
    return (
        <div>
            <h1>Buttons</h1>
            <div>
                <Button 
                button = {{
                    textContent: "Default", 
                    elementExample: "<Button />",
                    name: 'button',
                }}/>
                <Button 
                button = {{
                    textContent: "Default", 
                }}/>
            </div>
            
        </div>
        )
}

export default App