import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { MusicNoteList , HourglassSplit, Soundwave} from "react-bootstrap-icons";
import "./ListItem.css";

const ListItem = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div>
        <ListGroup.Item className="list-item">
          <img
            alt="Button"
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
        infotext={props.data.infoText}
        soundname={props.data.soundName}
        socket={props.socket}
        position={props.position}
      />
    </>
  );
}

//Unterschiedliche Buttons, aber keine Funktionalität mit dem Websocket
function MyVerticallyCenteredModal(props) {
  const [playButton, setPlayButton] = React.useState(true);
  const [waitButton, setWaitButton] = React.useState(false);
  const [soundButton] = React.useState(false);
  const { socket, soundname, infotext, name, position } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      { position < 0 ? <PlayButton setplaybutton={setPlayButton} setwaitbutton={setWaitButton} socket={socket} soundname={soundname}/>: null }
      { position > 0 ? <WaitButton socket={props.socket} position={position}/>: null }
      { position == 0 ? <SoundButton />: null }
        <hr></hr>
        <p>{infotext}</p>
      </Modal.Body>
    </Modal>
  );
}

function PlayButton(props) {
  const {setplaybutton, setwaitbutton, socket, soundname} = props

  const playSound = () => {
    setwaitbutton(true)
    setplaybutton(false)
    socket.emit("add_to_queue",localStorage.getItem('userId'), soundname)
  };
  return(
        <div className="play-container">
          <div className="play-button" onClick={playSound}>
            <MusicNoteList color="white" size={50} />
          </div>
          <p className="play-text">Sound abspielen</p>
        </div>
  )
}

function WaitButton(props) {
  const {position} = props
  return(
  <div className="play-container" {...props}>
    <div className="play-button">
      <HourglassSplit color="white" size={50} />
    </div>
      <p className="play-text">Dein Sound ist an Platz {position} in der Warteschlange</p>
    </div>
  )
}

function SoundButton(props) {
  return(
<div className="play-container" {...props}>
          <div className="play-button">
            <Soundwave color="white" size={50} />
          </div>
          <p className="play-text">Dein Sound läuft gerade</p>
        </div>
  )
}

export default ListItem;
