import './Navbar.css';

function Navbar() {
    return (
        <div class="navbar">
            <div class="navbar-left">
                <a href="/">Home</a>
                <a href="/quotes">Quotes</a>
            </div>
            <div class="navbar-right">
                <a href="https://open.spotify.com/user/aasouth223">Spotify</a>
                <a href="https://github.com/ashton0223/">Github</a>
            </div>
        </div>
    );
}

export default Navbar;