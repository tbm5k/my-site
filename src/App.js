import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from "./components/Main";
import Header from "./components/Header";

class App extends React.Component {

  render (){
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
