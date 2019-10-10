import { createStore, combineReducers } from 'redux';
import { markers } from './Locations';

export default createStore(
  combineReducers({markers})
);