import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import '../node_modules/bulma/css/bulma.css';

import App from './App';
import Contacts from "./Contacts/Contacts";
import Head from './Head/Head';
import Objects from "./Objects/Objects";
import Leads from "./Leads/Leads";
import AddLead from "./Leads/AddLead";
import AddContact from "./Contacts/AddContact";

ReactDOM.render(
    <BrowserRouter>
            <div>
                <Route path='/' component={Head}/>
                <Route exact path='/' component={App}/>
                <Route exact path='/contacts' component={Contacts}/>
                    <Route path='/contacts/addContact' component={AddContact}/>
                <Route path='/objects' component={Objects}/>
                <Route exact path='/leads' component={Leads}/>
                    <Route path='/leads/addLead' component={AddLead}/>
            </div>
    </BrowserRouter>,
    document.getElementById('root')
);
