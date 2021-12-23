import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.js';
import React from 'react';

function login(calback) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
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
    }

    render() {
        return (
            <div className="Login">
                <div>
                    <input type="text" id="email" />
                    <input type="password" id="password" />
                    <button onClick={login}>Login</button>
                </div>
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    } 
}

export default Login;