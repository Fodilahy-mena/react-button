import React from 'react'
import Button from './Button'

function App() {
    
    return (
        <div>
            <h1>Buttons</h1>
            <div className="first-components">
                <Button
                    textContent= "Default" 
                    elementExample= "<Button &:hover, &:focus/>"
                    hoverDefault= 'hover'
                />
                <Button
                    textContent= "Default" 
                    elementExample= "<Button &:hover, &:focus/>"
                    variant= 'outline'
                />
                <Button
                    textContent= "Default" 
                    elementExample= "<Button &:hover, &:focus/>"
                    variant= 'text'
                />
            </div>
            <div className="second-components">
                <Button 
                        textContent= "Default" 
                        elementExample= "<Button disableShadow/>"
                        disableShadow
                    />
                    <Button 
                        textContent= "Disabled" 
                        elementExample= "<Button disable/>"
                        disable
                    />
                    <Button 
                        textContent= "Disabled" 
                        elementExample= "<Button variant='text' disable/>"
                        variant= 'text'
                        disable
                    />
            </div>
            <div className="third-components">
                <Button
                    textContent= "Default" 
                    elementExample= "<Button startIcon='Local_grocery_store'/>"
                    startIcon
                />
                <Button
                    textContent= "Default" 
                    elementExample= "<Button endIcon='Local_grocery_store'/>"
                    endIcon
                />
            </div>
            <div className="fourth-components">
                <Button 
                        textContent= "Default" 
                        elementExample= "<Button size='sm'/>"
                        size='sm'
                    />
                    <Button 
                        textContent= "Default" 
                        elementExample= "<Button size='md'/>"
                        size='md'
                    />
                    <Button 
                        textContent= "Default" 
                        elementExample= "<Button size='lg'/>"
                        size='lg'
                    />
                </div>
                <div className="fifth-components">
                <Button 
                        textContent= "Default" 
                        elementExample= "<Button &:hover, &:focus/>"
                        color='default'
                    />
                    <Button 
                        textContent= "Default" 
                        elementExample= "<Button &:hover, &:focus/>"
                        color='primary'
                    />
                    <Button 
                        textContent= "Secondary" 
                        elementExample= "<Button &:hover, &:focus/>"
                        color='secondary'
                    />
                    <Button 
                        textContent= "Danger" 
                        elementExample= "<Button &:hover, &:focus/>"
                        color='danger'
                    />
                </div>
        </div>
        )
}

export default App