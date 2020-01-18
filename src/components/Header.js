import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Dropdown from './Dropdown'

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-light d-flex bd-highlight">
                    <span className="navbar-brand mb-0 h1 p-2 flex-fill bd-highlight" style={{textAlign:'left'}}><a href="#" style={{color:'inherit', textDecoration:'none'}}>Teddy Mbugua</a></span>
                    
                    <Router forceRefresh={true}>
                        <ul className="nav flex-fill bd-highlight header-nav">
                            <li className="nav-item font-weight-bold px-1">
                                <Link className="li" to="/">Home</Link>
                            </li>
                            <li className="nav-item font-weight-bold px-1">
                                <Link className="li" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item font-weight-bold px-1">
                                <Link className="li" to="/about">About</Link>
                            </li>
                        </ul>    
                    </Router>
                    
                    <Dropdown/>
                </nav>
            </header>
        );
    }
}

export default Header