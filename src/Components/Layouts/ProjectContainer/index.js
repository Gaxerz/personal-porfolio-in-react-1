import React from 'react';

import './project-container.css';

const ProjectContainer = ({ name, src, description, tools }) => {
    return (
        <div className='project-container'>
            <img src={src} alt='' />
            <div className='project-body'>
                <div className='project-name'>{name}</div>
                <div className='project-description'>
                    {description}
                </div>
            </div>

            <div className='project-Item-used'>
                {tools.map((data, index) => (
                    <div key={index}>
                        <img src={data.src} alt={data.name} height='20px' width='20px' />
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default ProjectContainer;