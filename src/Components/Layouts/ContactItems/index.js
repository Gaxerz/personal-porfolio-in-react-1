import React from 'react';
import './contact-item.css';

const ContactItems = ({ src, name, text }) => {
    return (
        <div className='contactItem-area'>
            <div><img src={src} alt='' height='50px' width='50px' /></div>
            <div className='text'><p>{name}: <span> {text}</span></p></div>

        </div>
    );
};

export default ContactItems;