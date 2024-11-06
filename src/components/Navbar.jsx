// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Glorilla Fan Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.instagram.com/glorillapimp/?hl=en" target="_blank">Instagram</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://en.wikipedia.org/wiki/GloRilla" target="_blank">Wikipedia</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.youtube.com/channel/UC9bZ9eWvF0eXVqrxK9ve7Nw" target="_blank">Youtube</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.glorillaofficial.com/#/" target="_blank">glorillaofficial</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/gloyaltygirl/" target="_blank">Facebook</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://open.spotify.com/artist/2qoQgPAilErOKCwE2Y8wOG" target="_blank">Spotify</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
