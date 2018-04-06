import React from 'react';

class Request extends React.Component {
    render () {
        var item = [
            "Фамилия","Имя","Отчество","Контактый телефон","Мобильный телефон",
            "Внутренний телефон","Тип контакта","Контактный e-mail"
        ];
        return (
            <Head textButton='Добавить заявку'/>
        )
    }
}