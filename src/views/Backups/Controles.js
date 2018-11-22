import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import { realm } from "../../gateway/index";
import TableList from "../../Components/TableList";
import { Badge } from 'reactstrap';

export default class Controles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            controles: [],
            headers: [
                {
                    name: 'Department',
                    accessor: (item) => {
                        return item.department.name;
                    }
                },
                {
                    name: 'User',
                    accessor: (item) => {
                        return item.user.name + ' ' + item.user.lastname;
                    }
                },
                {
                    name: 'Date',
                    accessor: 'date'
                },
                {
                    name: 'Type',
                    accessor: 'type'
                },
                {
                    name: 'Confirmed',
                    accessor: 'confirmed',
                    accessor: (item) => {

                        if (item.confirmed) {
                            return <Badge className="mr-1" color="success">Success</Badge>
                        } else {
                            return <Badge className="mr-1" color="danger" pill>Danger</Badge>
                        }

                    }
                }
            ]
        }
    }

    async componentDidMount() {
        let controles = await realm('Controle', this.props.match.params.id);

        this.setState({
            controles: controles,
            loading: false,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.loading && <ContentLoaderTable />}
                {!this.state.loading && <TableList headers={this.state.headers} data={this.state.controles} />}
            </div>
        )
    }
}
