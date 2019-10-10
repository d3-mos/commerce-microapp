import React from 'react';
import { Provider } from 'react-redux';

import store from './General/Store';
import LocationsMap    from './LocationsMap'
import LocationsFilter from './LocationsFilter'
import { DetailsCard } from './LocationDetails/DetailsCard';


/**
 * Represents the main application component.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @since   Oct 9th, 2019. Redefine as function component.
 */
export class App extends React.Component{

  constructor(...props) {
    super(...props);
    this.state = {layoutDown: false}
  }

  swipeActions = () => ({
    swipeUp:   () => this.setState({layoutDown: false}),
    swipeDown: () => this.setState({layoutDown: true}),
  })


  render = () => 
    <Provider store={store}>
      <LocationsMap/>
      <div className={`layout ${this.state.layoutDown?'--down':''}`}>
        <LocationsFilter {...this.swipeActions()}/>
        <DetailsCard/>
      </div>
    </Provider>;
}