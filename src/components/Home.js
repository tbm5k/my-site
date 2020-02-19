import React from 'react'

function Home(){
    return(
        <p className="container">
                <img className="img" src="images/pic.jpg" alt="icon"/>
                Hi, I make websites and webapps
                {console.log('changed to Home page')}
        </p>
    );
}

export default Home