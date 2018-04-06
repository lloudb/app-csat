import React from 'react';
import Head from '../common/Head';
import Table from '../common/Table';

class Objects extends React.Component {
    render(){
        var item = ["Название","Адрес","Район","Тип обслуживания","Категория объекта","Участок",
            "Инженер","Ответственное лицо","Персональный менеджер"];
        return(
            <div className="notification">
                <Head textButton='Добавить объекты'/>
                <Table item={item} />
            </div>
        )
    }
}

export default Objects;