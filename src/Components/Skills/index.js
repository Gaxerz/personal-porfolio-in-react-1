import React from 'react';

import ProgressBar from '../Layouts/ProgressBar';
import Title from '../Layouts/Title';

import { skillsData } from '../../Data/data';

import './skills.css';


const Skills = () => {

    return (
        <section id='Skills' >
            <div className='skills-area'>
                <Title title='Skills' />
                <div className='item-list'>
                    {skillsData.map((data, index) => (
                        <div key={index}>
                            <div className='skills-container'>
                                <ProgressBar done={data.percentage} name={data.name} src={data.src} color={data.color} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;