import React from 'react'

class Dropdown extends React.Component {
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
    
      render() {
        return (
            <div  className="dropdown">
              <div className="button" onClick={this.showDropdownMenu}>Menu</div>
      
                { this.state.displayMenu ? 
                (
                  <ul className="drop-ul">
                    <li className="drop-li"><a className="active" href="#Create Page">Home</a></li>
                    <li className="drop-li"><a href="#Manage Pages">Projects</a></li>
                    <li className="drop-li"><a href="#Create Ads">About</a></li> 
                  </ul>
                ):
                (
                  null
                )
              }
              
            </div>
        );
      }
    }

export default Dropdown