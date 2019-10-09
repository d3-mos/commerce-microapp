import React from 'react';

import { MarkersLayer } from './MarkersLayer';
import { OLMapHandler } from './OLMapHandler';


/**
 * React component class use to generate a new OL Map. To create this code I used
 * "Icon Simbolizer" example of Open Layers documentation and "Using OpenLayers
 * with React" tutorial.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 3rd, 2019.
 * @link    https://openlayers.org/en/latest/examples/icon.html
 * @link    https://taylor.callsen.me/using-reactflux-with-openlayers-3-and-other-third-party-libraries/
 * @extends React.Component
 */
export class OLMapComponent extends React.Component {

  /**
   * Mount OL Map over this component when render the div container of map.
   */
  componentDidMount() {
    let mapHandler   = new OLMapHandler(this.refs.mapTarget);
    let markersLayer = new MarkersLayer();

    mapHandler.addLayer(markersLayer);
    this.setState({mapHandler, markersLayer});
  }

  /**
   * This method is use to update the markers in map.
   */
  componentDidUpdate = () =>
    this.state.markersLayer.setMarkers(this.props.markers);

  /**
   * Return a div element wil use to render the map.
   */
  render = () => <div className="map" ref="mapTarget"/>;
};