import React from 'react';
import './button.css'

const Button = ({ text }) => {
    return (
        <div className='button-container'>
            <button className='shadow-md'>{text}</button>
        </div>
    )
}

export default Button;