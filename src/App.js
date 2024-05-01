import React from 'react';
import './App.css';
import MistHeader from './components/movieheader';
import ForecastList from './components/movielist';
import Forecast from './components/movie';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={()=><Forecast />}/>
            <Route exact path="/forecast" render={()=><ForecastList />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
