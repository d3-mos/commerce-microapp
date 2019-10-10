import React from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY as apiKey } from '../../env'


/** 
 * This component render the map and locations stored as markers.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10th, 2019.
 * 
 * @param   {array}  p.locations   Locations array.
 * @param   {object} p.google      Google background data to generate map.
 * @returns {React.Component<Map>} Google maps container.
 */
const MapContainer = ({locations, google}) => 
  <Map
    google={google} zoom={16} className="map"
    disableDefaultUI={true}
    initialCenter={{lat: 19.4357385, lng: -99.1439732}}>
      {locations.map(([lng,lat], i) => <Marker key={i} position={{lat,lng}} />)}
  </Map>;

const MapWrapper = GoogleApiWrapper({apiKey})(MapContainer);

export default connect(({locations}) => ({locations}))(MapWrapper);