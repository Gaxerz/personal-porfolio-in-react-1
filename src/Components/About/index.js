import React from 'react';

import Certificates from '../Layouts/Certificates'
import { aboutData, certificatesData } from '../../Data/data';
import Title from '../Layouts/Title';

import './about.css';


const about = () => {
    return (
        <section id='About'>
            <div className='about-container'>
                <div className='left-section'>
                    <img src='./images/about.gif' alt='' />
                </div>
                <div className='right-section'>
                    <Title title='About Us' />
                    <div className='about-body'>{aboutData.description}</div>
                    <div className='details-section grid grid-cols-2 gap-4 mt-5'>
                        <div>Name: <span>{aboutData.name}</span></div>
                        <div>Age: <span>{aboutData.age}</span></div>
                        <div>Degree: <span>{aboutData.degree}</span></div>
                        <div>Experience: <span>{aboutData.experience}</span></div>
                        <div>Phone: <span>{aboutData.phone}</span></div>
                        <div>Email: <span>{aboutData.email}</span></div>
                    </div>
                    <div className='certifications'>
                        <p className='title'>Certificates</p>
                        <div className='certification-images mb-0'>
                            {
                                certificatesData.map((data, index) => (
                                    <div key={index}>
                                        <Certificates name={data.name} src={data.src} height={data.height} width={data.width} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div >
        </section>
    );
};

export default about;