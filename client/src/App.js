import './App.css';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import EventPage from './Pages/EventPage';
import EventSidebar from './Components/EventSidebar';
import ProfilePage from './Pages/ProfilePage';
import CreateEvent from './Pages/CreateEvent';

function App(){
  return (
    <div className="App">
      <ProfilePage></ProfilePage>
      {/* <EventSidebar className="sidebar"></EventSidebar>
      <EventPage></EventPage> */}
      {/* <CreateEvent></CreateEvent> */}
    </div>
  );
}

function MapButton() {
  return (
    <button>Generate Map</button>
  );
}

const user = {
  name: 'John Jones',
  email: "john@jones.com",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
  imageSize: 90,
};

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

User.prototype.toString = function UserToString() {
  return `Name: ${this.name}\n Age: ${this.age}\n Email: ${this.email}\n Gender: ${this.gender}`;
}

export default App;
