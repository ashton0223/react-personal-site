import './Navbar.css';
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
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
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
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
    )
}

function Neither() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/quotes">Quotes</Link>
        </>
    );
}

export default Navbar;