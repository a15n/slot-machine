import React, { Component } from 'react';
import './style.css';
import ReelPanel from './ReelPanel/component';

class Reel extends Component {
  renderPanel(panelText, i) {
    return (
      <div key={i}>
        <ReelPanel panelText={panelText}></ReelPanel>
      </div>
    )
  }
  render() {
    const { reel } = this.props
    return (
      <div className="Reel">
        {reel.map(this.renderPanel)}
      </div>
      
    )
  }
}

Reel.propTypes = {
  reel: React.PropTypes.array.isRequired,
}

export default Reel;
