import React from 'react';
import Card from './Card.js';
import item from './item.json';

class Objects extends React.Component {
    render() {
        var left = item.left.map(x =>
            <div className="tile is-child">
                <Card head={x.head} text={x.text}/>
            </div>
        );
        var right = item.right.map(x =>
            <div className="tile is-child">
                <Card head={x.head} text={x.text}/>
            </div>
        )
        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                    {left}
                </div>
                <div className="tile is-parent is-vertical">
                    {right}
                </div>
            </div>
        )
    }
}

export default Objects;