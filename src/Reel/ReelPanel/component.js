import React, { Component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import coffeeFilterSrc from './images/coffee-filter.jpg';
import coffeeMakerSrc from './images/coffee-maker.jpg';
import coffeeGroundsSrc from './images/coffee-grounds.jpg';
import teapotSrc from './images/teapot.jpg';
import teaStrainerSrc from './images/tea-strainer.jpg';
import looseTeaSrc from './images/loose-tea.jpg';
import espressoMachineSrc from './images/espresso-machine.jpg';
import espressoTamperSrc from './images/espresso-tamper.jpg';
import espressoBeansSrc from './images/espresso-beans.jpg';

const imageMap = {
  'coffee-maker': coffeeMakerSrc,
  'coffee-filter': coffeeFilterSrc,
  'coffee-grounds': coffeeGroundsSrc,
  'teapot': teapotSrc,
  'tea-strainer': teaStrainerSrc,
  'loose-tea': looseTeaSrc,
  'espresso-machine': espressoMachineSrc,
  'espresso-tamper': espressoTamperSrc,
  'espresso-beans': espressoBeansSrc,
}

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
    /*IF reelPanelHeight IS CHANGED THEN WIDTH/HEIGHT MUST BE CHANGED*/
    const reelPanelHeight = 200;

    const newMarginTop = lastMatchingElementIndex * reelPanelHeight * -1;
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
    const imgSrc = imageMap[el];
    return (
      <div key={i} className="slot">
        <img src={imgSrc} alt={el}/>
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
