import React from 'react'

const styling= {
    fontFamily : 'Caveat',
    fontWeight:'bold',
    fontSize: '30px',
    paddingTop:'15%'
}

function Home(){
    return(
        <p className="container">
                <img className="img" src="images/ktlpic_3 - Copy-min.jpg" alt="icon"/>
                <p style={styling}>Hi, I make websites and webapps</p>
                {console.log('changed to Home page')}
        </p>
    );
}

export default Home