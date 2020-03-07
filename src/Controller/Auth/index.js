import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const isAuth = () => {

    if (localStorage.getItem('token') !== null) {
        let token = localStorage.getItem('token');
        try {
         var decoded = jwt.verify(token, 'shhhhh');
            return true;
          } catch(err) {
            // err
            return false;
          }
    }
    return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Component {...props} users = {jwt.verify(localStorage.getItem('token'), 'shhhhh').usersId}/>
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                // state: { message: 'erorr auth.js' }
                            }}
                        />
                    )}
        />
    );
}

export default PrivateRoute;