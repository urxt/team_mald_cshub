import './App.css';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import EventPage from './Pages/EventPage';
import EventSidebar from './Components/EventSidebar';
import CreateEvent from './Pages/CreateEvent';


function App(){
  return (
    <div className="App">
      <EventSidebar></EventSidebar>
      <EventPage></EventPage>
      {/* <CreateEvent></CreateEvent> */}
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function User (name, age, gender, email) {
  this.age = age;
  this.gender = gender;
  this.email = email;
  return this.name;
}

User.prototype.toString = function UserToString() {
  return `Name: ${this.name}\n Age: ${this.age}\n Email: ${this.email}\n Gender: ${this.gender}`;
}

export default App;
