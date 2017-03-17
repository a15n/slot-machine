import React, { Component } from 'react'
import './style.css';

class PullButton extends Component {
  render() {
    const { pullFunction } = this.props;
    return (
      <button className="PullButton" onClick={pullFunction}>Pull me</button>
    )
  }
}

PullButton.propTypes = {
  pullFunction: React.PropTypes.func.isRequired,
}

export default PullButton
