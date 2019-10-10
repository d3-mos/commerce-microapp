import React from 'react';
import { connect } from 'react-redux';

import { FilterMenu } from './FilterMenu';
import { push } from '../General/Store/Locations';
import * as FilterService from './FilterService';


/**
 * This class represents the Locations Filter Component and manage the state
 * of location markers.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 9th, 2019.
 * @extends React.Component
 */
class LocationsFilter extends React.Component {

  /**
   * https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f
   * https://cloud.google.com/maps-platform/pricing/sheet/?hl=es-419
   */
  componentDidMount() {
    let { push } = this.props;

    //FilterService
    //.getLocations()
    //.then(x => console.log(x))
    setTimeout(() => push([-99.1439732,19.4357385]), 1000);
    setTimeout(() => push([-99.1468056,19.436907]),  2000);
    setTimeout(() => push([-99.1405306,19.4380755]), 3000);
    setTimeout(() => push([-99.1410457,19.4379844]), 4000);
    setTimeout(() => push([-99.14056,19.4339303]),   5000);
  }
  
  
  render = () => <FilterMenu/>
} 

export default connect(null, {push})(LocationsFilter)