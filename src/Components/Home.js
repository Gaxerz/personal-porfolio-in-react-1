import React from 'react';
import About from './About'
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {

    return (
        <div className='home-container'>

            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;