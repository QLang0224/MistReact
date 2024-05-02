import React, { Component } from 'react';
import { fetchForecast } from "../actions/forecastActions";
import { setForecast } from "../actions/forecastActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill} from 'react-icons/bs'
import {LinkContainer} from 'react-router-bootstrap';

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchForecast());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setForecast(this.props.forecast[selectedIndex]));
    }

    handleClick = (forecast) => {
        const {dispatch} = this.props;
        dispatch(setForecast(forecast));
    }

    render() {
        const ForecastListCarousel = ({forecastList}) => {
            if (!forecastList) {
                return <div>Loading...</div>
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {forecastList.map((forecast) =>
                        <Carousel.Item key={forecast._id}>
                            <div>
                                <LinkContainer to={'/forecast/'+forecast._id} onClick={()=>this.handleClick(forecast)}>
                                    <Nav.Link><Image className="image" src={forecast.imageUrl} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{forecast.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            )
        }

        return (
            <ForecastListCarousel forecastList={this.props.forecastlist} />
        )
    }
}

const mapStateToProps = state => {
    return {
        forecast: state.forecast.forecastlist
    }
}

export default connect(mapStateToProps)(ForecastList);

