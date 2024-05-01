import constants from '../constants/actionTypes'

let initialState = {
      movies: [],
      selectedForecast: null
}

const forecastReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.SET_FORECAST:
                  updated['selectedForecast'] = action.selectedForecast;
                  return updated;
            case constants.FETCH_FORECAST:
                  updated['selectedForecast'] = action.selectedForecast;
                  return updated;
            default:
                  return state;
      }
}

export default forecastReducer;
