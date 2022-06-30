import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from '../ListItem/ListItem';
import entityContent from '../../content/entityContent.json';

import './EntityList.css';

const EntityList = (props) => {

    return <div>
        <div className="m-5"></div>    
        <ListGroup>
            <ListItem data={entityContent.Ship} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.RossRobbe} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.Haddock} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.Weißseitendelfin} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.Orca} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.Pottwal} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.HertzWal} socket={props.socket} position={props.position}/>
            <ListItem data={entityContent.Bloop} socket={props.socket} position={props.position}/> 
            <ListItem data={entityContent.Upsweep} socket={props.socket} position={props.position}/>   
            <ListItem data={entityContent.Whistle} socket={props.socket} position={props.position}/> 
        </ListGroup>
    </div>;
    
};

export default EntityList;


