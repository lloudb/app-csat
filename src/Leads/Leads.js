import React from 'react';
import Head from '../common/Head';
import Table from '../common/Table';

class Leads extends React.Component {
    render(){
        var item = ["Дата заявки","Название объекта","Неисправность",
        "Приоритет","Контактное лицо","Информация","Ответственный менеджер"];
        return(
            <div className="notification">
                <Head textButton='Добавить заявку' href='leads/addLead'/>
                <Table item={item}/>
            </div>
        )
    }
}

export default Leads;