import React, { Component } from 'react';
import { spin, checkIfWinner } from './utils';
import PullButton from './PullButton/component';
import Reel from './Reel/component';
import PrizeArea from './PrizeArea/component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      spinResults: spin(),
      isWinner: false,
    };
    this.updateState = this.updateState.bind(this)
  }
  updateState() {
    const spinResults = spin();
    const isWinner = checkIfWinner(spinResults);
    
    this.setState({ spinResults, isWinner });
  }
  render() {
    const { spinResults, isWinner } = this.state;
    return (
      <div>
        <Reel spinResults={spinResults}/>
        <PullButton pullFunction={this.updateState}/>
        <PrizeArea isWinner={isWinner}/>
      </div>
    )
  }
}

export default App
