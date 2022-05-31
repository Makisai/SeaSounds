import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

import './ListItem.css';



const ListItem = (props) => (
    <div>
        <ListGroup.Item className="list-item">
            <img src={'/images/' + props.data.imagePath} style={{ marginLeft: props.data.marginLeft, width: props.data.width }} onClick={showAlert}/>
                 <Alert class="alert" variant="info" id={props.data.name}>
                <Alert.Heading>{props.data.name}</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        {props.data.infoText}
                    </p>
                </Alert>
        </ListGroup.Item>
    </div>
    
    
);

export default ListItem;

function showAlert() {
    alert("popup")
    document.getElementById("test").style.display = "block";

}


