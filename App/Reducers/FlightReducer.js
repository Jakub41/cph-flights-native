import {FETCHING_FLIGHTS_DATA, FETCHING_FLIGHTS_DATA_SUCCESS, FETCHING_FLIGHTS_DATA_FAIL} from "../Utils/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_FLIGHTS_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_FLIGHTS_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data:
                    action.payload.type === 'arrivals' ? action.payload.data:
                        action.payload.type === 'departures' ? action.payload.data: '',
                hasError: false,
                errorMessage: null,
            });

        case FETCHING_FLIGHTS_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });

        default:
            return state;
    }
}