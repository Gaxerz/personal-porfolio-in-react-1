import React from 'react';
import { experienceData } from '../../Data/data';
import Title from '../Layouts/Title';

import './experience.css';

const index = () => {
    return (
        <section id='Experience'>
            <div className='experience-area'>
                <Title title='Experience' />
                <div className='item-list'>
                    {experienceData.map((data, index) => (
                        <div key={index}>
                            <div className='experience-container'>
                                <div className='left-side'>
                                    <div className='logo'>
                                        <img src={data.comapnyLogo} alt='' height='100px' width='100px' />
                                    </div>
                                    <p className='company-name'>{data.companyName}</p>
                                    <p>{data.Years}</p>
                                    <p>{data.time}</p>
                                </div>
                                <div className='right-side'>
                                    <div className='job-title'>{data.jobTitle}</div>
                                    <div className='job-description'>{data.jobDescription}</div>
                                    <div className='resp-title'>Responsiblities</div>
                                    <div className='res'>
                                        <ol>
                                            {data.jobResposiblities.map((item, indx) => (
                                                <li key={indx}>
                                                    {item.text}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default index