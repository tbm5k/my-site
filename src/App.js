import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Dropdown from './components/Dropdown';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }

  render (){
    return (
      <div className="App">
        <Router>
        <header>
          <nav className="navbar navbar-light d-flex bd-highlight">
              <span className="navbar-brand mb-0 h1 p-2 flex-fill bd-highlight" style={{textAlign:'left'}}>Teddy Mbugua</span>
              {
                /*
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
              */
              }
              <div  className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}>Menu</div>
        
                  { this.state.displayMenu ? 
                  (
                    
                      <ul className="drop-ul">
                        <li className="drop-li">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="drop-li">
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li className="drop-li">
                          <Link to="/contact">Contact</Link>
                        </li> 
                      </ul>
                    
                  ):
                  (
                    null
                  )
                }
                
              </div>
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
}

export default App;
