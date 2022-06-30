import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



import './Navigation.css';

const Navigation = () => (
    <Navbar className="navigation" fixed ="top">
        <Container>
            <Navbar.Brand className='nav-text'>
        <img className="logo-image" src="/images/logo.png" alt="Logo" />
        {''} 
      Sea Sounds
      </Navbar.Brand>
        </Container>
    </Navbar>
);

export default Navigation;


