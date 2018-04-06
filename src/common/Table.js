import React from 'react';

class Table extends React.Component {
    render(){
        var el = this.props.item.map( x =>
            <th>{x}</th>
        );
        return(
            <div>
                <table className="table is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        {el}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;