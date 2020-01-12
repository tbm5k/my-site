import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'

function Main(){
    return(
        <main className="container main-container">
            <div className="child-container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </div>
        </main>
    );
}

export default Main