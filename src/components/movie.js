import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchForecast } from "../actions/movieActions";

// support routing

function Forecast(props) {
    const [selectedForecast] = useState(props.selectedForecast);
    const params = useParams();
    const dispatch = useDispatch();
    if (selectedForecast == null) {
        dispatch(fetchForecast(Forecast));
    }

    return (<Forecast />)
}

export default Forecast;
