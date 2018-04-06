import React from 'react';

class Head extends React.Component {
    render () {
        return(
            <div className="columns is-gapless">
                <div className="column is-3">
                    <a href={this.props.href} className="button">{this.props.textButton}</a>
                </div>
                <div className="column is-3">
                    <input type="text" className="input"/>
                </div>
            </div>
        )
    }
}

export default Head;