import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import TodaysWeather from './components/movielist';
import Movie from './components/movie';
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
            <Route exact path="/" render={()=><TodaysWeather />}/>
            <Route exact path="/TodaysWeather" render={()=><TodaysWeather />}/>
            <Route exact path="/ThisWeeksWeather" render={()=><ThisWeeksWeather />}/>
            <Route exact path="/Calendar" render={()=><Calendar />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
