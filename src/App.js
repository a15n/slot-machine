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
    // TODO rename updateState
    this.updateState = this.updateState.bind(this)
    this.updateIsWinner = this.updateIsWinner.bind(this)
  }
  updateState() {
    const spinResults = spin();
    
    this.setState({ spinResults });
  }
  updateIsWinner() {
    const isWinner = checkIfWinner(this.state.spinResults);
    
    // HACK HACK HACK
    // when calling setState({isWinner}) each component (Reel, PullButton, PrizeArea) will be rendered again
    // Gotta hack this with the DOM, which is SUPER HACKY, but hey!!! 
    
    const prizeAreaElement = document.querySelector('.PrizeArea');
    if (isWinner) {
      prizeAreaElement.innerHTML = 'WINNER'
      prizeAreaElement.classList.add('is-winner');  
    } else {
      prizeAreaElement.innerHTML = ''
      prizeAreaElement.classList.remove('is-winner');  
    }
    
  }
  render() {
    const { spinResults, isWinner } = this.state;
    return (
      <div>
        <Reel spinResults={spinResults} handleTransitionEnd={this.updateIsWinner}/>
        <PullButton pullFunction={this.updateState}/>
        <PrizeArea isWinner={isWinner}/>
      </div>
    )
  }
}

export default App
