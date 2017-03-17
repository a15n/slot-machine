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
    let { isWinner, winnerType } = checkIfWinner(this.state.spinResults);
    
    // HACK HACK HACK
    // when calling setState({isWinner}) each component (Reel, PullButton, PrizeArea) will be rendered again
    // Gotta hack this with the DOM, which is SUPER HACKY, but hey!!! 
    
    const prizeAreaElement = document.querySelector('.PrizeArea');
    if (isWinner) {
      prizeAreaElement.classList.add('is-winner');  
      const winnerImage = document.querySelector(`.PrizeArea-img.${winnerType}`);
      winnerImage.classList.add('visible')
    } else {
      prizeAreaElement.classList.remove('is-winner');  
      document.querySelectorAll('.PrizeArea-img').forEach(el => el.classList.remove('visible'))
    }
    
  }
  render() {
    const { spinResults, isWinner } = this.state;
    return (
      <div className="SlotMachine">
        <Reel spinResults={spinResults} handleTransitionEnd={this.updateIsWinner}/>
        <div className="pullButtonContainer">
          <PullButton pullFunction={this.updateState}/>
        </div>
        <PrizeArea isWinner={isWinner}/>
      </div>
    )
  }
}

export default App
