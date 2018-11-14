import axios from 'axios';
import { apiBaseURL } from "../Utils/Constants";
import {
    FETCHING_FLIGHTS_DATA
    ,FETCHING_FLIGHTS_DATA_SUCCESS,
    FETCHING_FLIGHTS_DATA_FAIL
} from "../Utils/ActionTypes";

export default function FetchFlightData(flightType) {
    return dispatch => {
        dispatch({ type: FETCHING_FLIGHTS_DATA});
        return axios.get(`${apiBaseURL}/${flightType}`)
            .then(res => {
                dispatch({ type: FETCHING_FLIGHTS_DATA_SUCCESS, payload: {data:res.data,type:flightType}})
            })
            .catch(err => {
                dispatch({ type: FETCHING_FLIGHTS_DATA_FAIL, payload: err.data})
            })
    }
}