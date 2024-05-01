import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {logoutUser} from "../actions/authActions";

class MistHeader extends Component {
    logout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        Mist
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                            <LinkContainer to="/movielist">
                                <Nav.Link disabled={!this.props.loggedIn}>Forecast</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/forecast/' + (this.props.selectedForecast ? this.props.selectedForecast : '')}>
                                <Nav.Link disabled={!this.props.loggedIn}>Calendar</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</Nav.Link>
                            </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn : state.auth.loggedIn,
        username : state.auth.username,
        //selectedForecast: state.forecast.selectedForecast
    }
}

export default connect(mapStateToProps)(MistHeader);
