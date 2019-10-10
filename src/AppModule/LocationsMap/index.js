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
 * This function apply the filters over several locations.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10th, 2019.
 * 
 * @param   {Array<Object>} locations Locations to apply the filter 
 * @param   {Set<string>} filters Array of filter keys
 * @returns {Arrayz<Object>} All locations when filters set is empty or
 *                           locations filtered when there are filter keys. 
 */
const applyFilters = (locations, filters) =>
  filters.size 
  ?locations.reduce( (acc, location) => 
     location.type.reduce( (flag, type) => flag || filters.has(type), false)
     ?acc.concat(location)
     :acc,
   [])
  :locations;

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
  locations, filters, center=defaultCenter, google
}) => 
  <Map className="map"
    disableDefaultUI={true} 
    google={google}
    zoom={12}
    initialCenter={center}>
      {applyFilters(locations, filters).map(location => locationMarker(location, google))}
  </Map>;

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
const mapState = ({locations, filters}) => ({locations, filters});

export default connect(mapState)(MapWrapper);