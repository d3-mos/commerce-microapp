import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY as apiKey } from './../../env'



class MapContainer extends React.Component {
  
  constructor(...props) {
    super(...props);
    this.state = {
      markers: [],
      center: {lat: 47.444, lng: -122.176} 
    };
  }
  
  componentDidMount() {
    //suscribe to map and center changes
  }
  
  renderMarkers = () =>
    this.state.markers.map(([lat, lng, click], i) =>
      <Marker key={i} position={{lat,lng}} onClick={click}/>)
  
  render = () =>
    <Map
      google={this.props.google}
      zoom={12} style={mapStyles}
      disableDefaultUI={true}
      initialCenter={this.state.center}>
        {this.renderMarkers()}
    </Map>;
}

const mapStyles = {
  width:  '100vw',
  height: '100vh'
};

export default GoogleApiWrapper({apiKey})(MapContainer);