import { createStore, combineReducers } from 'redux';
import { reducer as locations } from './Locations';
import { reducer as filters } from './Filter';


export default createStore(
  combineReducers({
    locations, filters
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);