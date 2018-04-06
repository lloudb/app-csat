import React from 'react';
import Head from '../common/Head';
import Table from '../common/Table'

class Contacts extends React.Component {
    render () {
        var item = [
            "Фамилия","Имя","Отчество","Контактый телефон","Мобильный телефон",
            "Внутренний телефон","Тип контакта","Контактный e-mail"
        ];
        return(
            <div className="notification">
                <Head textButton='Добавить контакт' href="/contacts/addContact"/>
                <Table item={item}/>
            </div>
        )
    }
}

export default Contacts;