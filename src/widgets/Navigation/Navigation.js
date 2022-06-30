import React from 'react';
import Nav from 'react-bootstrap/Nav'

import './Navigation.css';

const Navigation = () => (
    <Nav className="navigation" >
        <Nav.Item>
            <img className="logo-image" src="/images/logo.png" alt="Logo" />
        </Nav.Item>     
        <Nav.Item>
            <Nav.Link className="nav-text">Sea Sounds</Nav.Link>
        </Nav.Item>
</Nav>
);

export default Navigation;


