import React from 'react';
import Home from './Home'
import Projects from './Projects';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Main(){
    return (
        <main className="container main-container">
          <div className="child-container">
              <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </Switch>     
              </Router>
          </div>
        </main>
    );
}

export default Main