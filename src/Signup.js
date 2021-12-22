import { app } from './firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function signIn() {
    const auth = getAuth(app);
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Success!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('fail', errorCode, errorMessage);
            // ..
          });
}

function Signup() {
    return (
        <div className="signup-box">
            <input type="text" id="email" />
            <input type="password" id="password" />
            <button onClick={signIn}>Sign Up</button>
        </div>
    );
}

export default Signup;