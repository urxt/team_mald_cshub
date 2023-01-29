import './App.css';
import React, { Component, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import EventPage from './Pages/EventPage';
import EventSidebar from './Components/EventSidebar';
import ProfilePage from './Pages/ProfilePage';
import CreateEvent from './Pages/CreateEvent';

const user = {
  name: 'John Jones',
  email: "john@jones.com",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
  imageSize: 90,
};

export default function App(){

   return (

    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<ProfilePage/>} />
        </Routes>
      </Router>

      <div>
        <h1>MeetYU</h1>
        <MapButton />
        <GenerateMap />
        <User />
      </div>
    </div>
   );
}

function MapButton() {
  return (
    <button>Generate Map</button>
  );
}

function GenerateMap() {
  return ( 
    <>
      <h3>York University Map (Keele Campus)</h3>
      <script>
      map = new OpenLayers.Map("demoMap");
      map.addLayer(new OpenLayers.Layers.OSM());
      map.zoomToMaxExtent();
      </script>
    </>
  );
}

function User() {
  return(
    <>
      <h4>Name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
