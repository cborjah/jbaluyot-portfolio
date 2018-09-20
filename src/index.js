import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import 'normalize.css';
import './style/index.css';

import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Navbar />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
