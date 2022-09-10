import React, { useState } from 'react';

import { bannerData } from '../../Data/data';

import { useTypingText } from '../../Hooks/useTypingText';

import './banner.css'

const Banner = () => {
    const [typeStatus, setTypeStatus] = useState(true);
    const { word, stop, start } = useTypingText(
        bannerData.typingText,
        50,
        20
    );
    const handler = () => {
        if (typeStatus) {
            stop();
            setTypeStatus(false);
        } else {
            start();
            setTypeStatus(true);
        }

    }


    return (
        <section id='Home'>

            <div className='banner-container'>
                <div className='intro'>
                    <h3>{bannerData.name}</h3>

                    <h1 onClick={handler}>I am a {word}</h1>
                    <p>{bannerData.description}</p>
                    <div className='socials'>
                        {bannerData.socials.map((data, index) => (
                            <img src={data.src} alt='' height='50px' width='50px' className='rounded-full shadow-lg' key={index} />
                        ))}
                    </div>
                </div>
                <div className='profile'>
                    <img src={bannerData.profile} alt='' className='rounded-full shadow-lg' />
                </div>
            </div>
        </section>
    );
};

export default Banner;