import React from 'react';
import './App.css';
import MistHeader from './components/MistHeader';
import ForecastList from './components/forecastlist';
import Forecast from './components/forecast';
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
            <MistHeader />
            <Route exact path="/" render={()=><Forecast />}/>
            <Route exact path="/forecast" render={()=><Forecast />}/>
            <Route exact path="/forecastlist" render={()=><ForecastList />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
