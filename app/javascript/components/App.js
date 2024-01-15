import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <Greeting/>
    );
  }
}

export default App;