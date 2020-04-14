import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
                  synologica the moon
              
            <Search />
            
            
            </div>
        );
    }
}

export default App;