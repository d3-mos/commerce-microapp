import React from 'react';
import { Swipeable } from 'react-swipeable';


export class DetailsCard extends React.Component{
  
  constructor (...props) {
    super(...props);
    this.state = {active: true}
  }

  render = () =>
    <Swipeable onSwipedRight={()=>this.setState({active: false})}>
      <div className={`location-details ${!this.state.active?'--inactive':''}`}>
        <img className="commerce-logo" src="assets/inbursa-logo.png"/>
        <button className="button --main">Ir Ahora</button>
        <p className="text--content">Blvd. Miguel de Cervantes Saavedra 303, Amp Granada, 11529 Ciudad de México, CDMX</p>
      </div>
    </Swipeable>;
}