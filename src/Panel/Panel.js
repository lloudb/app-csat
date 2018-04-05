import React from 'react';
import item from './item.json';


export default class Panel extends React.Component {
    render() {
        var el = item.map(x =>
            <li>
                <a href={x.to}>
                    {x.name}
                </a>
            </li>
        )
        return (
            <div>
                <div className="tabs is-small is-centered">
                    <ul>
                        {el}
                    </ul>
                </div>
            </div>
        )
    }
}