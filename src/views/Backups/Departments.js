import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import { realm } from "../../gateway/index";
import TableList from "../../Components/TableList";
import { Badge } from 'reactstrap';

export default class Departmnets extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            department: [],
            total: 0,
            headers: [
                {
                    name: 'Department',
                    accessor: 'name'
                }

            ]
        }
    }

    async componentDidMount() {
        let department = await realm('Department', this.props.match.params.id);

        this.setState({
            department: department.list,
            total: department.total,
            loading: false,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.loading && <ContentLoaderTable />}
                {!this.state.loading && <TableList title="List of departments" total={this.state.total} headers={this.state.headers} data={this.state.department} />}
            </div>
        )
    }
}
