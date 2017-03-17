import React, { Component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';

let cumulativeElementsArray = [];

class ReelPanel extends Component {
  constructor() {
    super();

    this.scrollToTargetElement = this.scrollToTargetElement.bind(this);
  }
  componentDidUpdate() {
    this.scrollToTargetElement();
  }
  scrollToTargetElement() {
    const { targetElement } = this.props;
    const lastMatchingElementIndex = cumulativeElementsArray.lastIndexOf(targetElement);

    const newMarginTop = lastMatchingElementIndex * 100 * -1;
    const wrapper = ReactDOM.findDOMNode(this.refs.wrapper);

    wrapper.style['margin-top'] = `${newMarginTop}px`;
    
    // bubble up that the transition has ended
    if (this.props.handleTransitionEnd) {
      wrapper.addEventListener('transitionend', (event) => {
        this.props.handleTransitionEnd();
      });
    }
  }
  renderReelElement(el, i) {
    return (
      <div key={i} className="slot">
        {el}
      </div>
    )
  }
  render() {
    const { reelElements } = this.props;
    // TODO explain this appraoch
    cumulativeElementsArray = cumulativeElementsArray
        .concat(reelElements)
        .concat(reelElements);
    return (
      <div className="ReelPanel">
        <div className="wrapper" ref='wrapper'>
          {cumulativeElementsArray.map(this.renderReelElement)}
        </div>
      </div>
    )
  }
}

ReelPanel.propTypes = {
  targetElement: React.PropTypes.string.isRequired,
  reelElements: React.PropTypes.array.isRequired,
  handleTransitionEnd: React.PropTypes.func,
}

export default ReelPanel;
