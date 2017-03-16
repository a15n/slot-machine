import React, { Component } from 'react'

class PullButton extends Component {
  render() {
    const { pullFunction } = this.props;
    return (
      <button onClick={pullFunction}>Pull me</button>
    )
  }
}

PullButton.PropTypes = {
  pullFunction: React.PropTypes.func.isRequired,
}

export default PullButton
