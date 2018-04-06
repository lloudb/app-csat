import React from 'react';

class AddLead extends React.Component {
    render(){
        return(
            <div className="container notification">
                <div className="columns">
                    <div className="column">
                        <a href="" className="button">Выберите адрес</a>
                        Название объекта
                    </div>
                    <div className="column">
                        <div className="select is-fullwidth">
                            <select name="" id="">
                                <option value="">Выберите неисправность...</option>
                                <option value="">item №2</option>
                                <option value="">item №3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="columns field">
                    <div className="column">
                        <div className="select is-fullwidth">
                            <select name="" id="">
                                <option value="">Выберите приоритет...</option>
                                <option value="">item №2</option>
                                <option value="">item №3</option>
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <input type="text" placeholder="Контактное лицо" className="input"/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="is-full">
                            <textarea className="textarea is-fullwidth" name="" id="" rows="5" placeholder="Информация"></textarea>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="select is-fullwidth">
                            <select name="" id="">
                                <option value="">Выберите ответственного инженера...</option>
                                <option value="">item №2</option>
                                <option value="">item №3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <a href="/leads" className="button">Отправить</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddLead;
