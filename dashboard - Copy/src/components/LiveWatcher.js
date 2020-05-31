import socketIOClient from "socket.io-client";
import React, { Component } from "react";

/* eslint-disable no-undef */
var peerConnection = "";
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};
const socket = socketIOClient('http://localhost:5000/');

class LiveWatcher extends Component {
    /* Creating a Socket client and exporting it at the end to be used across the Place Order, Kitchen, etc components*/
    constructor() {
        super();
        this.videoElement = '';
    }
    componentDidMount() {
      this.videoElement = document.querySelector("video");
      socket.on("offer", (id, description) => {
        peerConnection = new RTCPeerConnection(config);
        peerConnection
          .setRemoteDescription(description)
          .then(() => peerConnection.createAnswer())
          .then(sdp => peerConnection.setLocalDescription(sdp))
          .then(() => {
            socket.emit("answer", id, peerConnection.localDescription);
          });
        peerConnection.ontrack = event => {
          this.videoElement.srcObject = event.streams[0];
        };
        peerConnection.onicecandidate = event => {
          if (event.candidate) {
            socket.emit("candidate", id, event.candidate);
          }
        };
      });

      socket.on("candidate", (id, candidate) => {
        peerConnection
          .addIceCandidate(new RTCIceCandidate(candidate))
          .catch(e => console.error(e));
      });
      
      socket.on("connect", () => {
        socket.emit("watcher");
      });
      
      socket.on("broadcaster", () => {
        socket.emit("watcher");
      });
      
      socket.on("disconnectPeer", () => {
        peerConnection.close();
      });
    }
    componentWillUnmount(){
      socket.close();
    }

    render() {
      return(
        <>

          <video playsInline autoPlay muted></video>
        </>
      )
    }
}
export default LiveWatcher;