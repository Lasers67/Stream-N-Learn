import socketIOClient from "socket.io-client";
import React, { Component } from "react";

/* eslint-disable no-undef */
const peerConnections = {};
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};
const socket = socketIOClient('http://localhost:5000/');

class LiveStream extends Component {
    /* Creating a Socket client and exporting it at the end to be used across the Place Order, Kitchen, etc components*/
    constructor() {
        super();
        this.videoElement = '';
      this.audioSelect = '';
      this.videoSelect = '';
      this.gotDevices = this.gotDevices.bind(this);
      this.getStream = this.getStream.bind(this);
      this.gotStream = this.gotStream.bind(this);
    }
    
    getDevices() {
      return navigator.mediaDevices.enumerateDevices();
    }
    
    gotDevices(deviceInfos) {
      window.deviceInfos = deviceInfos;
      for (const deviceInfo of deviceInfos) {
        const option = document.createElement("option");
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === "audioinput") {
          option.text = deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
          this.audioSelect.appendChild(option);
        } else if (deviceInfo.kind === "videoinput") {
          option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
          this.videoSelect.appendChild(option);
        }
      }
    }
    getStream() {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
      const audioSource = this.audioSelect.value;
      const videoSource = this.videoSelect.value;
      const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
      };
      return navigator.mediaDevices
        .getUserMedia(constraints)
        .then(this.gotStream)
        .catch(this.handleError);
    }
    
    gotStream(stream) {
      window.stream = stream;
      this.audioSelect.selectedIndex = [...this.audioSelect.options].findIndex(
        option => option.text === stream.getAudioTracks()[0].label
      );
      this.videoSelect.selectedIndex = [...this.videoSelect.options].findIndex(
        option => option.text === stream.getVideoTracks()[0].label
      );
      this.videoElement.srcObject = stream;
      socket.emit("broadcaster");
    }
    
    handleError(error) {
      console.error("Error: ", error);
    }
    componentDidMount() {
      this.videoElement = document.querySelector("video");
      this.audioSelect = document.querySelector("select#audioSource");
      this.videoSelect = document.querySelector("select#videoSource");
      socket.on("answer", (id, description) => {
        peerConnections[id].setRemoteDescription(description);
      });
      socket.on("candidate", (id, candidate) => {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });
      
      socket.on("disconnectPeer", id => {
        peerConnections[id].close();
        delete peerConnections[id];
      });

      this.audioSelect.onchange = this.getStream;
      this.videoSelect.onchange = this.getStream;

      this.getStream()
        .then(this.getDevices)
        .then(this.gotDevices);
    }
    componentWillUnmount(){
      socket.close();
    }

    render() {
      return(
        <>
          <section class="select">
            <label for="audioSource">Audio source: </label>
            <select id="audioSource"></select>
          </section>

          <section class="select">
            <label for="videoSource">Video source: </label>
            <select id="videoSource"></select>
          </section>

          <video playsinline autoplay muted></video>
        </>
      )
    }
}
export default LiveStream;