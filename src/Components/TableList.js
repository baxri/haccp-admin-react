import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { type } from 'os';
import styled from "styled-components";

export default class TableList extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <Card>
                    <CardHeader><i className="fa fa-align-justify"></i>{this.props.title}</CardHeader>
                    <CardBody>
                        {this.props.total && <MyBadge className="mr-1" color="danger">Total count: {this.props.total}</MyBadge>}

                        <Table responsive striped>
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
                                        {this.props.headers.map((header, key2) => {
                                            if (typeof header.accessor == 'function') {
                                                let func = header.accessor;
                                                return <td key={key2}>{func(item, key)}</td>
                                            } else {
                                                return <td key={key2}>{item[header.accessor]}</td>
                                            }
                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const MyBadge = styled(Badge)`
    margin-bottom: 20px;
    font-size: 12pt;
`;
