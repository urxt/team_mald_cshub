import './App.css';

import React, { Component, useState } from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD

import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";


function App(){
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>

=======
import EventPage from './Pages/EventPage';
import EventSidebar from './Components/EventSidebar';
import CreateEvent from './Pages/CreateEvent';

const user = {
  name: 'John Jones',
  email: "john@jones.com",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
  imageSize: 90,
};

export default function App(){
    /*
    <div className="App">
      <EventSidebar className="sidebar"></EventSidebar>
      <EventPage></EventPage>
>>>>>>> 9f1b80111b2daa4093b26f5918d70a395023494d
      {/* <CreateEvent></CreateEvent> */}
    </div>
    */
   return (
    <div>
      <h1>MeetYU</h1>
      <MapButton />
      <GenerateMap />
      <User />
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