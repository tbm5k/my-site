import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light d-flex bd-highlight">
          <span className="navbar-brand mb-0 h1 p-2 flex-fill bd-highlight" style={{textAlign:'left'}}>Teddy Mbugua</span>
          <Router forceRefresh={true}>
            <ul className="nav flex-fill bd-highlight header-nav">
              <li className="nav-item font-weight-bold px-1">
                <Link className="li" to="/">Home</Link>
              </li>
              <li className="nav-item font-weight-bold px-1">
                <Link className="li" to="/projects">Projects</Link>
              </li>
              <li className="nav-item font-weight-bold px-1">
                <Link className="li" to="/contact">Contact</Link>
              </li>
            </ul>
          </Router>
          <Dropdown/>
        </nav>
      </header>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
