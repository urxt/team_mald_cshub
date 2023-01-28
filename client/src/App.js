import './App.css';
import React, { Component } from 'react';

function App(){
  return (
    <div>
      <Welcome name="Daniel" />
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
