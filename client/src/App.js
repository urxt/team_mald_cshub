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
import { osm, vector } from "./Source";

export default function App(){
    /*
    <div className="App">
      <ProfilePage></ProfilePage>
      {/* <EventSidebar className="sidebar"></EventSidebar>
      <EventPage></EventPage> */}
      {/* <CreateEvent></CreateEvent> */}
      <EventSidebar className="sidebar"></EventSidebar>
      <EventPage></EventPage>
      { <CreateEvent></CreateEvent> }
    </div>
    */
   return (

    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>

    <div>
      <h1>MeetYU</h1>
      <MapButton />
      <GenerateMap />
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
