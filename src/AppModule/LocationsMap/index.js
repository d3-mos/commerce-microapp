import React from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY as apiKey } from '../../env'


/**
 * Represent the coordinates of Mexico City (Alameda central).
 * 
 * @since Oct 10th, 2019.
 * @const
 * @type {Object}
 */
const defaultCenter = {lat: 19.4357385, lng: -99.1439732};

/**
 * Represent the commerce marker.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10, 2019.
 * @returns {React.Component<Marker>}
 */
const locationMarker = ({idStore, lat, lng, iconLink}, google) => 
  <Marker
    key = {idStore}
    position={{lat,lng}}
    icon={{  
      url: iconLink,
      anchor: new google.maps.Point(32,32),
      scaledSize: new google.maps.Size(64,64)
    }} />;

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
const MapContainer = ({
  locations, center=defaultCenter, google
}) => 
  <Map className="map"
    disableDefaultUI={true} 
    google={google}
    zoom={12}
    initialCenter={center}>

      {locations.map(location => locationMarker(location, google))}
  </Map>;

const MapWrapper = GoogleApiWrapper({apiKey})(MapContainer);

export default connect(({locations}) => ({locations}))(MapWrapper);