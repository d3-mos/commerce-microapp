import { createStore, combineReducers } from 'redux';
import { reducer as locations } from './Locations';


export default createStore(
  combineReducers({locations}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);