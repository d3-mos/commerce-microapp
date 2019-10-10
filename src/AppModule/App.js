import React from 'react';
import { Provider } from 'react-redux';

import store from './General/Store';
import LocationsMap    from './LocationsMap'
import LocationsFilter from './LocationsFilter'


/**
 * Represents the main application component.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @since   Oct 9th, 2019. Redefine as function component.
 */
export const App = () => 
    <Provider store={store}>
      <LocationsMap/>
      <div className="layout">
        <LocationsFilter/>
      </div>
    </Provider>;