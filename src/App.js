import React, { Component } from 'react';
import { spin, checkIfWinner } from './utils';
import PullButton from './PullButton/component';
import Reel from './Reel/component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reel: spin(),
      isWinner: false,
    };
    this.updateState = this.updateState.bind(this)
  }
  updateState() {
    const reel = spin();
    const isWinner = checkIfWinner(reel);
    
    this.setState({ reel, isWinner });
  }
  render() {
    // TODO rename as spinResults
    const { reel:spinResults } = this.state;
    return (
      <div>
        <Reel spinResults={spinResults}/>
        <PullButton pullFunction={this.updateState}/>
      </div>
    )
  }
}

export default App
