import React, { Component } from 'react';
import './style.css';
import { reelOneElements, reelTwoElements, reelThreeElements } from '../utils';
import ReelPanel from './ReelPanel/component';

class Reel extends Component {
  render() {
    const { spinResults } = this.props;
    const [ reelOneTarget, reelTwoTarget, reelThreeTarget ] = spinResults;
    return (
      <div className="Reel">
        <ReelPanel targetElement={reelOneTarget} reelElements={reelOneElements} />  
        <ReelPanel targetElement={reelTwoTarget} reelElements={reelTwoElements} />  
        <ReelPanel targetElement={reelThreeTarget} reelElements={reelThreeElements} />  
      </div>
    )
  }
}

Reel.propTypes = {
  spinResults: React.PropTypes.array.isRequired,
}

export default Reel;
