import React, { Component } from 'react';
import './style.css';
import ReelPanel from './ReelPanel/component';
import { reelOneElements } from '../utils';

class Reel extends Component {
  render() {
    const { spinResults } = this.props;
    const [ reelOneTarget ] = spinResults;
    return (
      <div className="Reel">
        <ReelPanel targetElement={reelOneTarget} reelElements={reelOneElements} />  
      </div>
    )
  }
}

Reel.propTypes = {
  spinResults: React.PropTypes.array.isRequired,
}

export default Reel;
