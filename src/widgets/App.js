import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import backGround1 from "../assets/backGround-1.svg";
import backGround2 from "../assets/backGround-2.svg";
import Navigation from "./Navigation/Navigation";
import EntityList from "./EntityList/EntityList";
import { io } from "socket.io-client";

import "./App.css";
import { createRenderer } from "react-dom/test-utils";

const socket = io("ws://localhost:4000");

socket.on("session", ({ sessionID, userID }) => {
  socket.auth = { sessionID };
  localStorage.setItem("sessionID", sessionID);
  socket.userID = userID;
});

const App = () => {
  useEffect(() => {
    console.log("hello")

    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }
  }, []);

  return (
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
          <EntityList socket= {socket}/>
        </Container>
      </Container>
    </div>
  );
};

export default App;
