import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';

import Login from '../View/pages/Login';
import Home from '../View/pages/Home';
import About from '../View/pages/About';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/about" component={About} />
        </Switch>
    </Router>
);

export default Routes;s