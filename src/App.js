import React, { Component } from 'react'
import PullButton from './PullButton/component'
import { spin, checkIfWinner } from './utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reel: [],
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
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <div>
          <PullButton pullFunction={this.updateState}/>
        </div>
      </div>
    )
  }
}

export default App
