import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function forecastFetched(forecast) {
    return {
        type: actionTypes.FETCH_FORECAST,
        selectedForecast: forecast
    }
}

function forecastSet(forecast) {
    return {
        type: actionTypes.SET_FORECAST,
        selectedForecast: forecast
    }
}

export function setForecast(forecast) {
    return dispatch => {
        dispatch(forecastSet(forecast));
    }
}

export function fetchForecast() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecast`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(forecastFetched(res));
        }).catch((e) => console.log(e));
    }
}
