import './css/Navbar.css';
import { logout } from './firebase';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/*" element={<Neither />} />
                    </Routes>
                </div>
                <div className="navbar-right">
                    <a href="https://open.spotify.com/user/aasouth223">Spotify</a>
                    <a href="https://github.com/ashton0223/">Github</a>
                    <LoginControl loggedIn={this.props.loggedIn} />
                </div>
            </div>
        );
    }
}

function Home() {
    return (
        <>
            <Link to="/" className="active">Home</Link>  
            <Link to="/quotes">Quotes</Link>
        </>
    );
}

function Quotes() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/quotes" className="active">Quotes</Link>
        </>
    );
}

function Neither() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/quotes">Quotes</Link>
        </>
    );
}

function logoutLogic() {
    logout().then(() => {
        return true;
    }).catch((error) => {
        return false;
    });
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const loggedIn = this.props.loggedIn;
        let button;
        if (loggedIn === 'true') {
            button = <LoggedIn />;
        } else {
            button = <LoggedOut />;
        };
        return (
            <div loggedin={loggedIn}>{button}</div>
        );
    }
}

function LoggedOut() {
    return (
        <Link to="/login">Log In</Link>
    );
}

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.LoginChange = this.LoginChange.bind(this);
    }

    LoginChange() {
        logoutLogic();
        this.props.onLoginChange();
    }

    render() {
        return (
            <a href="" onClick={this.LoginChange}>Log Out</a>
        );
    }
}

export default Navbar;