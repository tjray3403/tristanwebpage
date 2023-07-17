import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import backgroundvideo from '../videos/video_tristan.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
        <video autoPlay loop muted id='video'>
        <source src={backgroundvideo} type='video/mp4'/> </video>
        <h1>Tristan Ray</h1>
        
        <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Portfolio
        </Button>
            </div>
        </div>
    )
}

export default HeroSection