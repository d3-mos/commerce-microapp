import React from 'react';
import { connect } from 'react-redux';
import { Swipeable } from 'react-swipeable';

import { showLocationDetails } from './../General/Store/LocationDetails'



export class DetailsCard extends React.Component{
  
  constructor (...props) {
    super(...props);
    this.state = {active: false}
  }

  renderDetails = ({locations, locationDetails}) => {
    if (locationDetails) {
      let location = locations.filter(l=>l.idStore === locationDetails)[0];
      
      return <React.Fragment>
       <img className="commerce-logo" src={location.logoLink}/>
       <button className="button --main">Ir Ahora</button>
       <p className="text--content">{location.address}</p>
      </React.Fragment>
    }
    return null;
  }
  
  render = () => 
    <Swipeable onSwipedRight={()=>this.props.showLocationDetails(null)}>
      <div className={`location-details ${!this.props.locationDetails?'--inactive':''}`}>
        {this.renderDetails(this.props)}
      </div>  
    </Swipeable>;
}

const mapState =({
  locations, locationDetails
}) => ({locations, locationDetails});

export default connect(mapState,{showLocationDetails})(DetailsCard);