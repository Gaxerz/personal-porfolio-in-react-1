import React from 'react';
import { contactData } from '../../Data/data';
import ContactItems from '../Layouts/ContactItems';
import Title from '../Layouts/Title';

import './contact.css';

const Contact = () => {
    return (
        <section id='Contact'>
            <div className='contact-area'>
                <Title title='Get in touch' />
                <div className='contact-details'>
                    {
                        contactData.map((data, index) => (
                            <div key={index}>
                                <ContactItems name={data.name} text={data.text} src={data.src} />
                            </div>
                        ))
                    }
                </div>
                <div className='contact-form'>
                    <div className='left-section'>
                        <img src='./images/email.gif' alt='' height='400px' width='400px' />
                    </div>
                    <div className='right-section'>
                        <form action="https://formsubmit.co/hy106625@gmail.com" method="POST">
                            <input type='text' name='name' placeholder='Name' required />
                            <input type='email' name='email' placeholder='Email' required />
                            <textarea placeholder='Send a message' name='message' rows="7" cols='60' required />
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;