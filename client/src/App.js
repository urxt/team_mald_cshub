import logo from './logo.svg';
import './App.css';

function App() {
  const element = <h1>Meetup App</h1>;
  var user1 = new User("John", 20, "Male", "john@john.com")
  return (
    // <div className="App">
      // <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
          // Meetup App
        // </p>
      // </header>
    // </div>
    user1.toString()
  );
}

function User (name, age, gender, email) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = email;
}

User.prototype.toString = function UserToString() {
  return `Name: ${this.name}\n Age: ${this.age}\n Email: ${this.email}\n Gender: ${this.gender}`;
}

export default App;
