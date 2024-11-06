// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <small>&copy; {new Date().getFullYear()} Glorilla Fan Page</small>
      </Container>
    </footer>
  );
}

export default Footer;
