import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../Auth';

import Login from '../../View/pages/login';
import Home from '../../View/pages/home';
import About from '../../View/pages/about';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/about" component={About} />
        </Switch>
    </Router>
);

export default Routes;