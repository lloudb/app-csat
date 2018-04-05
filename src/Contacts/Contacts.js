import React from 'react';

class Contacts extends React.Component {
    render () {
        return(
            <div className="columns">
                <div className="column is-one-quarter">
                    <a href="" className="button">Добавить контакт</a>
                </div>
                <div className="column is-half">
                    <input type="text" className="input" placeholder='text'/>
                </div>
            </div>
        )
    }
}

export default Contacts;