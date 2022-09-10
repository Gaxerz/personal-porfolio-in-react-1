import React from 'react';

import './title.css';

const Title = ({ title }) => {
    return (
        <div className='title-area'>
            <p>{title}</p>
        </div>
    );
};

export default Title;