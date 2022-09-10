import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navbarData } from '../../Data/data';
import { GiHamburgerMenu } from "react-icons/gi";

import Button from '../Layouts/Buttons';

import './navbar.css';


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-container shadow-lg '>
                <div className='mobile-div'>
                    <div className='logo '>
                        <Link to="Home" smooth={true} duration={1000}>
                            <img src={navbarData.logo} alt='' className='rounded-full' />
                        </Link>
                    </div>
                    <div className="hamburger-menu">
                        <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </div>
                    </div>
                </div>

                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu"
                }>
                    <ul>
                        {navbarData.ul.map((data, index) => (
                            <li key={index}><Link to={data.li} activeclassname="active" smooth={true} offset={data.offset} spy={true} duration={1000} >{data.li}</Link></li>
                        ))}
                    </ul>
                    <div className='button '>
                        <a href='' download><Button text='Resume' /></a>
                    </div>

                </div>



            </div >
        </div>
    );
};

export default Navbar;