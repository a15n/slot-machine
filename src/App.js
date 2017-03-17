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
    const { reel } = this.state;
    return (
      <div>
        <div>
          <Reel reel={reel}/>
        </div>
        <div>
          <PullButton pullFunction={this.updateState}/>
        </div>
      </div>
    )
  }
}

export default App
