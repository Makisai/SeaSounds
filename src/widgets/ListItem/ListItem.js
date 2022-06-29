import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SoundWave } from "react-bootstrap-icons";
import { MusicNoteList , HourglassSplit, Soundwave} from "react-bootstrap-icons";
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

/*function MyVerticallyCenteredModal(props) {
  const playSound = () => {
    console.log(props)
    props.socket.emit("add_to_queue",localStorage.getItem('userId'), props.soundName)
    props.socket.on("position", (position) => {
      console.log(position)
    });
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
*/
//Unterschiedliche Buttons, aber keine Funktionalität mit dem Websocket
function MyVerticallyCenteredModal(props) {
  const [playButton, setPlayButton] = React.useState(true);
  const [waitButton, setWaitButton] = React.useState(false);
  const [soundButton, setSoundButton] = React.useState(false);
  
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
      { playButton ? <PlayButton setPlayButton={setPlayButton} setWaitButton={setWaitButton} socket={props.socket} soundName={props.soundName}/>: null }
      { waitButton ? <WaitButton socket={props.socket} />: null }
      { soundButton ? <SoundButton />: null }
        <hr></hr>
        <p>{props.infoText}</p>
      </Modal.Body>
    </Modal>
  );
}

function PlayButton(props) {
  const playSound = () => {
    console.log(props)
    props.setWaitButton(true)
    props.setPlayButton(false)
    props.socket.emit("add_to_queue",localStorage.getItem('userId'), props.soundName)
  };
  return(
        <div class="play-container" {...props}>
          <div class="play-button" onClick={playSound}>
            <MusicNoteList color="white" size={50} />
          </div>
          <p class="play-text">Sound abspielen</p>
        </div>
  )
}

function WaitButton(props) {
  return(
  <div class="play-container" {...props}>
    <div class="play-button">
      <HourglassSplit color="white" size={50} />
    </div>
      <p class="play-text">Dein Sound wurde in die Warteschlange eingereiht</p>
    </div>
  )
}

function SoundButton(props) {
  return(
<div class="play-container" {...props}>
          <div class="play-button">
            <Soundwave color="white" size={50} />
          </div>
          <p class="play-text">Dein Sound läuft gerade</p>
        </div>
  )
}

export default ListItem;
