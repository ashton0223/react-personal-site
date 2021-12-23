import Navbar from './Navbar.js';
import Home from './Home.js'
import Quotes from './Quotes.js';
import Signup from './Signup.js';
import Login from './Login.js';
import { auth } from './firebase';

import { Routes, Route } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ loggedIn: false });
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
    return (
      <div className="App">
        <header className="App-header">
          <Navbar loggedIn={loggedInVal.toString()} />
        </header>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
