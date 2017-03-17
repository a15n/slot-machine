import React, { Component } from 'react';
import './style.css';
import cupOfCoffeeSrc from './images/cup-of-coffee.jpg';
import cupOfTeaSrc from './images/cup-of-tea.jpg'
import cupOfEspressoSrc from './images/cup-of-espresso.jpg'

class PrizeArea extends Component {
  render() {
    return (
      <div className="PrizeArea">
        <img className="PrizeArea-img coffee" src={cupOfCoffeeSrc} alt="cup of coffee"/>
        <img className="PrizeArea-img tea" src={cupOfTeaSrc} alt="cup of tea"/>
        <img className="PrizeArea-img espresso" src={cupOfEspressoSrc} alt="cup of espresso"/>
      </div>
    )
  }
}

export default PrizeArea;
