import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ListItem from '../ListItem/ListItem';
import entityContent from '../../content/entityContent.json';

import './EntityList.css';

const EntityList = (props) => {
    useEffect(() => {
        console.log("EnityList",props.socket);
    },[])

    return <div>
        <div class="m-5"></div>    
        <ListGroup>
            <ListItem data={entityContent.Ship} socket={props.socket}/>
            <ListItem data={entityContent.RossRobbe} socket={props.socket} />
            <ListItem data={entityContent.Haddock} socket={props.socket} />
            <ListItem data={entityContent.Weißseitendelfin} socket={props.socket} />
            <ListItem data={entityContent.Orca} socket={props.socket} />
            <ListItem data={entityContent.Pottwal} socket={props.socket} />
            <ListItem data={entityContent.HertzWal} socket={props.socket} />
            <ListItem data={entityContent.Bloop} socket={props.socket} /> 
            <ListItem data={entityContent.Upsweep} socket={props.socket} />   
            <ListItem data={entityContent.Whistle} socket={props.socket} /> 
        </ListGroup>
    </div>;
    
};

export default EntityList;


