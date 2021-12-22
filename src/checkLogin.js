import { auth } from './firebase.js';

function checkLogin() {
    if (auth.currentUser !== null) {
        console.log(auth.currentUser);
        return true;
    }
    return false;
}

export default checkLogin;