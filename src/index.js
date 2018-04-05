import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import '../node_modules/bulma/css/bulma.css';
import Contacts from "./Contacts/Contacts";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/contacts' component={Contacts}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
