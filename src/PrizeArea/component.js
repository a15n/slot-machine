import React, { Component } from 'react';

class PrizeArea extends Component {
  render() {
    const winnerLoser = this.props.isWinner ? 'Winner' : 'Loser';
    return <h1>{winnerLoser}</h1>
  }
}

PrizeArea.PropTypes = {
  isWinner: React.PropTypes.bool.isRequired,
};

export default PrizeArea;
