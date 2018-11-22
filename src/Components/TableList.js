import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { type } from 'os';

export default class TableList extends Component {

    componentDidMount() {
    }

    render() {

        console.log(this.props.data);


        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            {this.props.headers.map(header => {
                                return <th key={header.name}>{header.name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item, key) => {
                            return <tr key={key}>
                                {this.props.headers.map((header, key) => {
                                    if (typeof header.accessor == 'function') {
                                        let func = header.accessor;
                                        return <td key={key}>{func(item)}</td>
                                    } else {
                                        return <td key={key}>{item[header.accessor]}</td>
                                    }
                                })}
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
