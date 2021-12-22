import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js'
import Quotes from './Quotes.js';
import Signup from './Signup.js';
import Login from './Login.js';
import checkLogin from './checkLogin';
import { auth } from './firebase';

import { Routes, Route } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.state = ({ loggedIn: false });
  }

  handleLoginChange() {
    this.setState({ loggedIn: checkLogin() });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  render() {
    const loggedInVal = this.state.loggedIn;
    console.log(this.state.loggedIn);
    return (
      <div className="App">
        <header className="App-header">
          <Navbar loggedIn={loggedInVal.toString()} onLoginChange={this.handleLoginChange}/>
        </header>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLoginChange={this.handleLoginChange}/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
