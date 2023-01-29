import './App.css';
import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import axios from "axios";

export default function App(){

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
                    if (response.data.error) {
                        alert(response.data.error);
                    } else {
                      //  sessionStorage.setItem("accessToken", response.data);
                
                        //navigate(-1);
                        console.log(response.data);
                       
                    }
            })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<ProfilePage/>} />
        </Routes>
      </Router>

          <Route path="/register" exact element={<Registration />} />
        </Routes>
      </Router>
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
