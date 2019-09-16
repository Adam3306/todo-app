import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Main from "./components/MainComponent";

class App extends Component 
{
  render() 
  {
      return (
        <BrowserRouter>
          <Route exact path="/" component={Main}/>
        </BrowserRouter>
      );
  }
}

export default App;