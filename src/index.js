import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';
import MovieList from './components/movie_list';
import MovieDetail from './components/movie_detail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/movies/:id" component={MovieDetail}/>
            <Route path="/movies" component={MovieList}/>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
