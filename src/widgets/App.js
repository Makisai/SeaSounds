import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import backGround1 from "../assets/backGround-1.svg";
import backGround2 from "../assets/backGround-2.svg";
import Navigation from "./Navigation/Navigation";
import EntityList from "./EntityList/EntityList";
import {socket} from "../socket";

import "./App.css";

const App = () => {
  const [waitingPosition, setWaitingPosition] = useState(0);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    socket.on("session", ({ sessionID, userID }) => {
      console.log('connected')
      socket.auth = { sessionID };
      localStorage.setItem("sessionID", sessionID);
      localStorage.setItem("userId", userID);
      socket.userID = userID;
    });

    socket.on("position", (initialPosition) => {
      setWaiting(false);
      setWaitingPosition(initialPosition);
      console.log("Position received ", waitingPosition);
    })

    socket.on("positionUpdate", async () => {
      console.log("UPDATE ANGEKOMMEN");
      setWaitingPosition(waitingPosition - 1);
      if(waitingPosition - 1 == 0) {
        setTimeout(() => setWaitingPosition(-1), 13000);
      }
    })

    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }

    return () => {
      socket.off("session");
      socket.off("position");
      socket.off("positionUpdate");
    };
  }, [waitingPosition, setWaitingPosition, waiting]);

 /* const getPosition = useSelector(state => state.position.value);
  const dispach = useDispatch();*/

  return (
    <div>
      <Navigation /> 
      <Container>
      <h1 style={{zIndex: 1000, position: 'absolute', left: '0px', right: '0px', color: 'black'}}>position: {!waiting ? waitingPosition : "wartet altuell nicht"}</h1>
      </Container>
      <Container className="background p-0">
        <div className="backGroundSVG">
          <img className="bg-1" src={backGround1} alt="Background 1" />
          <img className="bg-2" src={backGround2} alt="Background 2" />
        </div>
        <Container className="p-2 mb-4">
          <EntityList socket={socket} position={waitingPosition}/>
        </Container>
      </Container>
    </div>
  );
};

export default App;
