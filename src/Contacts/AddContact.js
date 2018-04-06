import React from 'react';

class AddContact extends React.Component {
    render() {
        return(
            <div className="container notification">
                <div className="columns">
                    <div className="column">
                        <input type="text" placeholder="Фамилия" className="input"/>
                    </div>
                    <div className="column">
                        <input type="text" className="input" placeholder="Имя"/>
                    </div>
                    <div className="column">
                        <input type="text" className="input" placeholder="Отчество"/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <input type="text" className="input" placeholder="Контактный телефон"/>
                    </div>
                    <div className="column">
                        <input type="text" className="input" placeholder="Мобильный телефон"/>
                    </div>
                    <div className="column">
                        <input type="text" className="input" placeholder="Внутренний телефон"/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="select is-fullwidth">
                            <select name="" id="">
                                <option value="Типы контакта">Тип контакта</option>
                                <option value="Item #1">Item #1</option>
                                <option value="Item #2">Item #2</option>
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <input type="text" className="input" placeholder="Контактный e-mail"/>
                    </div>
                </div>
                <div className="columns is-centered">
                    <a href="/Contacts" className="button">Отправить</a>
                </div>
            </div>
        )
    }
}

export default AddContact;