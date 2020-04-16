import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Search from './Search';

class App extends Component {
  
    constructor(){
      super();
      this.state = {
        
      }
    }
    
  componentDidMount() {
  
  }
  
  
    render() {
        return (
          <div className="App">
            <h1>
              
              <span role="img" aria-label="magnifying glass emoji">🔎</span> Synologica <span role="img" aria-label="open book emoji">📖</span> 
            </h1>

            <Search />
          </div>
        );
    }
}

export default App;