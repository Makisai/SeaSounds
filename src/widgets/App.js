import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import backGround1 from "../assets/backGround-1.svg";
import backGround2 from "../assets/backGround-2.svg";
import Navigation from "./Navigation/Navigation";
import EntityList from "./EntityList/EntityList";
import { io } from "socket.io-client";

import "./App.css";
import { createRenderer } from "react-dom/test-utils";

const App = () => {
  const [position, setPosition] = React.useState(3);
  const [waiting, setWaiting] = React.useState(false);
  const socket = io("ws://localhost:4000");
  

  useEffect(() => {
    socket.on("session", ({ sessionID, userID }) => {
      socket.auth = { sessionID };
      localStorage.setItem("sessionID", sessionID);
      socket.userID = userID;
    });

    socket.on("position", (initialPosition) => {
      setWaiting(false);
      setPosition(initialPosition);
      console.log("Position received ", position);
    })

    socket.on("positionUpdate", () => {
      console.log("UPDATE ANGEKOMMEN");
      console.log(position);
      setPosition(position - 2);
      console.log(position);
    })

    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }

    return () => {
      socket.off("position");
      socket.off("positionUpdate");
    };
  }, []);

 /* const getPosition = useSelector(state => state.position.value);
  const dispach = useDispatch();*/

  return (
    <div>
      <Navigation />
      <Container className="background p-0">
        <h1>position: {!waiting ? position : "wartet altuell nicht"}</h1>
        <div className="backGroundSVG">
            <img class="bg-1" src={backGround1} alt="Background 1" />
          <img class="bg-2" src={backGround2} alt="Background 2" />
        </div>
        <Container className="p-2 mb-4">
          <EntityList socket= {socket}/>
        </Container>
      </Container>
    </div>
  );
};

export default App;
