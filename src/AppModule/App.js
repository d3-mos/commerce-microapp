import React from 'react';
import { Provider } from 'react-redux';

import store from './General/Store';
import { FilterMenu } from './LocationsFilter/FilterMenu';
import MapComponent   from './LocationsMap/MapComponent'


/**
 * Represents the main application component.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @extends React.Component
 */
export class App extends React.Component {

  /**
   * Constructor method. Start the markers state as empty array.
   * 
   * @param {...any} props Arguments to send to React.Component constructor.  
   */
  constructor(...props) {
    super(...props);
    this.state = {markers: []}
  }


  //updateMarker(newMarker) {
  //  let {markers} = this.state;
  //  markers.push(newMarker);
  //  this.setState(markers);
  //}


  /**
   * https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f
   * https://cloud.google.com/maps-platform/pricing/sheet/?hl=es-419
   */
  componentDidMount() {
    //setTimeout(() => this.updateMarker([-99.1439732,19.4357385]), 1000);
    //setTimeout(() => this.updateMarker([-99.1468056,19.436907]),  2000);
    //setTimeout(() => this.updateMarker([-99.1405306,19.4380755]), 3000);
    //setTimeout(() => this.updateMarker([-99.1410457,19.4379844]), 4000);
    //setTimeout(() => this.updateMarker([-99.14056,19.4339303]),   5000);
  }


  /** 
   * Render the main application layer.
   * 
   * @since Oct 9th, 2019. Add store object to Redux Provider component.
   */
  render = () => 
    <Provider store={store}>
      <MapComponent/>
      <div className="layout">
        <FilterMenu/>
      </div>
    </Provider>;
}

//Check https://medium.com/bother7-blog/drag-and-drop-functionality-in-react-eaa4161a041d
