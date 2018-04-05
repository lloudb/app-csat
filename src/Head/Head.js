import React from 'react';
import 'bulma/css/bulma.css';
import item from './menu.json';
import './script';

export default class Head extends React.Component {
    render () {
        var el = item.map(x =>
            <a href={x.to} className="navbar-item">{x.name}</a>)
        return(
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://www.csat.ru/img/logo.svg" alt='' width="112" height="28"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        {el}
                    </div>
                </div>
            </nav>
        )
    }
}