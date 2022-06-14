import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import backGround1 from '../assets/backGround-1.svg';
import backGround2 from '../assets/backGround-2.svg';
import Navigation from './Navigation/Navigation';
import EntityList from './EntityList/EntityList';
import { v4 as uuidv4 } from 'uuid';



import './App.css';

var userId = localStorage.getItem('userId');
if (userId == null){
  localStorage.setItem('userId', uuidv4());
}

const App = () => (
  <div>
      <Navigation />
      <Container className="background p-0">
    <div className="backGroundSVG">
        <div className="backGroundSVG">
      <img src={backGround1} alt="Background 1" />
    </div>
      <img src={backGround2} alt="Background 2" />
    </div>
    <Container className="p-2 mb-4">
      <EntityList />
    </Container>
  </Container>
  </div>

);

export default App;
