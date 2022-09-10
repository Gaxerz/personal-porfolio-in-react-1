import React from 'react';
import './certificates.css';

const Certificates = ({ name, src, height, width }) => {
    return (
        <div className="tooltip mr-5" >
            <div className='certificate-image'>
                <img src={src} alt='' height={height} width={width} />
            </div>
            <span className="tooltiptext w-40">{name}</span>
        </div>
    );
};

export default Certificates;