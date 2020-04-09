import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <nav className="navbar navbar-light d-flex bd-highlight">
          <span className="navbar-brand mb-0 h1 p-2 flex-fill bd-highlight" style={{textAlign:'left'}}>Teddy Mbugua</span>

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

          <Dropdown/>
        </nav>
      </header>
      <main className="container main-container">
          <div className="child-container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>   
          </div>
      </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
