// import React from 'react'
// import {BrowserRouter as Router, Link} from 'react-router-dom'

// class Dropdown extends React.Component {
//     constructor(){
//      super();
    
//      this.state = {
//            displayMenu: false,
//          };
    
//       this.showDropdownMenu = this.showDropdownMenu.bind(this);
//       this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
//     };
    
//     showDropdownMenu(event) {
//         event.preventDefault();
//         this.setState({ displayMenu: true }, () => {
//         document.addEventListener('click', this.hideDropdownMenu);
//         });
//       }
    
//       hideDropdownMenu() {
//         this.setState({ displayMenu: false }, () => {
//           document.removeEventListener('click', this.hideDropdownMenu);
//         });
    
//       }
    
//       render() {
//         return (
//             <div  className="dropdown">
//               <div className="button" onClick={this.showDropdownMenu}>Menu</div>
      
//                 { this.state.displayMenu ? 
//                 (
//                   <Router forceRefresh={true}>
//                     <ul className="drop-ul">
//                       <li className="drop-li">
//                         <Link to="/">Home</Link>
//                       </li>
//                       <li className="drop-li">
//                         <Link to="/projects">Projects</Link>
//                       </li>
//                       <li className="drop-li">
//                         <Link to="/contact">Contact</Link>
//                       </li> 
//                     </ul>
//                   </Router>
//                 ):
//                 (
//                   null
//                 )
//               }
              
//             </div>
//         );
//       }
//     }

// export default Dropdown;