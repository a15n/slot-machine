import React, { Component } from 'react';
import './App.css';
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
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this)
  }
  updateState() {
    const spinResults = spin();
    
    this.setState({ spinResults });
  }
  handleTransitionEnd() {
    let { isWinner, winnerType } = checkIfWinner(this.state.spinResults);

    // isWinner helper
    // isWinner = Math.random() > 0.5;
    // winnerType = 'tea'; // or 'coffee' or 'espresso'
    
    
    if (isWinner) {
      // when calling setState({isWinner}) each component (Reel, PullButton, PrizeArea) will be rendered again
      // Gotta hack this with the DOM, which is SUPER HACKY, but hey....
      const winnerImage = document.querySelector(`.PrizeArea-img.${winnerType}`);
      winnerImage.classList.add('visible')

      const reelElement = document.querySelector('.Reel')
      reelElement.classList.add('winning');
      reelElement.addEventListener('transitionend', e => {
        if (e.propertyName === 'transform') {
          reelElement.classList.remove('winning')  
        }
      })
    } else {
      document.querySelectorAll('.PrizeArea-img').forEach(el => el.classList.remove('visible'))
    }
    
  }
  render() {
    const { spinResults, isWinner } = this.state;
    return (
      <div className="SlotMachine">
        <Reel spinResults={spinResults} handleTransitionEnd={this.handleTransitionEnd}/>
        <div className="pullButtonContainer">
          <PullButton pullFunction={this.updateState}/>
        </div>
        <PrizeArea isWinner={isWinner}/>
      </div>
    )
  }
}

export default App
