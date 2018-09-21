import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import 'normalize.css';
import './stylesheets/index.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
