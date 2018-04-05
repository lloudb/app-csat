import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <article className="message is-success">
                <div className="message-header">
                    <p>{this.props.head}</p>
                </div>
                <div className="message-body">{this.props.text}</div>
            </article>
        )
    }
}

export default Card;