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
   * Recover all commerce locations to show to user.
   */
  componentDidMount() {
    let { push } = this.props;

    FilterService
    .getLocations()
    .then(locations => locations.forEach( location => push(location) ));
  }
  
  /**
   * Render the filter menu view.
   */
  render = () => <FilterMenu/>
} 

export default connect(null, {push})(LocationsFilter)