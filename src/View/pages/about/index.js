import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class About extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Desgin By Bill Nguyen</h1>
                    <p className="lead">cùng nhau học tập, cùng nhau cố gắng!!</p>
                    <hr className="my-2" />
                </Jumbotron>
            </div>
        );
    }
}   