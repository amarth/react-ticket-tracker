import React, { Component } from 'react';

import Grid from './components/grid/Grid'
import ControlPanel from './components/controlPanel/ControlPanel'

import './App.css';

class App extends Component {
  render() {
    return (<div className='app'>
      <Grid />
      <ControlPanel />
    </div>);
  }
}

export default App;