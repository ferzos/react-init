import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* DEFINE ROUTE BELOW */}
    </Switch>
  </BrowserRouter>,
  app
);
registerServiceWorker();
