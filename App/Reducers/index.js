import { combineReducers } from 'redux';
import FlightReducer from './FlightReducer';

export default combineReducers({
    flight: FlightReducer
})