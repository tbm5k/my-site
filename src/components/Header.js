import React from 'react'
import Dropdown from './Dropdown';

function Header(){
    return(
        <header>
        <nav className="navbar navbar-light d-flex bd-highlight">
            <span className="navbar-brand mb-0 h1 p-2 flex-fill bd-highlight" style={{textAlign:'left'}}>Teddy Mbugua</span>
            <Dropdown/>
        </nav>
      </header>
    );
}

export default Header