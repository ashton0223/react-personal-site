import './Navbar.css';
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div class="navbar">
            <div class="navbar-left">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quotes" element={<Quotes />} />
                </Routes>
            </div>
            <div class="navbar-right">
                <a href="https://open.spotify.com/user/aasouth223">Spotify</a>
                <a href="https://github.com/ashton0223/">Github</a>
            </div>
        </div>
    );
}

function Home() {
    return (
        <>
            <Link to="/" class="active">Home</Link>  
            <Link to="/quotes">Quotes</Link>
        </>
    );
}

function Quotes() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/quotes" class="active">Quotes</Link>
        </>
    )
}

export default Navbar;