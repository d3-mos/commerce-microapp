import React from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { GOOGLE_MAPS_API_KEY as apiKey } from '../../env'
import { showLocationDetails } from './../General/Store/LocationDetails'
import { LocationMarker } from './LocationMarker'
import { applyFilters } from './../LocationsFilter/FilterAppAction'

/**
 * Represent the coordinates of Mexico City (Alameda central).
 * 
 * @since Oct 10th, 2019.
 * @const
 * @type {Object}
 */
const defaultCenter = {lat: 19.4357385, lng: -99.1439732};


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
  locations, filters, center=defaultCenter, google, showLocationDetails
}) => 
  <Map
   styles={mapStyles}
   className="map"
    maxZoom={16}
    minZoom={11}
    disableDefaultUI={true} 
    google={google}
    zoom={12}
    initialCenter={center}>
      {applyFilters(locations, filters).map(
        location => LocationMarker(location, google, showLocationDetails)
      )}
  </Map>;

/**
 * This styles quit other places to show correctly the locations of commerces.
 * See the GitHug comment to see the solution.
 * 
 * @link https://github.com/tomchentw/react-google-maps/issues/749
 */
const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [ { visibility: "off" } ]
  }
];

/**
 * With this wrapper Google API bind the "google" object. 
 */
const MapWrapper = GoogleApiWrapper({apiKey})(MapContainer);

/**
 * Function to map state storage to props over a component.
 * To more information see the Redux documentation.
 * 
 * @link https://es.redux.js.org/docs/basico/uso-con-react.html 
 */
const mapState = ({
  locations, filters, 
}) => ({locations, filters });

export default connect(mapState, {showLocationDetails})(MapWrapper);