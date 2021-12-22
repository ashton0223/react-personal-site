import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js'
import Quotes from './Quotes.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
