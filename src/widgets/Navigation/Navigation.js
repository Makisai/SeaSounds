import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav'

import './Navigation.css';

const Navigation = () => (
    <Nav class="navigation" >
        <Nav.Item>
            <img className="logo-image" src="/images/logo.png" />
        </Nav.Item>     
        <Nav.Item>
            <Nav.Link className="nav-text">Sea Sounds</Nav.Link>
        </Nav.Item>
</Nav>
);

export default Navigation;


