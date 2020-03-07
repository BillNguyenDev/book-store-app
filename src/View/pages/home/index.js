
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HeaderHome from '../../components/HeaderHome';
import About from '../about';
import ListBook from '../listBook';

const Home = props => {
    return (
        <Router>
            <HeaderHome users={props.users}/>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <ListBook/>
                </Route>
            </Switch>
        </Router>
    );
}
export default Home;