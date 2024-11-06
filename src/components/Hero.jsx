// src/components/Hero.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'; // Import the CSS file for styling

function Hero() {

  return (
    <div className="hero-image">
      <Container className="text-center text-white hero-content">
        <h1 className="display-4">Glorilla Fan Page</h1>
        <p className="lead">Your ultimate source for Glorilla's music and news.</p>       
      </Container>
    </div>
  );
}

export default Hero;
