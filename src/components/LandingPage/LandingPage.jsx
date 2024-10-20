import React from 'react';
import './LandingPage.css';
import { FaLongArrowAltRight } from "react-icons/fa"; // Import the arrow icon
import { Link } from 'react-router-dom'; // For routing between pages

import ContactForm from '../LandingPage/ContactForm';
import Insurance from './Insurance';
import Services from './Services';
import Offer from './Offer';
import AccordionProps from './AccordionProps';
import About from './About';
import Slider from './ImageSlider';

const Hero = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };


    return (
        <>
            <div className='hero'>
                <div className="hero-container">
                    <div className="content">
                        <h1>Renew Your Strength, Reclaim Your Life.</h1>
                        <p>
                            Medication-Assisted Inpatient & Outpatient Drug and Alcohol Addiction Treatment at our Los Angeles Rehab, serving the greater LA area.
                        </p>
                        <div className='hero-btn'>
                            <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                <button className='hero-btn1'>
                                    Inpatient <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                            <Link to="/outpatient-rehab" onClick={scrollToTop}>
                            <button className='hero-btn2'>
                                Outpatient <FaLongArrowAltRight className='hero-arrow' />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <About />
            <Slider />
            <Offer />
            <AccordionProps />
            <Insurance />
            <ContactForm />
        </>
    );
}

export default Hero;
