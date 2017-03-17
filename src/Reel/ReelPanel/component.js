import React, { Component } from 'react';
import './style.css';

class ReelPanel extends Component {
  render() {
    const { panelText } = this.props;
    return (
      <div className="ReelPanel">
        {panelText}
      </div>
    )
  }
}

ReelPanel.propTypes = {
  panelText: React.PropTypes.string.isRequired,
}

export default ReelPanel;
