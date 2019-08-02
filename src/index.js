import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
import {robots} from './robots';

ReactDOM.render(
<div>
    <Card id='robots[0].id' name='robots[0].name' email='robots[0].email' />
    <Card id='robots[1].id' name='robots[1].name' email='robots[1].email' />
    <Card id='robots[2].id' name='robots[2].name' email='robots[2].email' />
    <Card id='robots[3].id' name='robots[3].name' email='robots[3].email' />
    <Card id='robots[4].id' name='robots[4].name' email='robots[4].email' />
    <Card id='robots[5].id' name='robots[5].name' email='robots[5].email' />
    <Card id='robots[6].id' name='robots[6].name' email='robots[6].email' />
    <Card id='robots[7].id' name='robots[7].name' email='robots[7].email' />
    <Card id='robots[8].id' name='robots[8].name' email='robots[8].email' />
    <Card id='robots[9].id' name='robots[9].name' email='robots[9].email' />
    <Card id='robots[10].id' name='robots[10].name' email='robots[10].email' />
    <Card id='robots[11].id' name='robots[11].name' email='robots[11].email' />
    <Card id='robots[12].id' name='robots[12].name' email='robots[12].email' />
    <Card id='robots[13].id' name='robots[13].name' email='robots[13].email' />
    <Card id='robots[14].id' name='robots[14].name' email='robots[14].email' />
    <Card id='robots[15].id' name='robots[15].name' email='robots[15].email' />
    <Card id='robots[16].id' name='robots[16].name' email='robots[16].email' />
    
</div>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
