import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ListItem from '../ListItem/ListItem';
import entityContent from '../../content/entityContent.json';

import './EntityList.css';

const EntityList = () => (
    <div>
        <div class="m-5"></div>    
        <ListGroup>
            <ListItem data={entityContent.Ship} />
            <ListItem data={entityContent.RossRobbe} />
            <ListItem data={entityContent.Haddock} />
            <ListItem data={entityContent.Weißseitendelfin} />
            <ListItem data={entityContent.Orca} />
            <ListItem data={entityContent.Pottwal} />
            <ListItem data={entityContent.HertzWal} />
            <ListItem data={entityContent.Bloop} /> 
            <ListItem data={entityContent.Upsweep} />   
            <ListItem data={entityContent.Whistle} /> 
        </ListGroup>
    </div>
    
);

export default EntityList;


