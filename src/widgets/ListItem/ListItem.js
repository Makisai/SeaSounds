import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SoundWave } from "react-bootstrap-icons";
import { MusicNoteList } from "react-bootstrap-icons";
import { io } from "socket.io-client";
import "./ListItem.css";

const ListItem = (props) => {
  useEffect(() => {
      console.log("ListItem",props.socket);
  },[])
  const [modalShow, setModalShow] = React.useState(false);
  

  return (
    <>
      <div>
        <ListGroup.Item className="list-item">
          <img
            onClick={() => setModalShow(true)}
            src={"/images/" + props.data.imagePath}
            style={{
              marginLeft: props.data.marginLeft,
              width: props.data.width,
            }}
          />
        </ListGroup.Item>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={props.data.name}
        infoText={props.data.infoText}
        soundName={props.data.soundName}
        socket={props.socket}
      />
    </>
  );
}

export default ListItem;

function MyVerticallyCenteredModal(props) {
  const playSound = () => {
    console.log(props)
    props.socket.emit("add_to_queue",localStorage.getItem('userId'), props.soundName)
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="play-container">
          <div class="play-button" onClick={playSound}>
            <MusicNoteList color="white" size={50} />
          </div>
          <p class="play-text">Sound abspielen</p>
        </div>
        <hr></hr>
        <p>{props.infoText}</p>
      </Modal.Body>
    </Modal>
  );
}
