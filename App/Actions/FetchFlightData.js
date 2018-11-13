import axios from 'axios';
import { apiBaseURL } from "../Utils/Constants";
import {
    FETCHING_FLIGHTS_DATA
    ,FETCHING_FLIGHTS_DATA_SUCCESS,
    FETCHING_FLIGHTS_DATA_FAIL
} from "../Utils/ActionTypes";

export default function FetchFlightData() {
    return dispatch => {
        dispatch({ type: FETCHING_FLIGHTS_DATA});
        return axios.get(`${apiBaseURL}/departures`)
            .then(res => {
                dispatch({ type: FETCHING_FLIGHTS_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCHING_FLIGHTS_DATA_FAIL, payload: err.data})
            })
    }
}