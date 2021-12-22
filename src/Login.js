import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.js';
import React from 'react';

function login(callback) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Logged in!');
        callback();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginChangea = this.onLoginChangea.bind(this);
    }

    onLoginChangea() {
        this.props.onLoginChange();
    }

    render() {
        return (
            <div className="Login">
                <div>
                    <input type="text" id="email" />
                    <input type="password" id="password" />
                    <button onClick={() => {
                        login(this.onLoginChangea());
                    }}>Login</button>
                </div>
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    } 
}

export default Login;