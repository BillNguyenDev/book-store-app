import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import express from 'express';
require('dotenv').config();

console.log(process.env);
// console.log(global.process.env)
// import "bootstrap/less/bootstrap.less";
// import firebase from './Model/config';
// import data from './data/db.json';
// // console.log(data.length); // object
// data.map((item) => firebase
//     .firestore()
//     .collection('products').add({
//         name: item.name,
//         url_avatar:item.url_avatar

// }));


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
