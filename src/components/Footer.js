import React from 'react'

const styling = {
    fontSize : '.6rem',
    paddingBottom : '10px'
}

function Footer(){
    return(
        <footer className="container">
            <ul className="nav mx-auto">
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="https://www.youtube.com/channel/UCMgJbl3avHgNhINskGxynEA?view_as=subscriber" target="_blank" rel="noopener noreferrer"><img src="icons/youtube.png" alt="YT"/></a>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="https://web.telegram.org/#/im?p=@tbm5k" target="_blank" rel="noopener noreferrer"><img src="icons/telegram.png" alt="TL"/></a>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="https://twitter.com/tbm5k" target="_blank" rel="noopener noreferrer"><img src="icons/twitter.png" alt="TW"/></a>
                </li>
            </ul>
            <div style={styling}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br></br>&copy;tbm5k</div>
        </footer>
    );
}

export default Footer