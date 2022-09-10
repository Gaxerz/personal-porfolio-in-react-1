import React from 'react';
import ProjectContainer from '../Layouts/ProjectContainer';
import Title from '../Layouts/Title';

import { projectsData } from '../../Data/data';

import './project.css';

const Project = () => {
    return (
        <section id='Projects'>
            <div className='projects-area'>
                <Title title='Projects' />
                <div className='projects-body'>
                    {
                        projectsData.map((data, index) => (
                            <div key={index}>
                                <ProjectContainer name={data.name} src={data.src} description={data.description} tools={data.tools} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Project;