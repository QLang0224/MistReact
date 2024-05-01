import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";

// support routing

function Forecast(props) {
    const [selectedForecast] = useState(props.selectedForecast);
    const params = useParams();
    const dispatch = useDispatch();
    if (selectedMovie == null) {
        dispatch(fetchForecast(Forecast));
    }

    return (<Forecast />)
}

export default Movie;
